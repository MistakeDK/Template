import { CameraIcon } from "../../assets/CameraIcon";
import { Category } from "./Category";
import { categoryState } from "./ILayout";
export const CategoryWrapper = () => {
  const editOnClick = (evt: React.MouseEvent<HTMLButtonElement>, info: object) => {
    console.log("btn click info", info);
  };
  const arrCategory: Array<categoryState> = [
    {
      title: "First",
      btnGroup: [
        {
          btnName: "edit",
          icon: <CameraIcon key={"C1"} color="fill-amber-400" />,
          onClick: editOnClick,
          info: { test: "abc" }
        },
        {
          btnName: "New",
          icon: <CameraIcon key={"C2"} color="fill-amber-400" />,
          onClick: editOnClick,
          info: { test: "abd" }
        }
      ],
      id: 1,
      url: ""
    },
    {
      title: "First",
      btnGroup: [
        {
          btnName: "edit",
          icon: <CameraIcon key={"C3"} color="fill-amber-400" />,
          onClick: editOnClick,
          info: { test: "abc" }
        },
        {
          btnName: "New",
          icon: <CameraIcon key={"C4"} color="fill-amber-400" />,
          onClick: editOnClick,
          info: { test: "abd" }
        }
      ],
      id: 2,
      url: ""
    }
  ];
  return (
    <div className="w-full space-y-0.5">
      {arrCategory.map((item) => {
        return (
          <Category
            key={item.id}
            classWrapper="bg-[#4A4947] rounded-lg p-0.5 "
            classItem="hover:bg-[#d4d4d8] rounded-lg text-red-300"
            category={item}
          />
        );
      })}
    </div>
  );
};
