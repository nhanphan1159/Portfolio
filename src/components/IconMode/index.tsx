import { type FC, useEffect, useState } from "react";

import IconDark from "@src/assets/iconDark.svg?react";
import IconLight from "@src/assets/iconlight.svg?react";
import { cn, setTheme } from "@src/utils/common";

type Props = {
  className?: string;
};

const IconMode: FC<Props> = ({ className = "" }) => {
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
    <button
      className={cn(
        "size-[59px] bg-[#B7A261] flex items-center justify-center rounded-full",
        className
      )}
      onClick={toggleMode}
    >
      {mode === "dark" ? (
        <IconDark className="animate-[zoom-in_.3s]" />
      ) : (
        <IconLight className="animate-[zoom-in_.3s]" />
      )}
    </button>
  );
};

export default IconMode;
