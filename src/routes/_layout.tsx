import Header from "@src/components/Header";
import Nav from "@src/components/Nav";
import Profile from "@src/components/Profile";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: () => (
    <>
      <Header />
      <div className="flex justify-center pt-[100px] w-full h-full items-center bg-[#FEF6DD] dark:bg-[#131312]">
        <Profile className="fixed top-52 left-9 shadow-profile" />
        <div className="pl-[371px] w-full pr-[182px]">
          <div className="border-2 border-[#B7A261] dark:border-[#4B3D10] w-full p-6 rounded-xl bg-white dark:bg-black">
            <Outlet />
          </div>
        </div>
        <Nav className="fixed top-48 right-9 shadow-profile" />
      </div>
    </>
  ),
});
