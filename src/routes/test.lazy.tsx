import { createLazyFileRoute } from "@tanstack/react-router";
import { BT4 } from "../components/BT/BT4";
import { BT5 } from "../components/BT/BT5";
export const Route = createLazyFileRoute("/test")({
  component: test
});
function test() {
  return (
    <div className="flex items-center">
      <BT4 />
      <BT5 />
    </div>
  );
}
