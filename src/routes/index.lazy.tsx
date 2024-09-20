import { Button, Input } from "@nextui-org/react";
import { produce } from "immer";
import { create } from "zustand";
import { State } from "../stores/my-store";

export const Route = createLazyFileRoute("/")({
  component: Index
});

const use2Store = create<State>((set) => ({
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

function Index() {
  const myStore = useMyStore();
  const my2Store = use2Store();
  useEffect(() => {
    console.log("page refresh");
  }, []);
  return (
    <DefaultLayout>
      <div className="p-2">
        <h3>Welcome Home!</h3>
        <Button color="warning">Test</Button>
        <div className="flex flex-col">
          <div className=" flex flex-col w-[300px]">
            <Input isReadOnly type="text" label="Street" value={myStore.info.home.address.main.street} />
            <Input isReadOnly type="text" label="2Street" value={my2Store.info.home.address.main.street} />
            <Input isReadOnly type="text" label="Ward" value={myStore.info.home.address.main.ward} />
            <Input isReadOnly type="text" label="2Ward" value={my2Store.info.home.address.main.ward} />
          </div>
        </div>
        <PagesIndexHomeContent stateA="ss" my2Store={my2Store} />
      </div>
    </DefaultLayout>
  );
}
