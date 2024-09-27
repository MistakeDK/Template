import React from "react";
import { RenderIf } from "../../util/RenderIf";

export const BT1 = () => {
  const [isClick, setIsClick] = useState(false);
  const onClick = () => {
    setIsClick(!isClick);
  };
  return (
    <React.Fragment>
      <div className="flex flex-col w-[400px] p-2">
        <RenderIf condition={!isClick}>
          <div onClick={onClick} className="bg-red-400 h-[20px]">
            ABC
          </div>
          <div onClick={onClick} className="bg-blue-400 h-[20px]">
            DEF
          </div>
          <div onClick={onClick} className="bg-green-400 h-[20px]">
            GFH
          </div>
        </RenderIf>
        <RenderIf condition={isClick}>
          <div className="bg-gray-400 h-[60px]">
            <button onClick={onClick}>Back</button>
          </div>
        </RenderIf>
      </div>
    </React.Fragment>
  );
};
