interface Props {
  button: string;
}

const FormButton = (props: Props) => {
  return (
    <button
      type="submit"
      class="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700
             text-white font-medium py-3 px-4 rounded-lg
             transform transition-all duration-200 ease-in-out
             hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
             active:scale-[0.98]"
    >
      {props.button}
    </button>
  );
};

export default FormButton;
