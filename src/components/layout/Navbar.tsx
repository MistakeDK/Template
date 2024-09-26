import { Outlet } from "@tanstack/react-router";
import { motion, Variants } from "framer-motion";
import { ButtonVariant } from "../../ComponentVariant/ButtonVariant";
import { PlusIcon } from "../../assets/PlusIcon";
import { TrigLeftIcon } from "../../assets/TriangleLeftIcon";
import { TriangleRightIcon } from "../../assets/TriangleRightIcon";
import { AddTab } from "./AddTab";
import { SearchInput } from "./SearchInput";
import { TabWrapper } from "./TabWrapper";

export const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAnimate, setIsOpenAnimate] = useState(false);
  const variants: Variants = {
    open: {
      x: 0,
      y: 0,
      width: "auto",
      opacity: 1
    },
    close: {
      opacity: 0,
      width: 0,
      x: 200,
      y: 0
    }
  };
  return (
    <>
      <div className="flex w-full overflow-x-hidden ">
        <div className="relative w-[30px]">
          <ButtonVariant
            disableAnimation
            isIconOnly
            className="absolute"
            onClick={() => {
              setIsOpenAnimate(!isOpenAnimate);
              setTimeout(() => {
                setIsOpen(!isOpen);
              }, 300);
            }}
          >
            {isOpen ? <TriangleRightIcon /> : <TrigLeftIcon />}
          </ButtonVariant>
        </div>
        <motion.div
          className="flex flex-col h-screen bg-blue-300 p-1 border-l-2 border-red-600"
          variants={variants}
          initial={false}
          animate={isOpen ? "open" : "close"}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <div className="flex w-full">
            <TabWrapper
              width="w-[280px]"
              classTabList="bg-green-700 pl-0"
              classTab="hover:bg-red-200 opacity-100 data-[hover-unselected=true]:opacity-100"
              variant="bordered"
              classTabContent="text-white"
              timeHoverDisplay={3} //Unit MiliSecond
            />
            <div className={isOpen ? "flex" : "hidden"}>
              <AddTab placement="top-end" icon={<PlusIcon />} />
            </div>
          </div>
          <SearchInput classWrapper="" classInput="" isHaveClearButton />
          <Outlet />
        </motion.div>
      </div>
    </>
  );
};
