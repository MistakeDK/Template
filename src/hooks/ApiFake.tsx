import { CameraIcon } from "../assets/CameraIcon";
import { categoryItemState } from "../components/layout/ILayout";
const editOnClick = (evt: React.MouseEvent<HTMLButtonElement>, info: object) => {
  console.log("btn click info", info);
};
const arrCategoryItem: Array<categoryItemState> = [
  {
    titleItem: "camera",
    btnGroupItem: [
      {
        btnName: "edit",
        icon: <CameraIcon filled={"cyan"} />,
        onClick: editOnClick,
        info: { test: "abc" }
      },
      {
        btnName: "New",
        icon: <CameraIcon filled={"cyan"} />,
        onClick: editOnClick,
        info: { test: "abd" }
      }
    ]
  },
  {
    titleItem: "camera",
    btnGroupItem: [
      {
        btnName: "edit",
        icon: <CameraIcon filled={"cyan"} />,
        onClick: editOnClick,
        info: { test: "abc" }
      },
      {
        btnName: "New",
        icon: <CameraIcon filled={"cyan"} />,
        onClick: editOnClick,
        info: { test: "abd" }
      }
    ]
  }
];
export const fetchFakeArrCategoryItem = (): Promise<categoryItemState[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arrCategoryItem);
    }, 1000);
  });
};
