import { A } from "@solidjs/router";

interface Props {
  text: string;
  link: string;
  dontText: string;
}

const DontHave = (props: Props) => {
  return (
    <div class="flex justify-center mt-3 mb-6">
      {props.dontText}
      <A class="text-blue-500 ml-1" href={props.link}>{props.text}</A>
    </div>
  );
};

export default DontHave;
