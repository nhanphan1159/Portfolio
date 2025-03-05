import type { FC } from "react";

import Loading from "@src/assets/loading.png";

const LoadingPage: FC = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <img className="size-20 animate-spin" src={Loading} alt="" />
    </div>
  );
};

export default LoadingPage;
