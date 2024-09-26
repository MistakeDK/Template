import { createLazyFileRoute } from "@tanstack/react-router";
import { MyNavbar } from "../components/layout/Navbar";
export const Route = createLazyFileRoute("/test")({
  component: test
});
function test() {
  return (
    <DefaultLayout>
      <div className="flex justify-end h-screen">
        <div className="">
          <MyNavbar />
        </div>
      </div>
    </DefaultLayout>
  );
}
