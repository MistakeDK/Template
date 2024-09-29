import React from "react";

export const BT2 = () => {
  return (
    <React.Fragment>
      <div className="h-screen w-screen relative ">
        <div className="bg-hero-image bg-center bg-no-repeat bg-cover backdrop-blur-lg w-full h-full blur-md"></div>
        <div className="flex flex-col space-y-3 z-2 opacity-70 absolute w-4/5 top-[10%] left-48  rounded-lg h-4/5">
          <div className="self-center justify-self-center w-4/5 rounded-[36px] bg-red-300 p-4 h-16 shadow-lg"></div>
          <div className="flex space-x-4 h-4/5">
            <div className="self-center justify-self-center w-1/12 h-4/5 rounded-[36px] bg-red-300 p-4 shadow-lg"></div>
            <div className="bg-red-500 w-2/12 p-4 shadow-lg rounded-[36px]"></div>
            <div className="bg-blue-600 w-1/5 p-4 shadow-lg rounded-[36px] ml-4"></div>
            <div className="flex flex-col w-full ml-4">
              <div className="flex space-x-2 h-1/3  shadow-lg rounded-[36px] mb-4">
                <div className="bg-green-300 w-7/12 rounded-[36px]"></div>
                <div className="bg-green-300 w-5/12 rounded-[36px]"></div>
              </div>
              <div className="flex space-x-2  h-1/4 shadow-lg rounded-[36px] mb-4">
                <div className="bg-black w-9/12 rounded-[36px]"></div>
                <div className="bg-black w-3/12 rounded-[36px]"></div>
              </div>
              <div className="flex  h-2/5 space-x-3 p-2 shadow-lg ">
                <div className="bg-amber-400 w-3/12 rounded-[36px]"></div>
                <div className="flex flex-col w-9/12 space-y-3">
                  <div className="flex space-x-3 h-1/3">
                    <div className="bg-orange-500 p-4 w-1/3 rounded-[36px]"></div>
                    <div className="bg-blue-600 p-4 w-2/3 rounded-[36px]"></div>
                  </div>
                  <div className="w-full bg-pink-600 p-4 h-2/3 rounded-[36px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
