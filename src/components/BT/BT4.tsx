import React from "react";
import { CameraIcon } from "../../assets/CameraIcon";

export const BT4 = () => {
  const arr: Array<string> = new Array(50).fill("");
  return (
    <React.Fragment>
      <div className="pl-[4px] flex  w-fit h-[100vh] py-[12px] ">
        <div className="overflow-y-auto">
          {arr.map((item) => {
            return (
              <div>
                <CameraIcon />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
