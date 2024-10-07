import { useState, useEffect } from 'react';
import './App.css'; // Assuming you might need this for other global styles

export const App = () => {


  // State for managing theme
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || false
  );

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // Apply theme class to the root container
  useEffect(() => {
    document.documentElement.className = isDarkMode ? 'dark' : '';
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-5xl font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <button
            onClick={toggleTheme}
            className="mt-6 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 rounded-md shadow-sm hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </main>
    </div>
  );
};
