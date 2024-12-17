import { Component, createSignal, onMount, onCleanup } from "solid-js";
import type { JSX } from "solid-js";
import { useTheme } from "../../utils/ThemeContext";

interface NavLink {
  name: string;
  path: string;
}

interface NavBtn {
  name: string;
  classes: string;
  Icon?: () => JSX.Element;
  action?: () => void;
}

interface nav {
  navLinks: NavLink[];
  navBtns: NavBtn[];
}

const handleLogout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "/login";
};

const navContent: nav = {
  navLinks: [
    { name: "Home", path: "/" },
    { name: "Society", path: "https://kaizentechsociety.xyz" },
    { name: "Profile", path: "/profile" },
  ],
  navBtns: [
    {
      name: "logout",
      classes: "bg-accent",
      Icon: () => <></>,
      action: handleLogout,
    },
  ],
};

const Navbar: Component = () => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const [scrolled, setScrolled] = createSignal(false);
  const [currentPath, setCurrentPath] = createSignal(window.location.pathname);
  const { theme, toggleTheme } = useTheme();
  const getFormattedTime = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const [currentTime, setCurrentTime] = createSignal(getFormattedTime());

  const getUserGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good morning";
    if (hours < 18) return "Good afternoon";
    return "Good evening";
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  const handleRouteChange = () => {
    setIsMenuOpen(false);
    setCurrentPath(window.location.pathname);
  };

  // Update the time every minute
  onMount(() => {
    const interval = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 60000); // Update every 60 seconds (1 minute)

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleRouteChange);

    onCleanup(() => {
      clearInterval(interval); // Clear the interval on cleanup
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleRouteChange);
    });
  });

  return (
    <nav
      class={`fixed w-full z-50 transition-all duration-300 ${
        scrolled()
          ? "bg-primary/95 dark:bg-primary/95 backdrop-blur-lg shadow-lg h-16"
          : "bg-white dark:bg-primary h-16"
      }`}
    >
      <div class="max-w-7xl mx-auto px-4 h-full">
        <div class="flex justify-between items-center h-full">
          <div class="flex-shrink-0 transform transition-transform duration-200">
            <div class="flex flex-col items-start">
              <span class="text-lg font-semibold text-gray-700 dark:text-white">
                {getUserGreeting()}, User!
              </span>
              <span class="text-sm text-gray-500 dark:text-gray-300">
                {currentTime()}
              </span>
            </div>
          </div>

          <div class="hidden lg:flex items-center space-x-8">
            <button
              onClick={toggleTheme}
              class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-secondary transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme() === "dark" ? (
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {navContent.navLinks.map((link) => (
              <a
                href={link.path}
                class={`text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200 relative group text-sm font-medium ${
                  currentPath() === link.path
                    ? "text-gray-900 dark:text-white"
                    : ""
                }`}
              >
                {link.name}
                <span
                  class={`absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                    currentPath() === link.path ? "scale-x-100" : ""
                  }`}
                ></span>
              </a>
            ))}
            {navContent.navBtns.map((btn) => (
              <button
                onClick={() => btn.action?.()}
                class={`${btn.classes} px-4 py-1.5 rounded-lg text-white text-sm font-medium transform hover:scale-105 hover:shadow-lg transition-all duration-200`}
              >
                {btn.name}
                {btn.Icon && typeof btn.Icon === "function" && btn.Icon()}
              </button>
            ))}
          </div>

          <div class="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-secondary transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme() === "dark" ? (
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen())}
              class="p-2 rounded-lg text-gray-600 dark:text-white bg-gray-100 dark:bg-secondary transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div class="w-6 h-6 relative -left-[12px]">
                <span
                  class={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen() ? "rotate-45 top-3" : "top-1"
                  }`}
                ></span>
                <span
                  class={`absolute w-full h-0.5 bg-current top-3 transition-opacity duration-300 ${
                    isMenuOpen() ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  class={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen() ? "-rotate-45 top-3" : "top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        <div
          class={`lg:hidden absolute left-0 right-0 top-16 transform transition-all duration-300 origin-top ${
            isMenuOpen()
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div class="bg-white dark:bg-secondary shadow-xl rounded-b-2xl mx-4 p-4 border border-gray-200 dark:border-gray-700">
            <div class="space-y-3">
              {navContent.navLinks.map((link) => (
                <a
                  href={link.path}
                  onClick={handleRouteChange}
                  class={`block px-4 py-2 text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-[#21204F] rounded-lg transition-colors duration-200 text-sm ${
                    currentPath() === link.path
                      ? "bg-gray-100 dark:bg-[#21204F]"
                      : ""
                  }`}
                >
                  {link.name}
                </a>
              ))}
              {navContent.navBtns.map((btn) => (
                <button
                  onClick={() => {
                    btn.action?.();
                    handleRouteChange();
                  }}
                  class={`w-full text-left ${btn.classes} px-4 py-2 rounded-lg text-white text-sm hover:opacity-90 transition-opacity duration-200`}
                >
                  {btn.name}
                  {btn.Icon && typeof btn.Icon === "function" && btn.Icon()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

