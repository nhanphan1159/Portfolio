import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: () => (
    <>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </>
  ),
});
