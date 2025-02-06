import type { FC } from "react";

import IconDark from "@src/assets/iconDark.svg?react";
import IconLight from "@src/assets/iconlight.svg?react";
import { cn } from "@src/utils/common";

type Props = {
  className?: string;
  onClick?: () => void;
  mode: "light" | "dark";
};

const IconMode: FC<Props> = ({ className = "", onClick, mode }) => {
  return (
    <button
      className={cn(
        "size-[59px] bg-[#B7A261] flex items-center justify-center rounded-full",
        className
      )}
      onClick={onClick}
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
