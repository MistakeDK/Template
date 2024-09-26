import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/testTable")({
  component: () => <div>Hello /testTable!</div>
});
