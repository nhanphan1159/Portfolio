import type { FC, ReactNode } from "react";

import { cn } from "@src/utils/common";

type Props = {
  className?: string;
  icon: ReactNode;
  text: string;
};

const Info: FC<Props> = ({ className = "", icon, text }) => {
  return (
    <div
      className={cn(
        "flex justify-start items-center gap-5 pb-2.5 border-b border-[#0000001A] last-of-type:border-b-0 last:pb-0",
        className
      )}
    >
      <div className="bg-[#D9D9D9] rounded flex items-center justify-center size-[35px] dark:bg-black  dark:fill-white">
        {icon}
      </div>
      <span className="text-[15px] leading-[150%] font-medium">{text}</span>
    </div>
  );
};

export default Info;
