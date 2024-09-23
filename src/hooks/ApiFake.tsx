import { CameraIcon } from "../assets/CameraIcon";
import { HeartIcon } from "../assets/HeartIcon";
import { categoryItemState, categoryState } from "../components/layout/ILayout";
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
const arrCategoryItem: Array<categoryItemState> = [
  {
    iconItem: <CameraIcon filled={"cyan"} />,
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
    iconItem: <CameraIcon filled={"cyan"} />,
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
export const fetchFakeArrCategory = (): Promise<categoryState[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arrCategory);
    }, 2000);
  });
};
export const fetchFakeArrCategoryItem = (): Promise<categoryItemState[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arrCategoryItem);
    }, 1000);
  });
};
