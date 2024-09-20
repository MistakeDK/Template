import { createLazyFileRoute } from "@tanstack/react-router";
import { CategoryWrapper } from "../components/layout/CategoryWrapper";

export const Route = createLazyFileRoute("/test")({
  component: () => (
    <DefaultLayout>
      <CategoryWrapper></CategoryWrapper>
    </DefaultLayout>
  )
});
