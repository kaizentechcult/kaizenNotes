import Link from "next/link";

interface Props {
  text: string;
  link: string;
  dontText: string;
}

const DontHave = (props: Props) => {
  return (
    <div className="flex justify-center mt-3 mb-6">
      {props.dontText}
      <Link href={props.link}>
      
        <p className="text-blue-500 ml-1">{props.text}</p>
      </Link>
    </div>
  );
};

export default DontHave;

