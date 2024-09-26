import { Input, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import React from "react";
import { ArrowLeftIcon } from "../../assets/ArrowLeftIcon";
import { ArrowRightIcon } from "../../assets/ArrowRightIcon";
import { ButtonVariant } from "../../ComponentVariant/ButtonVariant";
import { useTabStore } from "../layout/TabWrapper";
type PopoverPlacement =
  | "top"
  | "bottom"
  | "right"
  | "left"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end"
  | "right-start"
  | "right-end";
interface prop {
  icon?: React.ReactNode;
  placement: PopoverPlacement;
}

export const AddTab = ({ icon, placement }: prop) => {
  const tabStore = useTabStore();
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const IconTab: Array<{ icon: React.ReactNode; key: number }> = [
    {
      icon: <ArrowLeftIcon />,
      key: 1
    },
    {
      icon: <ArrowRightIcon />,
      key: 2
    }
  ];
  return (
    <>
      <Popover
        isOpen={isOpen}
        shouldCloseOnInteractOutside={(e) => {
          setIsOpen(false);
        }}
        placement={placement}
        showArrow
        offset={10}
      >
        <PopoverTrigger>
          <ButtonVariant focus={true} disableAnimation onClick={() => setIsOpen(true)} isIconOnly>
            {icon}
          </ButtonVariant>
        </PopoverTrigger>
        <PopoverContent>
          <Input
            // startContent={
            //   <Select label="icon" size="sm" className="shadow-lg">
            //     {IconTab.map((item) => {
            //       return <SelectItem key={item.key}>{item.icon}</SelectItem>;
            //     })}
            //   </Select>
            // }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                tabStore.add({
                  key: text,
                  title: text
                });
                setIsOpen(false);
              }
            }}
            onChange={(e) => setText(e.target.value)}
          ></Input>
        </PopoverContent>
      </Popover>
    </>
  );
};
