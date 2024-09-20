import { CircularProgress, Input } from "@nextui-org/react";
import { State } from "../../../stores/my-store";

interface IHomeContentProps {
  children?: React.ReactNode;
  stateA: string;
  my2Store: State;
}

export const HomeContent = ({ stateA, my2Store }: IHomeContentProps) => {
  const myStore = useMyStore();
  return (
    <>
      <CircularProgress aria-label="Loading..." />
      <div>{stateA}</div>
      <Input
        type="text"
        label="Street"
        defaultValue={myStore.info.home.address.main.street}
        onChange={(evt) => {
          myStore.updateStreet(evt.target.value);
          my2Store.updateStreet(evt.target.value);
        }}
      />
      <p>street value: {myStore.info.home.address.main.street}</p>
      <p>2 street value: {my2Store.info.home.address.main.street}</p>
      <Input
        type="text"
        label="Ward"
        defaultValue={myStore.info.home.address.main.ward}
        onChange={(evt) => {
          myStore.updateWard(evt.target.value);
          my2Store.updateWard(evt.target.value);
        }}
      />
      <p>ward value: {myStore.info.home.address.main.ward}</p>
      <p>2 ward value: {my2Store.info.home.address.main.ward}</p>
    </>
  );
};
