import React from "react";

interface IDefaultLayoutProps {
  children?: React.ReactNode;
}

export const DefaultLayout = ({ children }: IDefaultLayoutProps) => {
  const uiConfigStore = useUIConfigStore();

  return (
    <React.Fragment>
      {/* <div
        className={`flex flex-col w-screen h-screen bg-[url('${backgroundImgs["bg-2"].path}')] bg-cover font-sans relative`}
      > */}
      <div
        // className={`flex flex-col w-screen h-screen font-sans relative z-0 main-content-bottom-bg`}
        className={`flex flex-col w-screen h-screen font-sans relative z-0 layout-bg`}
        // style={{ backgroundImage: `url(${uiConfigStore.setting.defaultBgImg.path})` }}
      >
        {/*  */}
        <div className="absolute top-0 left-0 flex flex-col w-full h-full backdrop-blur-none bg-gray-900 bg-opacity-0 z-[1]"></div>
        {/*  */}
        <div className="flex flex-col w-full h-full backdrop-blur-none bg-gray-900 bg-opacity-0 z-[2] overflow-hidden">
          <Header />
          <div className="flex w-full h-full overflow-hidden relative">
            <LeftNav />
            <div className="flex flex-col w-full h-full pr-2 pb-2 overflow-hidden">
              <div className="flex w-full h-full rounded-xl bg-[rgb(29,56,76)] bg-opacity-35 backdrop-blur-none overflow-hidden relative z-[5]">
              {/* <div className="flex w-full h-full rounded-xl main-content-bottom-bg backdrop-blur-none overflow-hidden relative z-[5]"> */}
                <div className="flex flex-col w-4/5 h-full overflow-hidden">{children}</div>
                <RightSidebar />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </React.Fragment>
  );
};
