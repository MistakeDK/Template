import { RenderIf } from "../../util/RenderIf";
import { CategoryItem } from "./CategoryItem";
import { categoryItemState, categoryState } from "./ILayout";
interface prop {
  category: categoryState;
}

export const Category = ({ category }: prop) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryItemState, setCategoryItemState] = useState<categoryItemState[]>([]);
  useEffect(() => {
    setCategoryItemState([
      {
        titleItem: "item 1",
        iconItem: <span></span>,
        btnGroupItem: [<>1</>, <>2</>]
      },
      {
        titleItem: "item 2",
        iconItem: <span></span>,
        btnGroupItem: [<>3</>, <>4</>]
      }
    ]);
  }, []);
  return (
    <>
      <div className="bg-red-600  px-2 flex justify-between">
        <div className="space-x-2">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {category.icon}
          </button>
          {/* <span>{category.title}</span> */}
        </div>
        <div className="space-x-2">
          {category.btnGroup.map((item) => (
            <button
              key={item.btnName}
              onClick={(evt) => {
                item.onClick(evt, item.info as string);
              }}
            >
              {item.btnName}
            </button>
          ))}
        </div>
      </div>
      <RenderIf condition={isOpen}>
        {categoryItemState.map((item) => {
          return <CategoryItem categoryItem={item} />;
        })}
      </RenderIf>
    </>
  );
};
