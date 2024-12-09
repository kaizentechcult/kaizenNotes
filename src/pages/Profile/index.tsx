import { Component, createSignal, onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";
import toast from "solid-toast";
import { jwtDecode } from "jwt-decode";
import Navbar from "../../components/Navbar/Navbar";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";
import { handleDeleteAccount } from "../../Auth/HandleDeleteAccount";
import AccountDetails from "../../components/Profile/AccountDetails";

interface UserInfo {
  email: string;
  name: string;
  createdAt: string;
  notesCount: number;
  totalStorage: number;
  usedStorage: number;
}

interface SubscriptionPlan {
  name: string;
  maxNotes: number;
  maxStorage: number;
}

const Profile: Component = () => {
  const [userInfo, setUserInfo] = createSignal<UserInfo | null>(null);
  const [isDeleting, setIsDeleting] = createSignal(false);
  const [showConfirmDialog, setShowConfirmDialog] = createSignal(false);
  const [subscriptionPlan, setSubscriptionPlan] =
    createSignal<SubscriptionPlan>({
      name: "Free Tier",
      maxNotes: 50,
      maxStorage: 5 * 1024 * 1024, // 5MB in bytes
    });
  const navigate = useNavigate();

  onMount(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token) as any;
      setUserInfo({
        email: decoded.email || "failed-to-fetch",
        name: decoded.name || "failed-to-fetch",
        createdAt: new Date(decoded.iat * 1000).toLocaleDateString(),
        notesCount: decoded.notesCount || 0,
        totalStorage: decoded.totalStorage || 5 * 1024 * 1024,
        usedStorage: decoded.usedStorage || 0,
      });
    } catch (error) {
      console.error("Error decoding token:", error);
      navigate("/login");
    }
  });

  const onDeleteClick = () => {
    setShowConfirmDialog(true);
  };

  const onCancelDelete = () => {
    setShowConfirmDialog(false);
  };

  const calculateStoragePercentage = () => {
    const info = userInfo();
    return info ? Math.round((info.usedStorage / info.totalStorage) * 100) : 0;
  };

  const onConfirmDelete = async () => {
    try {
      setIsDeleting(true);
      const token = localStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await handleDeleteAccount(token);

      if (response.success) {
        toast.success("Account deleted successfully");
        navigate("/login");
      } else {
        throw new Error(response.message || "Failed to delete account");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to delete account"
      );
    } finally {
      setIsDeleting(false);
      setShowConfirmDialog(false);
    }
  };

  return (
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div class="container mx-auto px-4 py-8 max-w-4xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div class="md:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-fit">
            <div class="flex flex-col items-center">
              <div class="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mb-4 flex items-center justify-center">
                <span class="text-3xl font-bold text-gray-600 dark:text-gray-300">
                  {userInfo()?.name[0].toUpperCase()}
                </span>
              </div>
              <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
                {userInfo()?.name}
              </h2>
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                {userInfo()?.email}
              </p>
            </div>
          </div>
          <AccountDetails
            userInfo={userInfo()}
            onDeleteClick={onDeleteClick}
            isDeleting={isDeleting()}
          />
        </div>
      </div>
      {showConfirmDialog() ? (
        <ConfirmDialog
          onClose={onCancelDelete}
          onConfirm={onConfirmDelete}
          title="Delete Account"
          message="Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently deleted."
        />
      ) : null}
    </div>
  );
};

export default Profile;
