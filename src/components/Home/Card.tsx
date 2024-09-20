import { A } from "@solidjs/router";
import arrow from "../../assets/arrow.svg"

interface Props {
  year: string;
  link: string;
}

const Card = (props: Props) => {
  return (
    <A href={`dashboard/${props.link}`} class="bg-[#939BE2] w-[300px] h-[400px] rounded-lg p-6">
      <p class="text-sm">AKTU B.TECH</p>
      <h1 class="text-3xl font-bold">Year {props.year}</h1>
      <div class="w-[100px] h-[100px] bg-white blur-2xl ml-[120px] mt-[130px]"></div>
    </A>
  );
};

export default Card;
