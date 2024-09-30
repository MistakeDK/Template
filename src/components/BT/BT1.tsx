import React from "react";
import { RenderIf } from "../../util/RenderIf";

interface Iinfo {
  title: string;
  color: string;
}
export const BT1 = () => {
  const [isClick, setIsClick] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const onClick = (title: string) => {
    setIsClick(!isClick);
    setCurrentTitle(title);
  };
  const data: Array<Iinfo> = [
    {
      title: "ABC",
      color: "red-400"
    },
    {
      title: "DEF",
      color: "blue-400"
    },
    {
      title: "GHJ",
      color: "green-400"
    }
  ];
  return (
    <React.Fragment>
      <div className="flex flex-col w-[400px] p-2">
        <RenderIf condition={!isClick}>
          {data.map((item) => {
            return (
              <div onClick={() => onClick(item.title)} className={`h-[20px] bg-${item.color}`}>
                {item.title}
              </div>
            );
          })}
        </RenderIf>
        <RenderIf condition={isClick}>
          <div className="bg-gray-400 h-[60px]">
            <button onClick={() => onClick("")}>{currentTitle}</button>
          </div>
        </RenderIf>
      </div>
    </React.Fragment>
  );
};
