import "./Card.css";

interface Props {
  year: string;
  link: string;
}

const Card = (props: Props) => {
  return (
    <div
      class="block w-full bg-white dark:bg-[#2d2c5e] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      <div class="p-8">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm font-medium text-gray-600 dark:text-gray-300 bg-[#EEF2FF] dark:bg-[#21204F] px-3 py-1 rounded-full">
            AKTU B.TECH
          </span>
          <div class="w-10 h-10 bg-[#2563eb] dark:bg-[#853232] text-white rounded-full flex items-center justify-center">
            {props.year}
          </div>
        </div>
        
        <h2 class="text-3xl font-bold mb-2 bg-gradient-to-r from-[#1a365d] to-[#2563eb] dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Year {props.year}
        </h2>
        
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Access your study materials and resources for Year {props.year}
        </p>
        
        <div class="flex items-center text-[#2563eb] dark:text-[#853232]">
          <span class="text-sm font-medium">View Notes</span>
          <svg 
            class="w-5 h-5 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;