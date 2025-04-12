
import React, { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 px-4 rounded bg-gray-800 text-white dark:bg-yellow-300 dark:text-black"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
