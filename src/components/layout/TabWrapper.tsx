import { Tab, Tabs } from "@nextui-org/react";
import { HeartIcon } from "../../assets/HeartIcon";
import { ButtonVariant } from "../../ComponentVariant/ButtonVariant";
import { RenderIf } from "../../util/RenderIf";
import { tabWrapperState } from "./ILayout";

interface tabState {
  tabLeft: number;
  tabRight: number;
  tabCurent: Array<tabWrapperState>;
}

export const TabWrapper = () => {
  const arrayTab: Array<tabWrapperState> = [
    {
      title: "photo",
      key: "photo"
    },
    {
      title: "music",
      key: "music"
    },
    {
      title: "video",
      key: "video"
    },
    {
      title: "Camera",
      key: "b"
    },
    {
      title: "Wether",
      key: "d"
    },
    {
      title: "Check",
      key: "f"
    }
  ];
  const [state, setState] = useState<tabState>({
    tabLeft: 0,
    tabRight: 3,
    tabCurent: [arrayTab[0], arrayTab[1], arrayTab[2]]
  });
  const onClickLeft = () => {
    if (state.tabLeft === 0) return;
    setState((pre) => ({
      tabLeft: pre.tabLeft - 1,
      tabRight: pre.tabRight - 1,
      tabCurent: arrayTab.slice(pre.tabLeft - 1, pre.tabRight - 1)
    }));
  };
  const onClickRight = () => {
    if (state.tabRight >= arrayTab.length) return;
    setState((pre) => ({
      tabLeft: pre.tabLeft + 1,
      tabRight: pre.tabRight + 1,
      tabCurent: arrayTab.slice(pre.tabLeft + 1, pre.tabRight + 1)
    }));
  };
  return (
    <>
      <div className="flex justify-between items-center relative">
        <div className="">
          <RenderIf condition={state.tabLeft !== 0}>
            <ButtonVariant color="primary" onClick={onClickLeft} size="md">
              <HeartIcon />
            </ButtonVariant>
          </RenderIf>
        </div>
        <div className="absolute left-32">
          <Tabs variant="underlined" color="default">
            {state.tabCurent.map((item) => {
              return <Tab key={item["key"]} title={item["title"]} />;
            })}
          </Tabs>
        </div>
        <div className="">
          <RenderIf condition={state.tabRight < arrayTab.length}>
            <ButtonVariant color="primary" onClick={onClickRight} size="md">
              <HeartIcon />
            </ButtonVariant>
          </RenderIf>
        </div>
      </div>
    </>
  );
};
