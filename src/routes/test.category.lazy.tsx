import { createLazyFileRoute } from "@tanstack/react-router";
import { CategoryWrapper } from "../components/layout/CategoryWrapper";

export const Route = createLazyFileRoute("/test/category")({
  component: category
});
function category() {
  return <CategoryWrapper />;
}
