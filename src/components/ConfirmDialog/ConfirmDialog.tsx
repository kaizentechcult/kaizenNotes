import { Component } from "solid-js";

interface Props {
  // isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const ConfirmDialog: Component<Props> = (props) => {
  // if (!props.isOpen) return null;

  return (
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white dark:bg-[#2d2c5e] rounded-lg shadow-xl w-full max-w-md transform transition-all ">
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {props.title}
          </h3>
          <p class="text-gray-500 dark:text-gray-300 mb-6">{props.message}</p>

          <div class="flex justify-end gap-3">
            <button
              onClick={props.onClose}
              class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg 
                     transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={props.onConfirm}
              class="px-4 py-2 text-sm font-medium text-white bg-red-600 
                     hover:bg-red-700 rounded-lg transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-offset-2 
                     focus:ring-red-500 dark:focus:ring-offset-gray-800"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
