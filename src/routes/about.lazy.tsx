import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About
});

function About() {
  const myStore = useMyStore();

  return (
    <AboutLayout dynamicProp="Blahhh....">
      <div className="p-2">Hello from About!</div>
      <p>street value: {myStore.info.home.address.main.street}</p>
      <p>ward value: {myStore.info.home.address.main.ward}</p>
    </AboutLayout>
  );
}
