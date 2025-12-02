import { useState, useEffect } from "react";

export default function DarkMode() {
  // --- 1. INTELLIGENT THEME STATE ---
  // We use a "Lazy Initializer" (a function inside useState).
  // This logic runs only ONCE when the application mounts.
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Safety check: Ensure we are running in a browser environment
    if (typeof window !== "undefined") {
      // A. Check Local Storage first (Did we save a preference before?)
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      // B. If no manual choice, check the User's System/OS Preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false; // Default fallback to light mode
  });

  // --- 2. THEME EFFECT HOOK ---
  // This runs automatically whenever 'isDarkMode' changes (user toggles it).
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark"); // We remember this choice for next time
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light"); // We remember this choice for next time
    }
  }, [isDarkMode]);

  const companies = [
    "Google",
    "Amazon",
    "Microsoft",
    "Netflix",
    "Meta",
    "Apple",
    "Spotify",
    "Tesla",
  ];

  return (
    // Note: Global background colors and transitions are handled in index.css
    <div className="min-h-screen w-full flex flex-col font-sans">
      {/* --- NAVBAR --- */}
      <nav className="w-full p-6 flex justify-end items-center absolute top-0 right-0 z-50">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? (
            // Moon Icon (Visible in Dark Mode)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-blue-400 rotate-0 transition-transform duration-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          ) : (
            // Sun Icon (Visible in Light Mode)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-yellow-500 rotate-90 transition-transform duration-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="grow flex flex-col justify-center items-center gap-12 p-4">
        {/* CENTERED CARD */}
        <div className="relative group">
          {/* Decorative blur effect behind the card */}
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative w-full max-w-md p-8 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800 transform transition-all hover:-translate-y-1 duration-300">
            <h2 className="text-3xl font-bold mb-2 bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Theme Control
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              This card detects your system theme automatically on first load.
              Once you toggle the button, it remembers your choice forever via
              LocalStorage.
            </p>

            <div className="mt-6 flex gap-3">
              <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full">
                React
              </span>
              <span className="px-3 py-1 text-xs font-semibold tracking-wider text-violet-600 uppercase bg-violet-50 dark:bg-violet-900/30 rounded-full">
                Tailwind v4
              </span>
            </div>
          </div>
        </div>

        {/* INFINITE SEAMLESS MARQUEE (The "Google/Microsoft" Style) */}
        <div className="w-full max-w-4xl space-y-2">
          <p className="text-sm text-center text-gray-500 uppercase tracking-widest font-semibold">
            Seamless Infinite Scroll
          </p>

          {/* Mask Image creates the "fade out" effect on the sides */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
            {/* List 1 */}
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              {companies.map((company, index) => (
                <li
                  key={index}
                  className="text-xl font-bold text-gray-400 dark:text-gray-500 whitespace-nowrap"
                >
                  {company}
                </li>
              ))}
            </ul>

            {/* List 2 (Duplicate for seamless loop) */}
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              aria-hidden="true"
            >
              {companies.map((company, index) => (
                <li
                  key={index}
                  className="text-xl font-bold text-gray-400 dark:text-gray-500 whitespace-nowrap"
                >
                  {company}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* NORMAL CSS MARQUEE (Simple Linear) */}
        <div className="w-full max-w-2xl mt-8 overflow-hidden border-t border-b border-gray-200 dark:border-gray-800 py-4">
          <p className="text-xs text-center text-gray-400 mb-2">
            Standard CSS Marquee
          </p>
          <div className="whitespace-nowrap animate-simple-marquee text-gray-600 dark:text-gray-300 font-mono">
            This is a simple linear marquee that moves from right to left and
            then restarts.
          </div>
        </div>
      </main>
    </div>
  );
}
