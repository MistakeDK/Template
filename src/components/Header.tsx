import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import React from "react";

interface IButtonGroup {
  name: string;
  iconCls: string;
  type: "icon" | "normal" | "icon-dropdown" | "dropdown";
  dropdownOptions?: {
    iconName?: string;
    name: string;
    onClick?: () => void;
  }[];
  onClick?: () => void;
}

// HeaderSM ~ HeaderStateManager
// interface IHeaderSM {
//   // States
//   btnGroup: IButtonGroup[];
//   // Actions
//   setBtnGroup: (btnGroup: IButtonGroup[]) => void;
// }

// const useHeaderSM = create<IHeaderSM>((set) => ({
//   btnGroup: [],
//   setBtnGroup: (value) =>
//     set((state) => {
//       state.btnGroup = [...value];
//       return state;
//     }, true) // add second boolean value in set to replace the state
// }));

const ButtonGroupMapper = ({ btnGroupConfig }: { btnGroupConfig: IButtonGroup[] }) => {
  const iconConfig = "w-6 h-6 text-zinc-200";

  return (
    <>
      {btnGroupConfig.map((button) => {
        if (button.type === "icon") {
          return (
            <React.Fragment key={generateUuid()}>
              <Button
                isIconOnly
                color="default"
                variant="light"
                aria-label={button.name}
                title={button.name}
                // className="bg-[rgb(29,56,76)] bg-opacity-35"
              >
                <IconBuilder name={button.iconCls} clsConfig={iconConfig} />
              </Button>
            </React.Fragment>
          );
        } else if (button.type === "icon-dropdown") {
          if (!button.dropdownOptions) return null;
          return (
            <React.Fragment key={generateUuid()}>
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly color="default" variant="light" aria-label={button.name} title={button.name}>
                    <IconBuilder name={button.iconCls} clsConfig={iconConfig} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  {button.dropdownOptions.map((dropdownItem, dropItemIndex) => (
                    <DropdownItem key={dropItemIndex} startContent={<i className={`i-${dropdownItem.iconName}`} />}>
                      {dropdownItem.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </React.Fragment>
          );
        } else if (button.type === "normal") {
          return (
            <React.Fragment key={generateUuid()}>
              <Button
                color="default"
                variant="light"
                aria-label={button.name}
                title={button.name}
                startContent={<IconBuilder name={button.iconCls} clsConfig={iconConfig} />}
              >
                {button.name}
              </Button>
            </React.Fragment>
          );
        } else {
          if (!button.dropdownOptions) return null;
          return (
            <React.Fragment key={generateUuid()}>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    color="default"
                    variant="light"
                    aria-label={button.name}
                    title={button.name}
                    startContent={<IconBuilder name={button.iconCls} clsConfig={iconConfig} />}
                  >
                    {button.name}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  {button.dropdownOptions.map((dropdownItem, dropItemIndex) => (
                    <DropdownItem key={dropItemIndex} startContent={<i className={`i-${dropdownItem.iconName}`} />}>
                      {dropdownItem.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const day = time.getDate().toString().padStart(2, "0"); // Day (DD)
  const month = (time.getMonth() + 1).toString().padStart(2, "0"); // Month (MM) - Months are 0-indexed
  const year = time.getFullYear(); // Year (YYYY)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const dateFormatter = {
    ddmmyyyy: (d: string, m: string, y: number, separator: string = "/"): string => {
      return `${d}${separator}${m}${separator}${y}`;
    },
    mmddyyyy: (d: string, m: string, y: number, separator: string = "/"): string => {
      return `${m}${separator}${d}${separator}${y}`;
    },
    longDateVN: (t: Date): string => {
      return t.toLocaleDateString("vi-VN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  };
  const timeFormatter = (t: Date, is12hour: boolean = false): string => {
    return t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: is12hour });
  };

  return (
    <React.Fragment>
      <div className="flex items-center text-sm font-semibold text-zinc-200 bg-gray-900 bg-opacity-0 px-3 py-1 rounded-xl space-x-1">
        <span className="">{dateFormatter.ddmmyyyy(day, month, year)}</span>
        <span className="">{timeFormatter(time)}</span>
      </div>
      {/* <div className="text-4xl font-bold text-blue-500">
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false })}
      </div> */}
    </React.Fragment>
  );
};

export const Header = () => {
  // @ts-ignore
  const navigate = useNavigate();

  // Set state using Zustand
  // const headerSM = useHeaderSM();
  // headerSM.setBtnGroup([
  //   { name: "Monitoring", iconCls: "solar--pulse-bold", type: "icon" },
  //   { name: "Cloud", iconCls: "solar--cloud-storage-bold", type: "icon" },
  //   { name: "Settings", iconCls: "solar--settings-bold", type: "icon" },
  //   {
  //     name: "User",
  //     iconCls: "solar--user-circle-bold",
  //     type: "icon-dropdown",
  //     dropdownOptions: [
  //       {
  //         name: "Vinh Q. Nguyen"
  //       },
  //       {
  //         name: "Change permissions"
  //       }
  //     ]
  //   }
  // ]);

  // Set state using useState() - should using state because there are some
  const [headerConfig, setHeaderConfig] = useState<IButtonGroup[]>([
    { name: "Monitoring", iconCls: "solar--course-down-line-duotone", type: "icon" },
    { name: "Cloud", iconCls: "solar--minimize-bold", type: "icon" },
    { name: "Settings", iconCls: "solar--close-square-linear", type: "icon" }
    // { name: "Monitoring", iconCls: "solar--pulse-bold", type: "icon" },
    // { name: "Cloud", iconCls: "solar--cloud-storage-bold", type: "icon" },
    // { name: "Settings", iconCls: "solar--settings-bold", type: "icon" },
    // {
    //   name: "User",
    //   iconCls: "solar--user-circle-bold",
    //   type: "icon-dropdown",
    //   dropdownOptions: [
    //     {
    //       name: "Vinh Q. Nguyen"
    //     },
    //     {
    //       name: "Change permissions"
    //     }
    //   ]
    // },
    // { name: "Change background", iconCls: "solar--gallery-bold", type: "icon" }
  ]);

  return (
    <React.Fragment>
      <div className="flex flex-col bg-transparent w-full pb-0 items-center">
        <div className="flex w-full flex-nowrap px-3 py-1 relative bg-">
          <div className="flex absolute top-0 left-0 w-full h-full justify-center items-center z-0">
            <Clock />
          </div>
          {/* <img src="/vite.svg" className="w-10 h-10 flex-none z-[1]" /> */}
          <div className="flex items-center justify-center">
            {/* <div className="flex flex-col justify-center items-center -ml-1">
              <Button
                isIconOnly
                color="default"
                variant="flat"
                onClick={(evt) => {
                  if (btnNav.onClick) btnNav.onClick(btnNav.path);
                }}
                className="bg-[rgb(29,56,76)] bg-opacity-35"
              >
                <IconBuilder name={`solar--hamburger-menu-linear`} clsConfig={`w-6 h-6 text-zinc-100`} />
              </Button>
            </div> */}
            <img src="/psafe_ots.png" className="w-8 h-8 flex-none z-[1] " />
          </div>

          {/* <div className="flex flex-col w-12 h-12 bg-yellow-20 items-center justify-center flex-none z-[1]">
            <p className="text-xs text-gray-600 font-semibold text-center">Logo</p>
          </div> */}
          {/* <div className="flex flex-row w-full flex-wrap">
          <div className="flex justify-center items-center w-full">
            <span className="text-base text-amber-500">24/09/2024 11:06:00</span>
          </div>
        </div> */}
          <div className="flex flex-row ml-auto flex-none items-center space-x-1">
            {/* <Button isIconOnly color="warning" variant="light">
            <i className={`i-solar:cloud-storage-bold !w-7 !h-7 !text-amber-400`} />
          </Button> */}
            {/* use Zustand */}
            {/* <ButtonGroupMapper btnGroupConfig={headerSM.btnGroup} /> */}
            {/* useState usage */}
            <ButtonGroupMapper btnGroupConfig={headerConfig} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
