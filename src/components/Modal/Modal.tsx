import { Component, createEffect, createSignal } from "solid-js";
import type { JSX } from "solid-js";

interface ModalProps {
  children?: JSX.Element | JSX.Element[] | string;
  text?: string;
}

const Modal: Component<ModalProps> = ({ children, text = "" }) => {
  const [visibility, setVisibility] = createSignal(false);
  createEffect(() => {
    console.log("Modal Visibility is: ", visibility());
  });
  const toggleVisibility = () => {
    setVisibility(!visibility());
  };

  return (
    <>
      <button class="text-blue-500" onClick={toggleVisibility}>
        {text}
      </button>

      {/* Modal content */}
      {visibility() && (
        <div class="fixed z-10 inset-0 backdrop-blur-[2px] flex justify-center items-center">
          <div class="bg-gray-50  shadow-md min-h-40 flex items-center p-4 rounded-xl text-gray-900 relative">
            <button
              onClick={toggleVisibility}
              class="absolute top-2 text-red-700 right-4 text-lg"
            >
              X
            </button>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
