import { createLazyFileRoute } from "@tanstack/react-router";
import img1 from "../assets/img/2850.jpg";
import img2 from "../assets/img/2852.jpg";
import img3 from "../assets/img/9453.jpg";
import { BT4 } from "../components/BT/BT4";
import { BT5 } from "../components/BT/BT5";

export const Route = createLazyFileRoute("/test")({
  component: test
});
function test() {
  return (
    <div className="flex items-center bg-hero-image bg-center bg-no-repeat bg-cover h-screen w-screen ">
      <BT4 />

      <BT5 url={[img1, img2, img3]} />
    </div>
    // <div className="bg-red-300 h-screen flex justify-center items-center p-20">
    //   <BTTable />
    // </div>
  );
}
