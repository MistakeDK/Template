import React from "react";
import { CameraIcon } from "../../assets/CameraIcon";

export const BT5 = () => {
  const arrIcon: Array<string> = new Array(200).fill("");
  return (
    <React.Fragment>
      <div className="ml-[8px] mr-[4px] w-full h-[100vh] py-[4px] rounded-[42px] overflow-hidden">
        <div className="bg-blue-600 h-[10%] w-full flex justify-center items-center">
          <div className="flex justify-center border-r-2 border-l-2 w-1/5 flex-wrap">
            {arrIcon.map((item) => {
              return (
                <div>
                  <CameraIcon />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex h-[90%] w-full">
          <div className="flex-col h-full  w-1/2">
            <div className="h-1/2 bg-red-300">a</div>
            <div className="h-1/2 bg-green-300 flex justify-center items-center">
              <div className="overflow-x-auto flex">
                {arrIcon.map((item) => {
                  return (
                    <div>
                      <CameraIcon />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-pink-600"></div>
        </div>
      </div>
    </React.Fragment>
  );
};
