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
      <Link href={props.link}>{props.text}</Link>
    </div>
  );
};

export default DontHave;
