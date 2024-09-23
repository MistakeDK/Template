import { motion, Variants } from "framer-motion";
import { ButtonVariant } from "../../ComponentVariant/ButtonVariant";
import { RenderIf } from "../../util/RenderIf";
import { CategoryItem } from "./CategoryItem";
import { categoryItemState, categoryState } from "./ILayout";
interface prop {
  category: categoryState;
}

export const Category = ({ category }: prop) => {
  const { btnGroup, id, title, url, icon } = category;
  const [isOpen, setIsOpen] = useState(false);
  const [itemCategory, setItemCategory] = useState<categoryItemState[]>([]);
  useEffect(() => {
    if (!isOpen) return;
    const callApi = async () => {
      const data = await fetchFakeArrCategoryItem();
      setItemCategory(data);
    };
    callApi();
  }, [isOpen]);
  const variant: Variants = {
    openInitial: {
      height: 0
    },
    openAnimate: {
      height: "auto"
    },
    closeInitial: {
      height: "auto"
    },
    closeAnimate: {
      height: 0
    }
  };
  return (
    <>
      <div className="bg-red-600 p-2 w-full flex justify-between" onClick={() => setIsOpen(!isOpen)}>
        <div className="space-x-2 flex items-center">
          {icon}
          {title}
        </div>
        <div className="space-x-2 flex">
          {btnGroup.map((item) => {
            return (
              <>
                <ButtonVariant
                  isIconOnly
                  onClick={(evt) => {
                    evt.stopPropagation();
                    item.onClick(evt, item.info.test);
                  }}
                >
                  {item.icon}
                </ButtonVariant>
              </>
            );
          })}
        </div>
      </div>
      <RenderIf condition={itemCategory.length !== 0}>
        <motion.div
          variants={variant}
          initial={isOpen ? "openInitial" : "closeInitial"}
          animate={isOpen ? "openAnimate" : "closeAnimate"}
          exit={{ maxHeight: 0 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="overflow-hidden"
        >
          {itemCategory.map((item) => {
            return <CategoryItem key={item.titleItem} categoryItem={item} />;
          })}
        </motion.div>
      </RenderIf>
    </>
  );
};
