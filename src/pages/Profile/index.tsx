import { Component, createSignal, onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";
import toast from "solid-toast";
import { jwtDecode } from "jwt-decode";
import Navbar from "../../components/Navbar/Navbar";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";
import { handleDeleteAccount } from "../../Auth/HandleDeleteAccount";
import "../../styles/transitions.css";

interface UserInfo {
  email: string;
  name: string;
  createdAt: string;
}

const Profile: Component = () => {
  const [userInfo, setUserInfo] = createSignal<UserInfo | null>(null);
  const [isDeleting, setIsDeleting] = createSignal(false);
  const [showConfirmDialog, setShowConfirmDialog] = createSignal(false);
  const [isPageVisible, setIsPageVisible] = createSignal(false);
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
      });

      setIsPageVisible(true);
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
    <div
      class={`min-h-screen bg-gray-50 dark:bg-[#21204F] ${
        isPageVisible() ? "page-enter-active" : "page-enter"
      }`}
    >
      <Navbar />
      <div class="max-w-4xl mx-auto px-4 py-8 mt-16">
        <div class="bg-white dark:bg-[#2d2c5e] rounded-lg shadow-md p-6">
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Profile Settings
          </h1>

          {userInfo() && (
            <div class="space-y-4">
              <div class="border-b dark:border-gray-700 pb-4">
                <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Account Information
                </h2>
                <div class="space-y-2">
                  <p class="text-gray-600 dark:text-gray-300">
                    Name: {userInfo()?.name}
                  </p>
                  <p class="text-gray-600 dark:text-gray-300">
                    Email: {userInfo()?.email}
                  </p>
                  <p class="text-gray-600 dark:text-gray-300">
                    Member since: {userInfo()?.createdAt}
                  </p>
                </div>
              </div>

              <div class="pt-4">
                <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Danger Zone
                </h2>
                <button
                  onClick={onDeleteClick}
                  disabled={isDeleting()}
                  class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 
                         transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                         focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                         dark:focus:ring-offset-gray-800"
                >
                  {isDeleting() ? "Deleting..." : "Delete Account"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {showConfirmDialog() ? (
        <ConfirmDialog
          onClose={onCancelDelete}
          onConfirm={onConfirmDelete}
          title="Delete Account"
          message="Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently deleted."
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Profile;
