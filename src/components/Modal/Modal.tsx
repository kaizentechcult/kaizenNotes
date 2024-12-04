import { Component } from "solid-js";
import type { JSX } from "solid-js";
import { toggleVisibility, visibility } from "../../hooks/common";

interface ModalProps {
  children?: JSX.Element | JSX.Element[] | string;
  text?: string;
}

const Modal: Component<ModalProps> = ({ children, text = "" }) => {
  return (
    <>
      <button 
        class="text-[#853232] hover:text-[#9a3a3a] font-medium transition-colors duration-200 focus:outline-none" 
        onClick={toggleVisibility}
      >
        {text}
      </button>

      {visibility() && (
        <div class="fixed z-50 inset-0 backdrop-blur-sm bg-black/50 flex justify-center items-center p-4">
          <div class="bg-[#2d2c5e] text-white shadow-2xl rounded-2xl w-full max-w-md transform transition-all duration-300 scale-100 opacity-100">
            <div class="flex justify-between items-center p-6 border-b border-gray-700">
              <h3 class="text-xl font-semibold">Request Notes</h3>
              <button
                onClick={toggleVisibility}
                class="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none"
                aria-label="Close modal"
              >
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="p-6">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;