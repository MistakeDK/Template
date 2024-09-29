import React from "react";
import { ArrowLeftIcon } from "../../assets/ArrowLeftIcon";
import { ArrowRightIcon } from "../../assets/ArrowRightIcon";

interface Idata {
  title: string;
}
export const BT3 = () => {
  const data: Array<Idata> = [
    {
      title: "check"
    },
    {
      title: "field"
    },
    {
      title: "Wether"
    },
    {
      title: "Wether"
    },
    {
      title: "Wether"
    },
    {
      title: "Wether"
    }
  ];
  return (
    <React.Fragment>
      <div className="flex items-center relative w-[300px] px-6 py-6  m-2 rounded-md h-[32px] border overflow-x-auto scrollbar-hide">
        <div className="absolute left-0.5 top-3 z-10">
          <button>
            <ArrowLeftIcon color="fill-amber-400" />
          </button>
        </div>
        <div className="absolute right-0.5 top-3 z-10">
          <button>
            <ArrowRightIcon color="fill-amber-400 " />
          </button>
        </div>
        <div className="space-x-2 flex">
          {data.map((item) => {
            return (
              <button className="border p-1 border-blue-600 rounded-md hover:bg-red-600 hover:text-white transition-all">
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
