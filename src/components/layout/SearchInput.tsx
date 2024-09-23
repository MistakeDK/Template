import { Input } from "@nextui-org/react";
import React, { ChangeEvent } from "react";
import { create } from "zustand";

interface ISearchState {
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const useStoreSearch = create<ISearchState>((set) => ({
  search: "",
  onChange: (e) => set({ search: e.target.value })
}));
export const SearchInput = () => {
  const value = useStoreSearch((state) => state.search);
  const onChange = useStoreSearch((state) => state.onChange);
  const handleSearch = () => {
    alert(value);
  };
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <Input
        classNames={{
          inputWrapper: ""
        }}
        className="my-2"
        label="Search"
        type="text"
        variant="faded"
        radius="md"
        size="sm"
        isClearable
        onChange={(e) => onChange(e)}
        onKeyDown={handleEnter}
      />
    </>
  );
};
