import { createFileRoute, parsePathname } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/experience/")({
  component: Exp,
});

function Exp() {
  const pathname = parsePathname();
  console.log(pathname);

  return <div className="">Hello from About!</div>;
}
