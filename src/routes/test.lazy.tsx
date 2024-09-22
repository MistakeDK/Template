import { createLazyFileRoute } from "@tanstack/react-router";
import { CategoryWrapper } from "../components/layout/CategoryWrapper";

export const Route = createLazyFileRoute("/test")({
  component: test
});
function test() {
  return (
    <DefaultLayout>
      <CategoryWrapper />
    </DefaultLayout>
  );
}
