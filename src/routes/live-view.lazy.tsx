import { Button, Input, Tab, Tabs } from "@nextui-org/react";
import React from "react";

// @ts-ignore
const logger = getLogger(LoggerNames.Default);

export const Route = createLazyFileRoute("/live-view")({
  component: LiveView
});

interface ITabItem {
  key: string;
  title: string;
}

interface ITabFunctionalBtn {
  name: string;
  iconCls: string;
}

function LiveView() {
  const iconConfig = "w-5 h-5 text-zinc-100";
  const functionalBtns: ITabFunctionalBtn[] = [
    { name: "Add", iconCls: "solar--add-circle-bold-duotone" }
    // { name: "Add", iconCls: "solar--hashtag-circle-broken" }
  ];

  const tabItems: ITabItem[] = [
    { key: "tab1", title: "Xem trực tiếp" },
    { key: "tab2", title: "Xem lại" },
    { key: "tab3", title: "Xử lý ảnh" },
    { key: "tab4", title: "Tab 4" },
    { key: "tab5", title: "Tab 5" }
    // { key: "tab6", title: "Tab 6" },
    // { key: "tab7", title: "Tab 7" },
    // { key: "tab8", title: "Tab 8" },
    // { key: "tab9", title: "Tab 9" },
    // { key: "tab10", title: "Tab 10" },
    // { key: "tab11", title: "Tab 11" },
    // { key: "tab12", title: "Tab 12" },
    // { key: "tab13", title: "Tab 13" },
    // { key: "tab14", title: "Tab 14" },
    // { key: "tab15", title: "Tab 15" },
    // { key: "tab16", title: "Tab 16" },
    // { key: "tab17", title: "Tab 17" },
    // { key: "tab18", title: "Tab 18" },
    // { key: "tab19", title: "Tab 19" },
    // { key: "tab20", title: "Tab 20" },
    // { key: "tab21", title: "Tab 21" },
    // { key: "tab22", title: "Tab 22" },
    // { key: "tab23", title: "Tab 23" },
    // { key: "tab24", title: "Tab 24" }
  ];

  return (
    <DefaultLayout>
      {/* //#region Tab component */}
      <div className="flex w-full items-center pt-1 pb-1 px-2 space-x-2 overflow-hidden flex-none">
        {/* <div className="flex flex-col w-full bg-gray-900 bg-opacity-40 rounded-md overflow-hidden"> */}
        <div className="flex flex-col rounded-md overflow-hidden">
          <div className="flex flex-col w-full items-center px-0">
            <div className="flex w-full overflow-x-auto flex-nowrap custom-scrollbar">
              <Tabs
                variant="light"
                aria-label="Tabs variants"
                classNames={{
                  cursor: "bg-[rgb(29,56,76)] bg-opacity-95 drop-shadow-sm"
                  // cursor: "bg-gray-700 bg-opacity-60 drop-shadow-sm"
                }}
              >
                {tabItems.map((tabItem, index) => (
                  <Tab key={tabItem.key} title={tabItem.title} />
                ))}
              </Tabs>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-nowrap h-full">
          <div className="flex flex-col h-[50%]" style={{ borderLeft: `1px solid rgba(29,56,76,1)` }}></div>
          <div className="flex flex-none flex-nowrap space-x-1">
            {functionalBtns.map((btn, index) => (
              <React.Fragment key={index}>
                <Button
                  isIconOnly
                  color="default"
                  variant="light"
                  size="sm"
                  aria-label={btn.name}
                  title={btn.name}
                  // className="bg-[rgb(29,56,76)] bg-opacity-35"
                >
                  <IconBuilder name={btn.iconCls} clsConfig={iconConfig} />
                </Button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {/* //#endregion */}

      {/* //#region Main Content Component */}
      <div className="flex flex-col w-full h-full">
        <div className="grid-container px-2">
          <div
            className="grid-item active bg-neutral-500 bg-opacity-30 bg-cover"
            style={{ backgroundImage: `url('./src/assets/temp/cam1.jpg')` }}
          ></div>
          <div
            className="grid-item bg-neutral-500 bg-opacity-30 bg-cover"
            style={{ backgroundImage: `url('./src/assets/temp/cam2.jpg')` }}
          ></div>
          <div
            className="grid-item bg-neutral-500 bg-opacity-30 bg-cover"
            style={{ backgroundImage: `url('./src/assets/temp/cam3.jpg')` }}
          ></div>
          <div
            className="grid-item bg-neutral-500 bg-opacity-30 bg-cover"
            style={{ backgroundImage: `url('./src/assets/temp/cam4.jpg')` }}
          ></div>

          {/* <div className="grid-item active bg-neutral-500">1</div>
          <div className="grid-item bg-sky-400">2</div>
          <div className="grid-item bg-amber-300">3</div>
          <div className="grid-item bg-lime-500">4</div> */}
          {/* <div className="grid-item bg-slate-600">5</div>
          <div className="grid-item bg-pink-500">6</div>
          <div className="grid-item bg-orange-600">7</div>
          <div className="grid-item bg-teal-600">8</div>
          <div className="grid-item bg-green-700">9</div>
          <div className="grid-item bg-neutral-500">10</div>
          <div className="grid-item bg-sky-400">11</div>
          <div className="grid-item bg-amber-900">12</div> */}
        </div>
      </div>
      {/* //#endregion */}

      {/* //#region Bottom Component */}
      <div className="flex flex-col p-2 overflow-hidden rounded-md flex-none">
        <div className="flex rounded-md border-default-color w-full drop-shadow-md px-2 py-1 overflow-hidden">
          <div className="flex flex-nowrap items-center space-x-1">
            <p className="text-sm">Băng thông:</p>
            <p className="text-sm">1234 Mbps</p>
          </div>
          <div className="flex flex-nowrap ml-auto items-center space-x-2">
            <Button
              size="sm"
              color="default"
              variant="flat"
              onClick={(evt) => {
                if (btnNav.onClick) btnNav.onClick(btnNav.path);
              }}
              endContent={<IconBuilder name={`solar--alt-arrow-up-linear`} clsConfig={`w-4 h-4`} />}
              className="bg-[rgb(29,56,76)] bg-opacity-35"
            >
              {/* <IconBuilder name={btnNav.iconCls} clsConfig={iconConfig} /> */}
              <IconBuilder name={`solar--widget-4-bold`} clsConfig={iconConfig} />
            </Button>
            <Input
              type="text"
              size="sm"
              label=""
              placeholder=""
              labelPlacement="inside"
              endContent={<IconBuilder name="solar--videocamera-bold" clsConfig={"w-5 h-5 bg-gray-400 flex-none"} />}
              className="w-[4.25rem]"
              value={8}
              classNames={{
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60"
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-[rgb(29,56,76)]/35",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focus=true]:bg-default-200/50",
                  "dark:group-data-[focus=true]:bg-default/60",
                  "!cursor-text"
                ]
              }}
            />
            {/* <Button
              size="sm"
              color="default"
              variant="flat"
              onClick={(evt) => {
                if (btnNav.onClick) btnNav.onClick(btnNav.path);
              }}
              className="bg-[rgb(29,56,76)] bg-opacity-35"
            >
              <IconBuilder name={btnNav.iconCls} clsConfig={iconConfig} />
            </Button> */}
          </div>
        </div>
      </div>
      {/* //#endregion */}
    </DefaultLayout>
  );
}
