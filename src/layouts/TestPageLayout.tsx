import { Button } from "@nextui-org/react";
import React from "react";

interface ITestPageLayoutProps {
  children?: React.ReactNode;
}

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
      <div className="flex flex-col items-center text-sm font-semibold text-zinc-100 bg-gray-900 bg-opacity-0 px-3 py-1 rounded-xl">
        <span className="">{dateFormatter.ddmmyyyy(day, month, year)}</span>
        <span className="">{timeFormatter(time)}</span>
      </div>
      {/* <div className="text-4xl font-bold text-blue-500">
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false })}
      </div> */}
    </React.Fragment>
  );
};

const TestPageHeader = () => {
  // @ts-ignore
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="flex flex-col bg-transparent w-full pb-0 items-center">
        <div className="flex w-full flex-nowrap px-3 py-2 relative">
          <div className="flex absolute top-0 left-0 w-full h-full justify-center items-center z-0">
            <div className="flex flex-col justify-center items-center px-5 py-1 rounded-lg bg-gray-800 bg-opacity-0">
              <p className="font-semibold text-lg text-zinc-100">Test Page</p>
              <p className="font-light text-xs text-zinc-100">(development environment only)</p>
            </div>
          </div>
          <div className="">
            <Button
              isIconOnly
              color="default"
              variant="light"
              onClick={(evt) => {
                navigate({ to: "/" });
              }}
            >
              <IconBuilder name={`solar--square-arrow-left-bold-duotone`} clsConfig={`w-8 h-8 text-zinc-100`} />
            </Button>
          </div>
          <div className="flex flex-row ml-auto flex-none items-center space-x-1">
            <Clock />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const TestPageLayout = ({ children }: ITestPageLayoutProps) => {
  const uiConfigStore = useUIConfigStore();

  return (
    <React.Fragment>
      <div
        className={`flex flex-col w-screen h-screen font-sans relative z-0 bg-cover`}
        style={{ backgroundImage: `url(${uiConfigStore.setting.testPageBgImg.path})` }}
      >
        {/*  */}
        <div className="absolute top-0 left-0 flex flex-col w-full h-full backdrop-blur-none bg-gray-900 bg-opacity-0 z-[1]"></div>
        {/*  */}
        <div className="flex flex-col w-full h-full backdrop-blur-none bg-gray-900 bg-opacity-0 z-[2] overflow-hidden">
          <TestPageHeader />
          <div className="flex flex-col w-full h-full px-4 pt-0 pb-3 overflow-hidden">
            <div className="flex flex-col w-full h-full overflow-hidden rounded-xl bg-gray-700 bg-opacity-45 backdrop-blur-xl">
              <div className="flex-grow w-full overflow-y-auto custom-scrollbar">{children}</div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </React.Fragment>
  );
};
