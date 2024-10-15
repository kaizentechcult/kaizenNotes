import { A } from "@solidjs/router";

interface Props {
  year: string;
  link: string;
}

const Card2 = (props: Props) => {
  return (
    <A href={`/dashboard/${props.link}`} class="block w-full sm:w-64">
      <div class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div class="bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
          <p class="text-xs font-semibold text-blue-100 uppercase tracking-wide">
            AKTU B.TECH
          </p>
          <h2 class="text-2xl font-bold text-white mt-1">Year {props.year}</h2>
        </div>
        <div class="p-4">
          <div class="mt-4 flex items-center text-indigo-600">
            {/* <Book size={18} /> */}
            <span class="ml-2 text-sm font-medium">View Notes</span>
          </div>
        </div>
      </div>
    </A>
  );
};

export default Card2;
