import { A } from "@solidjs/router";
import "./Card.css";

interface Props {
  year: string;
  link: string;
}

const Card = (props: Props) => {
  return (
    <A
      href={`dashboard/${props.link}`}
      class="bg-[#8b96ff] w-11/12 md:w-1/3 h-1/3 rounded-lg p-6 card"
    >
      <p class="text-sm">AKTU B.TECH</p>
      <h1 class="text-3xl font-bold">Year {props.year}</h1>
    </A>  
  );
};

export default Card;
