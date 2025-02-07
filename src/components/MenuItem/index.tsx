import type { FC, ReactNode } from "react";

import { cn } from "@src/utils/common";
import { Link, useRouterState } from "@tanstack/react-router";

type Props = {
  className?: string;
  icon: ReactNode;
  lable: string;
  url: string;
};

const MenuItem: FC<Props> = ({ className = "", url, icon, lable }) => {
  const router = useRouterState();
  return (
    <Link
      to={url}
      className={cn(
        "w-[66px] h-[71px] flex flex-col gap-1 justify-center items-center fill-white dark:text-white bg-[#FEF6DD] rounded-xl dark:bg-[#3B3729]",
        {
          "bg-[#B7A261] text-white dark:bg-[#B7A261] dark:text-black":
            router.location.pathname === url,
        },
        className
      )}
    >
      {icon}
      <p className="text-xs font-medium leading-[150%]">{lable}</p>
    </Link>
  );
};

export default MenuItem;
