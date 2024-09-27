import { ButtonVariant } from "../../ComponentVariant/ButtonVariant";
import { categoryItemState } from "./ILayout";

interface prop {
  categoryItem: categoryItemState;
  classItem?: string;
}

export const CategoryItem = ({ categoryItem, classItem }: prop) => {
  const { btnGroupItem, titleItem, iconItem } = categoryItem;
  return (
    <>
      <div className={`flex pl-4 space-x-2 py-1 justify-between ${classItem}`}>
        <div className="flex items-center ">
          {iconItem}
          {titleItem}
        </div>
        <div className="px-2 space-x-2 flex">
          {btnGroupItem.map((item) => {
            return (
              <>
                <ButtonVariant className="" size="xss" isIconOnly onClick={(evt) => item.onClick(evt, { test: "abc" })}>
                  {item.icon}
                </ButtonVariant>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
