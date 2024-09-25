import { Tab, Tabs } from "@nextui-org/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ButtonVariant } from "../../ComponentVariant/ButtonVariant";
import { ArrowLeftIcon } from "../../assets/ArrowLeftIcon";
import { ArrowRightIcon } from "../../assets/ArrowRightIcon";

// interface props {
//   classColor: string;
//   variant: "solid" | "bordered" | "light" | "underlined";
//   classHoverTab: string;
//   classCustomTabs?: "string";
//   classCustomTab?: "string";
// }

export const TabWrapper = () => {
  const tabRef = useRef<HTMLDivElement>(null);
  const tabState = useTabStore();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const navigation = useNavigate();
  const scrollLeft = () => {
    if (tabRef.current) {
      tabRef.current.scrollBy({ left: -80, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (tabRef.current) {
      tabRef.current.scrollBy({ left: 80, behavior: "smooth" });
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
  return (
    <>
      <div className="relative z-0">
        <div className="absolute -left-4 top-0 z-10 ">
          <AnimatePresence>
            {isHover && canScrollLeft && (
              <motion.div
                variants={Variant}
                initial={"appearInitial"}
                animate={"appearAnimate"}
                exit={{ maxHeight: "auto", opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <ButtonVariant className="" disableAnimation isIconOnly onClick={scrollLeft} size="xss">
                  <ArrowLeftIcon />
                </ButtonVariant>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div
          className="overflow-x-scroll z-0 rounded-xl scrollbar-hide overflow-y-hidden"
          ref={tabRef}
          onScroll={checkForScrollPosition} // Listen for scrolling
        >
          <Tabs
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() =>
              setTimeout(() => {
                setIsHover(false);
              }, 3000)
            }
            className=""
            variant="solid"
            color="default"
            onSelectionChange={(key) => {
              navigation({
                to: `/test/${key}`
              });
            }}
          >
            {tabState.tab.map((item) => {
              return <Tab className="min-w-20 p-0" title={item.title} key={item["key"]}></Tab>;
            })}
          </Tabs>
        </div>
        <div className="absolute -right-4 top-0 z-10">
          <AnimatePresence>
            {isHover && canScrollRight && (
              <motion.div
                variants={Variant}
                initial={"appearInitial"}
                animate={"appearAnimate"}
                exit={{ maxHeight: "auto", opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <ButtonVariant className="" disableAnimation isIconOnly onClick={scrollRight} size="xss">
                  <ArrowRightIcon />
                </ButtonVariant>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
