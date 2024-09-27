import { createLazyFileRoute } from "@tanstack/react-router";
import { BT1 } from "../components/BT/BT1";

export const Route = createLazyFileRoute("/testComponent")({
  component: () => (
    <div>
      <BT1 />
    </div>
  )
});
