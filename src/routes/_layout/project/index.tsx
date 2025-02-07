import { createFileRoute, parsePathname } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/project/")({
  component: Project,
});

function Project() {
  const pathname = parsePathname();
  console.log(pathname);

  return <div className="p-2">Hello from project!</div>;
}
