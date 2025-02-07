import { createFileRoute, parsePathname } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/about/")({
  component: About,
});

function About() {
  const pathname = parsePathname();
  console.log(pathname);

  return <div className="">Hello from About!</div>;
}
