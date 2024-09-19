interface Props {
  signal:  string;
  setSignal: (name: string) => void;
  id: string;
  placeholder: string;
  type: string;
}

const FormInput = (props: Props) => {
  return (
    <div className="mb-4">
      <label htmlFor={props.id} className="block text-lg font-medium mb-2"></label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        className="w-full p-3 border border-gray-300 rounded-3xl placeholder-gray-700 italic focus:outline-none"
        value={props.signal}
        onChange={(e) => props.setSignal(e.target.value)}
      />
    </div>
  );
};

export default FormInput;
