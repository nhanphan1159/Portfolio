import type { FC } from "react";

import { cn } from "@src/utils/common";

type Props = {
  className?: string;
  company: string;
  time: string;
  role: string;
  imgUrl: string;
};

const ExperianceItem: FC<Props> = ({
  className = "",
  company,
  role,
  time,
  imgUrl,
}) => {
  return (
    <div
      className={cn(
        "flex w-full justify-start items-center gap-5 border-2 rounded-xl border-main dark:border-dark p-5",
        className
      )}
    >
      <img
        src={imgUrl}
        alt={company}
        className="w-full max-w-[116px] rounded-xl border-2 border-main dark:border-[#625839]"
      />
      <div className="flex flex-col gap-1">
        <p className="font-bold">Company: {company}</p>
        <p className="font-bold">Role: {role}</p>
        <p className="font-bold">Time: {time}</p>
      </div>
    </div>
  );
};

export default ExperianceItem;
