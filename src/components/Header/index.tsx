import type { FC } from "react";

import IconMode from "@src/components/IconMode";
import { cn } from "@src/utils/common";
import { Link } from "@tanstack/react-router";

type Props = {
  className?: string;
};

const Header: FC<Props> = ({ className = "" }) => {
  return (
    <div className="w-full m-auto fixed top-0 left-0 p-4 flex justify-center items-center z-10 backdrop-blur-2xl">
      <div
        className={cn(
          "flex w-full max-w-[1024px] justify-between items-center",
          className
        )}
      >
        <Link to="/">
          <h1 className="!font-sigmar-one text-[#9D8640] text-[38px]">
            PORTFOLIO
          </h1>
        </Link>
        <IconMode />
      </div>
    </div>
  );
};

export default Header;
