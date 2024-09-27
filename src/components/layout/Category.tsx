import { motion, Variants } from "framer-motion";
import { ButtonVariant } from "../../ComponentVariant/ButtonVariant";
import { RenderIf } from "../../util/RenderIf";
import { CategoryItem } from "./CategoryItem";
import { categoryItemState, categoryState } from "./ILayout";
interface prop {
  category: categoryState;
  classWrapper?: string;
  classItem?: string;
}

export const Category = ({ classItem, category, classWrapper }: prop) => {
  const { btnGroup, title, icon } = category;
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
      <div className={`${classWrapper} w-full flex justify-between cursor-pointer`} onClick={() => setIsOpen(!isOpen)}>
        <div className="space-x-2 flex items-center text-white">
          <div>{icon}</div>
          <div>{title}</div>
        </div>
        <div className="flex">
          {btnGroup.map((item) => {
            return (
              <>
                <ButtonVariant
                  disableAnimation
                  isIconOnly
                  className="data-[hover=true]:bg-[#FCDE70] data-[hover=true]:shadow-md space-x-2 transition-all"
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
            return <CategoryItem key={item.titleItem} classItem={classItem} categoryItem={item} />;
          })}
        </motion.div>
      </RenderIf>
    </>
  );
};
