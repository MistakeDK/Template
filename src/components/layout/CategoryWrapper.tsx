import { Category } from "./Category";
import { categoryState } from "./ILayout";
// const useViewState = create<viewState>((set)=>({
//   categoryOpen:[],
//   pushIndex:(index:number)=>set({categoryOpen:[]}),
//   removeAll:()=>set({categoryOpen:[]}),
//   removeIndex:()=>
// }));
export const CategoryWrapper = () => {
  // @ts-ignore
  const editOnClick = (evt: any, info: any) => {
    console.log("btn click info", info);
  };
  const arrCategory: Array<categoryState> = [
    {
      icon: <span>icon</span>,
      title: "First",
      // @ts-ignore
      btnGroup: [{ btnName: "edit", icon: <span>IconEdit</span>, editOnClick }],
      id: 1,
      url: ""
    }
  ];
  //call Api here
  return (
    <div className="w-1/3">
      {arrCategory.map((item) => {
        return <Category category={item} />;
      })}
    </div>
  );
};
