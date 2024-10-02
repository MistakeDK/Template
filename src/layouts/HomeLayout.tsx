import React from "react";

interface IHomeLayoutProps {
  children?: React.ReactNode;
}

export const HomeLayout = ({ children }: IDefaultLayoutProps) => {
  const uiConfigStore = useUIConfigStore();

  return (
    <React.Fragment>
      <div
        className={`flex flex-col w-screen h-screen font-sans relative z-0 layout-bg`}
        // style={{ backgroundImage: `url(${uiConfigStore.setting.defaultBgImg.path})` }}
      >
        {/*  */}
        <div className="absolute top-0 left-0 flex flex-col w-full h-full backdrop-blur-none bg-gray-900 bg-opacity-0 z-[1]"></div>
        {/*  */}
        <div className="flex flex-col w-full h-full backdrop-blur-none bg-gray-900 bg-opacity-0 z-[2] overflow-hidden">
          <Header />
          <div className="flex w-full h-full overflow-hidden">
            <LeftNav />
            <div className="flex flex-col w-full h-full pr-2 pb-2 overflow-hidden">
              {/* <div className="flex flex-col w-full h-full overflow-hidden rounded-none rounded-l-xl backdrop-blur-none"> */}
              <div className="flex flex-col w-full h-full overflow-hidden rounded-none rounded-xl bg-[rgb(29,56,76)] bg-opacity-35 backdrop-blur-none">
                <div className="flex-grow w-full overflow-y-auto custom-scrollbar">{children}</div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </React.Fragment>
  );
};
