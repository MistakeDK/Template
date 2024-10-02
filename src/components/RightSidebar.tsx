import { CarryOutOutlined, FormOutlined } from "@ant-design/icons";
import { Input, Tab, Tabs } from "@nextui-org/react";
import type { TreeDataNode } from "antd";
import { Tree } from "antd";
import React from "react";

interface ITabItem {
  key: string;
  title: string;
}

const RightSideTab = () => {
  const tabItems: ITabItem[] = [
    { key: "tab1", title: "Tab 1" },
    { key: "tab2", title: "Tab 2" },
    { key: "tab3", title: "Tab 3" },
    { key: "tab4", title: "Tab 4" }
    // { key: "tab5", title: "Tab 5" },
    // { key: "tab6", title: "Tab 6" },
    // { key: "tab7", title: "Tab 7" }
  ];

  return (
    <React.Fragment>
      <div className="flex flex-col w-full items-center px-2 flex-none">
        <div className="flex w-full overflow-x-auto flex-nowrap custom-scrollbar">
          <Tabs
            variant="underlined"
            aria-label="Tabs variants"
            classNames={{ cursor: "bg-gray-200 bg-opacity-60 drop-shadow-sm" }}
          >
            {tabItems.map((tabItem) => (
              <Tab key={tabItem.key} title={tabItem.title} />
            ))}
          </Tabs>
        </div>
      </div>
    </React.Fragment>
  );
};

const SearchFilter = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col w-full px-1 py-1 flex-none">
        <Input
          type="text"
          variant="bordered"
          // label="Email"
          placeholder="you@example.com"
          labelPlacement="inside"
          startContent={<IconBuilder name="solar--magnifer-broken" clsConfig={"w-5 h-5 bg-gray-400"} />}
        />
      </div>
    </React.Fragment>
  );
};

const CameraTreeSelector = () => {
  const treeData: TreeDataNode[] = [
    {
      title: "parent 1",
      key: "0-0",
      icon: <CarryOutOutlined />,
      children: [
        {
          title: "parent 1-0",
          key: "0-0-0",
          icon: <CarryOutOutlined />,
          children: [
            { title: "leaf", key: "0-0-0-0", icon: <CarryOutOutlined /> },
            {
              title: (
                <>
                  <div>multiple line title</div>
                  <div>multiple line title</div>
                </>
              ),
              key: "0-0-0-1",
              icon: <CarryOutOutlined />
            },
            { title: "leaf", key: "0-0-0-2", icon: <CarryOutOutlined /> }
          ]
        },
        {
          title: "parent 1-1",
          key: "0-0-1",
          icon: <CarryOutOutlined />,
          children: [{ title: "leaf", key: "0-0-1-0", icon: <CarryOutOutlined /> }]
        },
        {
          title: "parent 1-2",
          key: "0-0-2",
          icon: <CarryOutOutlined />,
          children: [
            { title: "leaf", key: "0-0-2-0", icon: <CarryOutOutlined /> },
            {
              title: "leaf",
              key: "0-0-2-1",
              icon: <CarryOutOutlined />,
              switcherIcon: <FormOutlined />
            }
          ]
        }
      ]
    },
    {
      title: "parent 2",
      key: "0-1",
      icon: <CarryOutOutlined />,
      children: [
        {
          title: "parent 2-0",
          key: "0-1-0",
          icon: <CarryOutOutlined />,
          children: [
            { title: "leaf", key: "0-1-0-0", icon: <CarryOutOutlined /> },
            { title: "leaf", key: "0-1-0-1", icon: <CarryOutOutlined /> }
          ]
        }
      ]
    }
  ];
  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log("selected", selectedKeys, info);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col h-full rounded-md border-default-color overflow-hidden">
        <div className="flex w-full bg-[rgb(29,56,76)] drop-shadow-md">
          <div className="flex space-x-2 items-center px-2 py-2">
            <IconBuilder name="solar--videocamera-bold" clsConfig={"w-5 h-5 bg-gray-400"} />
            <p className="text-sm w-full font-medium text-zinc-200">Danh sách camera</p>
          </div>
          <div className="flex space-x-2 items-center justify-center px-2 py-2 ml-auto">
            <div className="flex p-1 bg-transparent rounded-md hover:bg-[#0A1927]">
              <IconBuilder name="solar--alt-arrow-down-linear" clsConfig={"w-4 h-4 bg-zinc-200"} />
            </div>
          </div>
        </div>
        <Tree
          showLine={false}
          showIcon={true}
          defaultExpandedKeys={["0-0-0"]}
          onSelect={onSelect}
          treeData={treeData}
          className="h-full bg-transparent text-zinc-100"
        />
      </div>
    </React.Fragment>
  );
};

export const RightSidebar = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col h-full w-1/5 px-1 pl-0 py-1 ml-auto overflow-hidden flex-none">
        <div className="flex flex-col h-full w-full bg-[#010e17] bg-opacity-30 rounded-lg overflow-hidden">
        {/* <div className="flex flex-col h-full w-full right-sidebar-bg rounded-lg overflow-hidden drop-shadow-md"> */}
          {/*  */}
          {/* <RightSideTab /> */}
          {/*  */}
          {/* <SearchFilter /> */}
          {/*  */}
          <div className="flex flex-col h-full w-full overflow-hidden pt-0">
            <div className="flex-grow overflow-y-auto custom-scrollbar px-2 py-0 ">
              <div className="flex flex-col w-full h-1/2 py-2 overflow-hidden">
                <CameraTreeSelector />
              </div>
              <div className="flex flex-col w-full h-1/2 py-2 pt-0">
                <CameraTreeSelector />
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </React.Fragment>
  );
};
