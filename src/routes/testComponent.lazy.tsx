import { createLazyFileRoute } from "@tanstack/react-router";
import { BT3 } from "../components/BT/BT3";

export const Route = createLazyFileRoute("/testComponent")({
  component: () => (
    <div>
      <BT3 />
    </div>
  )
});
