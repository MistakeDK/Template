import { createLazyFileRoute, Outlet } from "@tanstack/react-router";
import { AddTab } from "../components/layout/AddTab";
import { SearchInput } from "../components/layout/SearchInput";
import { TabWrapper } from "../components/layout/TabWrapper";

export const Route = createLazyFileRoute("/test")({
  component: test
});
function test() {
  return (
    <DefaultLayout>
      <div className="flex overflow-auto resize p-2">
        <div className="w-1/3">
          <TabWrapper />
          <SearchInput />
          <Outlet />
        </div>
        <AddTab />
      </div>
    </DefaultLayout>
  );
}
