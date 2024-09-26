import { createLazyFileRoute } from "@tanstack/react-router";
import { MyTable } from "../components/layout/MyTable";

export const Route = createLazyFileRoute("/testTable")({
  component: () => (
    <div>
      <MyTable />
    </div>
  )
});
