import { Input, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { ButtonVariant } from "../../ComponentVariant/ButtonVariant";
interface prop {
  icon: React.ReactNode;
}

export const AddTab = ({ icon }: prop) => {
  const tabStore = useTabStore();
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Popover
        isOpen={isOpen}
        shouldCloseOnInteractOutside={(e) => {
          setIsOpen(false);
        }}
        placement="right"
        showArrow
        offset={10}
      >
        <PopoverTrigger>
          <ButtonVariant focus={true} disableAnimation onClick={() => setIsOpen(true)} isIconOnly size="xs">
            {icon}
          </ButtonVariant>
        </PopoverTrigger>
        <PopoverContent className="w-60">
          <Input
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
