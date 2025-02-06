import type { FC, ReactNode } from "react";

import { cn } from "@src/utils/common";

type Props = {
  className?: string;
  icon: ReactNode;
  url: string;
};

const Social: FC<Props> = ({ className = "", icon, url }) => {
  return (
    <a
      className={cn(
        "flex justify-center items-center gap-5 size-[35px] p-[1px] rounded",
        className
      )}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <span className="w-full h-full rounded bg-white flex items-center justify-center dark:bg-black">
        {icon}
      </span>
    </a>
  );
};

export default Social;
