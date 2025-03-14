import type { FC } from "react";

import { cn } from "@src/utils/common";

type Props = {
  className?: string;
  lable: string;
  onClick?: () => void;
};

const Button: FC<Props> = ({ className = "", lable, onClick }) => {
  return (
    <button
      className={cn(
        "flex justify-center items-center py-3 px-[31px] border-2 border-[#B7A261] dark:border-[#4B3D10] bg-[#E0CE93] rounded-xl cursor-pointer dark:bg-[#wC2B293]",
        className
      )}
      onClick={onClick}
    >
      <span className="text-[#403D22] text-[18px] leading-[150%] font-bold">
        {lable}
      </span>
    </button>
  );
};

export default Button;
