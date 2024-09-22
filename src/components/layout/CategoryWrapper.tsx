import React from "react";
import { Category } from "./Category";
import { categoryState } from "./ILayout";
// const useViewState = create<viewState>((set)=>({
//   categoryOpen:[],
//   pushIndex:(index:number)=>set({categoryOpen:[]}),
//   removeAll:()=>set({categoryOpen:[]}),
//   removeIndex:()=>
// }));
export const CategoryWrapper = () => {
  const editOnClick = (evt: React.MouseEvent<HTMLButtonElement>, info: string) => {
    console.log("btn click info", info);
  };
  const arrCategory: Array<categoryState> = [
    {
      icon: <span>icon</span>,
      title: "First",
      btnGroup: [{ btnName: "edit", icon: <span>IconEdit</span>, onClick: editOnClick, info: "abv" }],
      id: 1,
      url: ""
    }
  ];
  console.log(arrCategory);
  //call Api here
  return (
    <div className="w-1/3">
      {arrCategory.map((item) => {
        return <Category category={item} />;
      })}
    </div>
  );
};
