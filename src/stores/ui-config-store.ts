import { produce } from "immer";
import { create } from "zustand";

interface IBgImg {
  name: string;
  path: string;
}

interface IBackgroundImgList {
  [key: string]: { name: string; path: string };
}
interface ISetting {
  defaultBgImg: IBgImg;
  testPageBgImg: IBgImg;
}

export interface IUIConfigStore {
  bgList: IBackgroundImgList;
  setting: ISetting;
  //
  changeBg: (bgImgInfo: IBgImg) => void;
}

const defaultBgList: IBackgroundImgList = {
  "bg-1": { name: "Image 1", path: "./src/assets/background/background-1.jpg" },
  "bg-2": { name: "Image 2", path: "./src/assets/background/background-2.png" },
  "bg-3": { name: "Image 3", path: "./src/assets/background/background-3.jpg" },
  "bg-4": { name: "Image 4", path: "./src/assets/background/background-4.jpg" },
  "bg-5": { name: "Image 5", path: "./src/assets/background/background-5.jpg" },
  "bg-6": { name: "Image 6", path: "./src/assets/background/background-6.webp" },
  "bg-7": { name: "Image 7", path: "./src/assets/background/background-7.jpg" },
  "bg-8": { name: "Image 8", path: "./src/assets/background/background-8.webp" },
  "bg-9": { name: "Image 9", path: "./src/assets/background/background-9.jpg" },
  "bg-10": { name: "Image 10", path: "./src/assets/background/background-10.jpg" },
  "bg-11": { name: "Image 11", path: "./src/assets/background/background-11.jpg" },
  "bg-12": { name: "Image 12", path: "./src/assets/background/background-12.webp" },
  "animated-1": { name: "Animated Img 1", path: "./src/assets/background/animated-bg-1.gif" },
  "animated-2": { name: "Animated Img 2", path: "./src/assets/background/animated-bg-2.gif" },
  "animated-3": { name: "Animated Img 3", path: "./src/assets/background/animated-bg-3.webp" }
};

export const useUIConfigStore = create<IUIConfigStore>((set) => ({
  // States
  bgList: { ...defaultBgList },
  setting: { defaultBgImg: defaultBgList["bg-12"], testPageBgImg: defaultBgList["bg-5"] },
  // Actions
  changeBg: (bgImgInfo) => {
    set(
      produce((state: IUIConfigStore) => {
        state.setting.defaultBgImg = bgImgInfo;
      })
    );
  }
}));
