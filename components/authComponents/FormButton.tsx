import {FC} from "react";

interface Props {
  button: string;
}

const FormButton:FC<Props> = ({button}) => {
  return (
    <button
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-3xl"
    >
      {button}
    </button>
  );
};

export default FormButton;

