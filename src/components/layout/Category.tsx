import { RenderIf } from "../../util/RenderIf";
import { CategoryItem } from "./CategoryItem";
import { categoryItemState, categoryState } from "./ILayout";
interface prop {
  category: categoryState;
}

export const Category = ({ category }: prop) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { btnGroup, index, title, url, icon } = category;
  const arr: Array<categoryItemState> = [
    {
      title: "item 1",
      icon: <span></span>,
      btnGroup: [<>1</>, <>2</>]
    },
    {
      title: "item 2",
      icon: <span></span>,
      btnGroup: [<>3</>, <>4</>]
    }
  ];
  //call api here
  return (
    <>
      <div className="bg-red-600  px-2 flex justify-between">
        <div className="space-x-2">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {icon}
          </button>
          <span>{title}</span>
        </div>
        <div className="space-x-2">
          {/* @ts-ignore */}
          {btnGroup.map((item: any) => (
            <button
              onClick={(evt) => {
                item.editOnClick(evt, "mybutton");
              }}
            >
              {item.btnName}
            </button>
          ))}
        </div>
      </div>
      <RenderIf condition={isOpen}>
        {arr.map((item) => {
          return <CategoryItem categoryItem={item} />;
        })}
      </RenderIf>
    </>
  );
};
