import type { FC } from "react";

import { menu } from "@src/assets/data";
import MenuItem from "@src/components/MenuItem";
import { cn } from "@src/utils/common";

type Props = {
  className?: string;
};

const Nav: FC<Props> = ({ className = "" }) => {
  return (
    <nav
      className={cn(
        "flex flex-col gap-5 p-5 w-fit h-fit border-2 border-[#B7A261] rounded-3xl bg-white dark:bg-black",
        className
      )}
    >
      {menu.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          lable={item.label}
          url={item.url}
        />
      ))}
    </nav>
  );
};

export default Nav;
