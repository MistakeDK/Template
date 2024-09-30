import React from "react";

export const BT2 = () => {
  return (
    <React.Fragment>
      <div className="h-screen w-screen bg-hero-image flex justify-center items-center bg-center bg-no-repeat bg-cover text-white">
        <div className="flex flex-col space-y-3 z-2  w-4/5  rounded-lg h-4/5">
          <div className="self-center justify-self-center w-4/5 rounded-[36px] border p-4 h-16 shadow-lg  backdrop-blur-lg"></div>
          <div className="flex space-x-4 h-4/5">
            <div className="self-center justify-self-center w-1/12 h-4/5 rounded-[36px] border p-4 backdrop-blur-lg shadow-lg"></div>
            <div className="border w-1/5 p-4 shadow-lg rounded-[36px] ml-4 justify-between backdrop-blur-lg flex flex-col">
              <div className="border opacity-60 w-full h-1/6 rounded-[28px] bg-[#0000009b]"></div>
              <div className="border opacity-60 w-full h-1/6 rounded-[28px] bg-[#0000009b]"></div>
            </div>
            <div className="flex flex-col w-full ml-4">
              <div className="flex space-x-2 h-1/3 rounded-[36px] mb-4 backdrop-blur-lg">
                <div className="border w-7/12 shadow-lg rounded-[36px]"></div>
                <div className="border w-5/12 shadow-lg rounded-[36px]"></div>
              </div>
              <div className="flex space-x-2 h-1/4 shadow-lg rounded-[36px] mb-4 backdrop-blur-lg">
                <div className="border w-9/12 rounded-[36px]"></div>
                <div className="border w-3/12 rounded-[36px]"></div>
              </div>
              <div className="flex h-2/5 space-x-3 p-2 shadow-lg backdrop-blur-lg">
                <div className="border w-3/12 rounded-[36px]"></div>
                <div className="flex flex-col w-9/12 space-y-3">
                  <div className="flex space-x-3 h-1/3 backdrop-blur-lg">
                    <div className="border p-4 w-1/3 rounded-[36px]"></div>
                    <div className="border p-4 w-2/3 rounded-[36px]"></div>
                  </div>
                  <div className="w-full border p-4 h-2/3 rounded-[36px] backdrop-blur-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
