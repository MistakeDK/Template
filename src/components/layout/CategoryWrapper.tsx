import { CameraIcon } from "../../assets/CameraIcon";
import { HeartIcon } from "../../assets/HeartIcon";
import { Category } from "./Category";
import { categoryState } from "./ILayout";
export const CategoryWrapper = () => {
  const editOnClick = (evt: React.MouseEvent<HTMLButtonElement>, info: object) => {
    console.log("btn click info", info);
  };
  const arrCategory: Array<categoryState> = [
    {
      icon: <HeartIcon filled={"black"} />,
      title: "First",
      btnGroup: [
        {
          btnName: "edit",
          icon: <CameraIcon />,
          onClick: editOnClick,
          info: { test: "abc" }
        },
        {
          btnName: "New",
          icon: <CameraIcon />,
          onClick: editOnClick,
          info: { test: "abd" }
        }
      ],
      id: 1,
      url: ""
    },
    {
      icon: <HeartIcon filled={"black"} />,
      title: "First",
      btnGroup: [
        {
          btnName: "edit",
          icon: <CameraIcon />,
          onClick: editOnClick,
          info: { test: "abc" }
        },
        {
          btnName: "New",
          icon: <CameraIcon />,
          onClick: editOnClick,
          info: { test: "abd" }
        }
      ],
      id: 2,
      url: ""
    }
  ];
  return (
    <div className="w-full">
      {arrCategory.map((item) => {
        return <Category classWrapper="bg-red-900" category={item} />;
      })}
    </div>
  );
};
