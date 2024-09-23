import { Button } from "@nextui-org/react";
import { categoryItemState } from "./ILayout";

interface prop {
  categoryItem: categoryItemState;
}

export const CategoryItem = ({ categoryItem }: prop) => {
  const { btnGroupItem, titleItem, iconItem } = categoryItem;
  return (
    <>
      <div className="flex pl-4 space-x-2 py-1 justify-between bg-blue-600">
        <div className="flex items-center">
          {iconItem}
          {titleItem}
        </div>
        <div className="px-2 space-x-2 flex">
          {btnGroupItem.map((item) => {
            return (
              <>
                <Button size="sm" onClick={(evt) => item.onClick(evt, { test: "abc" })}>
                  {item.icon}
                </Button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
