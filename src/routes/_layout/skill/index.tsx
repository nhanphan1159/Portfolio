import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/skill/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_layout/skill/"!</div>;
}
