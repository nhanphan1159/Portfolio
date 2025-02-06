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
        "flex justify-center items-center py-3 px-[31px] border-2 border-[#403D22] bg-[#B7A261] rounded-xl cursor-pointer dark:bg-[#C2B293]",
        className
      )}
      onClick={onClick}
    >
      <span className="text-[#403D22] text-[21px] leading-[150%] font-bold">
        {lable}
      </span>
    </button>
  );
};

export default Button;
