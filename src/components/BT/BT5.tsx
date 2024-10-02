import React, { useState } from "react";
import { ArrowLeftIcon } from "../../assets/ArrowLeftIcon";
import { ArrowRightIcon } from "../../assets/ArrowRightIcon";
import { CameraIcon } from "../../assets/CameraIcon";

interface Iimg {
  url: string[];
}

export const BT5 = ({ url }: Iimg) => {
  const arrIcon: Array<string> = new Array(20).fill("");

  const [direct, setDirect] = useState<"left" | "right">();
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(0);

  const handlePre = () => {
    if (isLoading) return;
    setIsLoading(true);
    setDirect("left");
    const pre = index <= 0 ? url.length - 1 : index - 1;
    setTimeout(() => {
      setIndex(pre);
      setIsLoading(false);
    }, 500);
  };

  const handleNext = () => {
    if (isLoading) return;
    setIsLoading(true);
    setDirect("right");

    const next = index >= url.length - 1 ? 0 : index + 1;
    setTimeout(() => {
      setIndex(next);
      setIsLoading(false);
    }, 500);
  };

  return (
    <React.Fragment>
      <div className="ml-w mr-1 w-full h-full rounded-xl backdrop-blur-lg bg-[#2d375f99] border">
        <div className="w-full flex justify-center items-center">
          <div className=" border-r-2 border-l-2 w-1/5 grid grid-flow-col grid-rows-2">
            {arrIcon.map(() => {
              return (
                <div>
                  <CameraIcon size={20} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex w-full space-x-2 ">
          <div className="flex-col flex w-1/2 space-y-2">
            <div className="w-full  overflow-hidden relative">
              <button onClick={handlePre} className="top-1/2 left-0 absolute z-20">
                <ArrowLeftIcon size={20} />
              </button>
              <button onClick={handleNext} className="top-1/2 right-0 absolute z-20">
                <ArrowRightIcon size={20} />
              </button>

              <img className="object-cover" src={url[index]}></img>

              {isLoading && direct === "right" && (
                <img
                  className="absolute top-0 w-full h-full object-cover slide-in-right"
                  src={url[(index + 1) % url.length]}
                ></img>
              )}

              {isLoading && direct === "left" && (
                <img
                  className="absolute top-0 w-full h-full object-cover slide-in-left"
                  src={url[(index - 1 + url.length) % url.length]}
                  alt={`Slide ${index - 1}`}
                ></img>
              )}
            </div>

            <div className="overflow-scroll  grid grid-rows-2 grid-flow-col place-items-center gap-4 scrollbar w-full scrollbar-horizontal scrollbar-vertical">
              {arrIcon.map(() => {
                return <div className="w-20 h-20 bg-gray-700"></div>;
              })}
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-between ">
            <div className=" flex flex-col space-y-2 items-center py-1 scrollbar-vertical overflow-y-auto">
              {arrIcon.map(() => {
                return <div className="p-1 w-4/5 bg-red-800"></div>;
              })}
            </div>
            <div className="flex flex-wrap">
              {arrIcon.map(() => {
                return (
                  <div>
                    <CameraIcon />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
