import { Input } from "@nextui-org/react";
import React, { ChangeEvent } from "react";
import { create } from "zustand";
import { SearchIcon } from "../../assets/SearchIcon";

interface ISearchState {
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
interface prop {
  classInput: string;
  classWrapper: string;
  isHaveClearButton: boolean;
}
const useStoreSearch = create<ISearchState>((set) => ({
  search: "",
  onChange: (e) => set({ search: e.target.value })
}));
export const SearchInput = ({ classWrapper, classInput }: prop) => {
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
          input: `${classInput}`,
          inputWrapper: `${classWrapper} h-[18px]`
        }}
        disableAnimation
        className="my-2"
        label=""
        type="text"
        variant="flat"
        radius="md"
        size="sm"
        onChange={(e) => onChange(e)}
        onKeyDown={handleEnter}
        placeholder="Search"
        endContent={<SearchIcon color="fill-red-300" />}
      />
    </>
  );
};
