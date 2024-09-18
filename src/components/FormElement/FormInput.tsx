interface Props {
  signal: () => string;
  setSignal: (name: string) => void;
  id: string;
  placeholder: string;
  type: string;
}

const FormInput = (props: Props) => {
  return (
    <div class="mb-4">
      <label for={props.id} class="block text-lg font-medium mb-2"></label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        class="w-full p-3 border border-gray-300 rounded-3xl placeholder-gray-700 italic"
        value={props.signal()}
        onChange={(e) => props.setSignal(e.currentTarget.value)}
      />
    </div>
  );
};

export default FormInput;
