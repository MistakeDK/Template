import { Tab, Tabs } from "@nextui-org/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { produce } from "immer";
import { useDebounce } from "use-debounce";
import { create } from "zustand";
import { ButtonVariant } from "../../ComponentVariant/ButtonVariant";
import { ArrowLeftIcon } from "../../assets/ArrowLeftIcon";
import { ArrowRightIcon } from "../../assets/ArrowRightIcon";
import { CameraIcon } from "../../assets/CameraIcon";
import { HeartIcon } from "../../assets/HeartIcon";
import { tab, tabState } from "../../stores/my-store";
interface prop {
  classTabList: string;
  variant: "solid" | "bordered" | "light" | "underlined";
  classTab: string;
  classTabContent: string;
  timeHoverDisplay: number;
  width: string;
}
export const useTabStore = create<tabState>((set) => ({
  tab: [
    {
      title: "category",
      key: "category",
      icon: <HeartIcon />
    },
    {
      title: "Example",
      key: "example",
      icon: <CameraIcon />
    },
    {
      title: "photo",
      key: "about"
    },
    {
      title: "video",
      key: "video"
    },
    {
      title: "Camera",
      key: "Camera"
    },
    {
      title: "Wether",
      key: "Wether"
    },
    {
      title: "Check",
      key: "Check"
    }
  ],
  add: (newTab: tab) =>
    set(
      produce((state) => {
        state.tab.push(newTab);
      })
    )
}));
export const TabWrapper = ({ width, timeHoverDisplay, classTabContent, classTabList, classTab, variant }: prop) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const tabState = useTabStore();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const [debouncedIsHover] = useDebounce(isHover, timeHoverDisplay);
  const navigation = useNavigate();
  const scrollLeft = () => {
    if (tabRef.current) {
      const { scrollLeft } = tabRef.current;
      if (scrollLeft < 200 && scrollLeft > 100) {
        tabRef.current.scrollBy({ left: -999, behavior: "smooth" });
        return;
      }
      tabRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (tabRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabRef.current;
      if (scrollWidth - scrollLeft - clientWidth < 200) {
        tabRef.current.scrollBy({ left: 999, behavior: "smooth" });
        return;
      }
      tabRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };
  const checkForScrollPosition = () => {
    if (tabRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };
  useEffect(() => {
    checkForScrollPosition();
    window.addEventListener("resize", checkForScrollPosition);
    return () => window.removeEventListener("resize", checkForScrollPosition);
  }, [tabState.tab.length]);
  const Variant: Variants = {
    appearInitial: {
      height: "auto",
      opacity: 0
    },
    appearAnimate: {
      opacity: 1
    }
  };
  const onMouseHover = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <div className="flex w-full relative" onMouseLeave={onMouseLeave} onMouseEnter={onMouseHover}>
        <div className="left-0 absolute top-0.5 z-10 ">
          <AnimatePresence>
            {debouncedIsHover && canScrollLeft && (
              <motion.div
                variants={Variant}
                initial={"appearInitial"}
                animate={"appearAnimate"}
                exit={{ maxHeight: "auto", opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="bg-gradient-to-r from-neutral-800 from-0% via-transparent via-50% to-transparent to-90% rounded-l-md pr-4"
              >
                <ButtonVariant disableAnimation isIconOnly onClick={scrollLeft} size="xss">
                  <ArrowLeftIcon />
                </ButtonVariant>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="absolute right-0 top-0.5 z-10">
          <AnimatePresence>
            {debouncedIsHover && canScrollRight && (
              <motion.div
                variants={Variant}
                initial={"appearInitial"}
                animate={"appearAnimate"}
                exit={{ maxHeight: "auto", opacity: 0 }}
                transition={{ duration: 0.35, ease: "circInOut" }}
                className="bg-gradient-to-r from-transparent from-0% via-transparent via-40% to-neutral-800 to-90% rounded-r-md pl-4"
              >
                <ButtonVariant className="" disableAnimation isIconOnly onClick={scrollRight} size="xss">
                  <ArrowRightIcon />
                </ButtonVariant>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className={`overflow-x-scroll z-0 rounded-[10px] scrollbar-hide ${width}`}
          ref={tabRef}
          onScroll={checkForScrollPosition}
        >
          <Tabs
            classNames={{
              tabList: `${classTabList}`,
              tabContent: `${classTabContent}`
            }}
            variant={variant}
            onSelectionChange={(key) => {
              navigation({
                to: `/test/${key}`
              });
            }}
          >
            {tabState.tab.map((item) => {
              return (
                <Tab
                  className={`min-w-18 ${classTab}`}
                  title={
                    <div className="flex items-center">
                      {item.icon}
                      {item.title}
                    </div>
                  }
                  key={item["key"]}
                ></Tab>
              );
            })}
          </Tabs>
        </div>
      </div>
    </>
  );
};
