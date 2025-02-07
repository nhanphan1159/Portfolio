import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/(home)/")({
  component: Index,
});

function Index() {
  return <div className="min-h-[1000px]">Home</div>;
}
