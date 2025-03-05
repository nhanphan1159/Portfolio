import type { FC } from "react";

import { cn } from "@src/utils/common";

type Props = {
  className?: string;
  imgUrl: string;
  content: string;
  title: string;
};

const WorkItem: FC<Props> = ({ className = "", imgUrl, content, title }) => {
  return (
    <div
      className={cn(
        "w-full flex justify-center items-center gap-[15px] border-2 border-main dark:boder-[#625839] rounded-[0.625rem] bg-[#FDF4F4] dark:bg-[#60594B]",
        className
      )}
    >
      <img
        src={imgUrl}
        alt={content}
        className="w-full max-w-[116px] rounded-lg"
      />
      <div className="flex flex-col gap-3">
        <h4 className="font-bold">{title}</h4>
        <div
          className="text-[15px] leading-[150%] font-medium"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default WorkItem;
