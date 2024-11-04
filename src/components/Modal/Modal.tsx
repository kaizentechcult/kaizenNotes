import { Component, createEffect, createSignal } from "solid-js";
import type { JSX } from "solid-js";

interface ModalProps {
  children?: JSX.Element | JSX.Element[] | string;
  text?: string;
}

const Modal: Component<ModalProps> = ({ children, text = "Open Modal" }) => {
  const [visibility, setVisibility] = createSignal(false);
  createEffect(() => {
    console.log("Modal Visibility is: ", visibility());
  });
  const toggleVisibility = () => {
    setVisibility(!visibility());
  };

  return (
    <>
      <button
        class="bg-red-400 p-2 rounded-xl text-white text-xl"
        onClick={toggleVisibility}
      >
        {text}
      </button>

      {/* Modal content */}
      {visibility() && (
        <div class="fixed z-20 inset-0 backdrop-blur-sm flex justify-center items-center">
          <div class="bg-gray-300 min-h-40 flex items-center p-4 rounded-xl text-gray-900 text-3xl relative">
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
