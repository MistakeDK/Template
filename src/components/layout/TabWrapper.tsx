import { Tab, Tabs } from "@nextui-org/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ButtonVariant } from "../../ComponentVariant/ButtonVariant";
import { tabWrapperState } from "./ILayout";

export const TabWrapper = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const navigation = useNavigate();
  const tabRef = useRef<HTMLDivElement>(null);
  const arrayTab: Array<tabWrapperState> = [
    {
      title: "category",
      key: "category",
      href: "category"
    },
    {
      title: "Test",
      key: "test",
      href: "example"
    },
    {
      title: "photo",
      key: "about",
      href: "/photo"
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
  ];

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
  }, []);
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
      <div className="flex justify-between items-center relative z-0">
        <div className="absolute left-0 top-0 z-10 ">
          <AnimatePresence>
            {isHover && canScrollLeft && (
              <motion.div
                variants={Variant}
                initial={"appearInitial"}
                animate={"appearAnimate"}
                exit={{ maxHeight: "auto", opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <ButtonVariant className="mr-3" disableAnimation isIconOnly onClick={scrollLeft} size="xss">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                  </svg>
                </ButtonVariant>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div
          className="overflow-x-auto z-0 scrollbar-hide overflow-y-hidden"
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
            variant="underlined"
            color="default"
            onSelectionChange={(key) => {
              navigation({
                to: `/test/${key}`
              });
            }}
          >
            {arrayTab.map((item) => {
              return <Tab className="min-w-20 p-0" title={item.title} key={item["key"]}></Tab>;
            })}
          </Tabs>
        </div>
        <div className="absolute right-0 top-0 z-10">
          <AnimatePresence>
            {isHover && canScrollRight && (
              <motion.div
                variants={Variant}
                initial={"appearInitial"}
                animate={"appearAnimate"}
                exit={{ maxHeight: "auto", opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <ButtonVariant className="ml-3" disableAnimation isIconOnly onClick={scrollRight} size="xss">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </ButtonVariant>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
