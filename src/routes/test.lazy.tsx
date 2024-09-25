import { createLazyFileRoute, Outlet } from "@tanstack/react-router";
import { SearchInput } from "../components/layout/SearchInput";
import { TabWrapper } from "../components/layout/TabWrapper";

export const Route = createLazyFileRoute("/test")({
  component: test
});
function test() {
  return (
    <DefaultLayout>
      <div className="flex overflow-auto p-8">
        <div className="w-1/3">
          <TabWrapper />
          <SearchInput />
          {/* <CategoryWrapper /> */}
          <Outlet />
        </div>
        {/* <AddTab icon={<PlusIcon />} /> */}
      </div>
    </DefaultLayout>
  );
}
