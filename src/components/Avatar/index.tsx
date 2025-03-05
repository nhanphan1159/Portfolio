import type { FC } from "react";

import { cn } from "@src/utils/common";

type Props = {
  className?: string;
  img: string;
};

const Avatar: FC<Props> = ({ className = "", img }) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center border-2 border-main dark:border-dark rounded-xl",
        className
      )}
    >
      <img src={img} alt="123" />
    </div>
  );
};

export default Avatar;
