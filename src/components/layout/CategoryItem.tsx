import { categoryItemState } from "./ILayout";

interface prop {
  categoryItem: categoryItemState;
}

export const CategoryItem = ({ categoryItem }: prop) => {
  return (
    <>
      <div className="flex pl-4 space-x-2 justify-between">
        <div>
          <span>{categoryItem.icon}</span>
          <span>{categoryItem.title}</span>
        </div>
        <div className="px-2 space-x-2">
          {categoryItem.btnGroup.map((item) => {
            return item;
          })}
        </div>
      </div>
    </>
  );
};
