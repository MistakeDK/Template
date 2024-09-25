import { produce } from "immer";
import { create } from "zustand";

export interface State {
  name: { first: string; middle: string; last: string };
  age: number;
  info: {
    school: { name: string; isGraduated: boolean };
    home: {
      hasPet: boolean;
      isApartment: boolean;
      address: {
        main: { street: string; ward: string; district: string; city: string };
        more: { name: string; block: string };
      };
    };
  };
  setAge: (age: number) => void;
  updateStreet: (streetName: string) => void;
  updateWard: (ward: string) => void;
}

export const useMyStore = create<State>((set) => ({
  // States
  name: { first: "", middle: "", last: "" },
  age: 0,
  info: {
    school: { name: "", isGraduated: false },
    home: {
      hasPet: false,
      isApartment: false,
      address: { main: { street: "", ward: "", district: "", city: "" }, more: { name: "", block: "" } }
    }
  },
  // Actions
  setAge: (age: number) => set({ age: age }),
  updateStreet: (streetName: string) => {
    set(
      produce((state: State) => {
        state.info.home.address.main.street = streetName;
      })
    );
  },
  updateWard: (ward: string) => {
    set(
      produce((state: State) => {
        state.info.home.address.main.ward = ward;
      })
    );
  }
}));
export interface tab{
  key:string,
  title:string
}
interface tabState{
  tab:Array<tab>
  add:(tab:tab)=>void
}


export const useTabStore=create<tabState>((set)=>({
  tab:[{
    title: "category",
    key: "category"
  },
  {
    title: "Example",
    key: "example"
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
  }],
  
  add:(newTab:tab)=>set(produce((state)=>{
    state.tab.push(newTab)
  }))
}))