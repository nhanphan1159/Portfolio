import type { FC } from "react";

import { cn } from "@src/utils/common";

type Props = {
  className?: string;
  text: string;
};

const Job: FC<Props> = ({ className = "", text }) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center gap-5 border border-[#B7A261] rounded-xl bg-[#FEF6DD] w-[193px] h-[38px] dark:bg-black",
        className
      )}
    >
      <span className="font-medium leading-[150%]">{text}</span>
    </div>
  );
};

export default Job;
