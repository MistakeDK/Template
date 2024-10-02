import React from "react";
import { CameraIcon } from "../../assets/CameraIcon";

export const BT4 = () => {
  const arr: Array<string> = new Array(5).fill("");
  return (
    <React.Fragment>
      <div className="pl-[4px] flex  py-[12px] ">
        <div className="overflow-y-auto overflow-x-hidden scrollbar-vertical">
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
