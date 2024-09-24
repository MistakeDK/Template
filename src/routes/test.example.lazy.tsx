import { createLazyFileRoute } from "@tanstack/react-router";
import { Example } from "../components/layout/Example";

export const Route = createLazyFileRoute("/test/example")({
  component: example
});
function example() {
  return (
    <>
      <Example />
    </>
  );
}
