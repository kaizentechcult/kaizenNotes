import { Component, createSignal, onMount } from "solid-js";
import Card from "../../components/Home/Card";
import { AuthProvider } from "../../utils/AuthContext";
import Navbar from "../../components/Navbar/Navbar";

const yearLinks = {
  1: "year1",
  2: "year2",
  // 3: "year3",
  // 4: "year4",
};

const Home: Component = () => {
  const [isPageVisible, setIsPageVisible] = createSignal(false);
  const [isExiting, setIsExiting] = createSignal(false);

  onMount(() => {
    requestAnimationFrame(() => {
      setIsPageVisible(true);
    });
  });

  const handleCardClick = (link: string) => {
    setIsExiting(true);
    setTimeout(() => {
      window.location.href = `/dashboard/${link}`;
    }, 300);
  };

  return (
    <AuthProvider>
      <div 
        class={`page-wrapper bg-[#EEF2FF] dark:bg-[#07071b] text-gray-900 dark:text-white h-screen overflow-hidden ${
          isExiting() ? 'page-exit-active' : 
          isPageVisible() ? 'page-enter-active' : 'page-enter'
        }`}
      >
        <Navbar />
        <div class="container mx-auto px-4 pt-20 pb-4">
          <div class="text-center mb-16">
            <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-[#1a365d] to-[#2563eb] dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
              Welcome to Kaizen Notes
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Access your study materials organized by year. Select your year to get started.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {Object.entries(yearLinks).map(([year, link]) => (
              <div class="transform hover:scale-105 transition-transform duration-300">
                <div onClick={() => handleCardClick(link)}>
                  <Card year={year} link={link} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthProvider>
  );
};

export default Home;