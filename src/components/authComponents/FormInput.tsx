import { createSignal } from "solid-js";

interface Props {
  signal: () => string;
  setSignal: (name: string) => void;
  id: string;
  placeholder: string;
  type: string;
}

const FormInput = (props: Props) => {
  const [showPassword, setShowPassword] = createSignal(false);

  return (
    <div class="mb-4 relative">
      <label for={props.id} class="block text-lg font-medium mb-2"></label>
      <input
        type={props.type === "password" && showPassword() ? "text" : props.type}
        id={props.id}
        placeholder={props.placeholder}
        class="w-full p-3 border border-gray-300 rounded-3xl placeholder-gray-700 italic focus:outline-none"
        value={props.signal()}
        onChange={(e) => props.setSignal(e.currentTarget.value)}
      />
      {props.type === "password" && (
        <button
          type="button"
          class="absolute top-1/2 right-3 transform -translate-y-1/2  text-gray-800 font-semibold py-2 px-4 "
          onClick={() => setShowPassword(!showPassword())}
        >
          {showPassword() ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
};

export default FormInput;
