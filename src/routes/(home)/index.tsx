import { useEffect, useState } from "react";

import IconMode from "@src/components/IconMode";
import Profile from "@src/components/Profile";
import { setTheme } from "@src/utils/common";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(home)/")({
  component: Index,
});

function Index() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (storedTheme) {
      setMode(storedTheme);
      setTheme(storedTheme);
    }
  }, []);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    setTheme(newMode);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <IconMode mode={mode} onClick={toggleMode} />
      <Profile />
    </div>
  );
}
