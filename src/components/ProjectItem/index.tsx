import type { FC } from "react";

import { cn } from "@src/utils/common";

type Props = {
  className?: string;
  title: string;
  imgUrl: string;
};

const ProjectItem: FC<Props> = ({ className = "", imgUrl, title }) => {
  return (
    <div
      className={cn(
        "flex w-full max-w-[351px] flex-col gap-3 p-5 border-2 border-main dark:border-[#4B3D10] bg-[#F9F6EA] dark:bg-[#403D32] rounded-[0.625rem]",
        className
      )}
    >
      <img src={imgUrl} className="w-[309px] h-[177px]" alt="" />
      <p className="text-lg font-bold dark:text-white">{title}</p>
    </div>
  );
};

export default ProjectItem;
