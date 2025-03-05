import type { FC } from "react";

import { cn } from "@src/utils/common";

type Props = {
  className?: string;
  major: string;
  time: string;
  result: string;
};

const EducationItem: FC<Props> = ({ className = "", time, major, result }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-1 text-lg p-4 border-2 border-main dark:border-[#4B3D10] rounded-[0.625rem]",
        className
      )}
    >
      <span>{time}</span>
      <p className="font-bold">{major}</p>
      <span>{result}</span>
    </div>
  );
};

export default EducationItem;
