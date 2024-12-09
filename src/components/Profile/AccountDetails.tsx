import { Component } from "solid-js";

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

const AccountDetails: Component<{
    userInfo: UserInfo | null;
    onDeleteClick: () => void;
    isDeleting: boolean;
  }> = ({ userInfo, onDeleteClick, isDeleting }) => {
    return (
      <div class="md:col-span-2 space-y-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Account Information
          </h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-300">Joined On</span>
              <span class="font-medium text-gray-800 dark:text-white">
                {userInfo?.createdAt}
              </span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-300">Email Address</span>
              <span class="font-medium text-gray-800 dark:text-white">
                {userInfo?.email}
              </span>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Security
          </h3>
          <div class="space-y-4">
            <button
              class="
                w-full
                px-4
                py-2
                bg-gray-600
                text-white
                rounded-lg
                hover:bg-gray-700
                transition-colors
                duration-300
              "
            >
              Change Password
            </button>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-red-600 mb-4">Danger Zone</h3>
          <button
            onClick={onDeleteClick}
            disabled={isDeleting}
            class="
              w-full
              px-4
              py-3
              bg-red-600
              text-white
              rounded-lg
              hover:bg-red-700
              focus:outline-none
              focus:ring-2
              focus:ring-red-500
              focus:ring-offset-2
              dark:focus:ring-offset-gray-800
              transition-colors
              duration-300
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {isDeleting ? "Deleting..." : "Delete Account"}
          </button>
        </div>
      </div>
    );
  };

  export default AccountDetails;