interface Props {
  button: string;
}

const FormButton = (props: Props) => {
  return (
    <button
      type="submit"
      className="w-full bg-DarkBlue hover:bg-blue-600 text-white py-3 rounded-3xl"
    >
      {props.button}
    </button>
  );
};

export default FormButton;
