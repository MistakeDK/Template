
import { Button } from "@nextui-org/react";
import { ReactNode } from "@tanstack/react-router";

export interface categoryState{
    icon?:ReactNode,
    title:string,
    btnGroup:Array<IbtnGroup>
    id:number,
    url:string
}
export interface IbtnGroup{
    btnName:string,
    icon?:React.ReactElement<typeof Button>,
    info?:object,
    onClick:(evt:React.MouseEvent<HTMLButtonElement>,info:object)=>void
}
export interface categoryItemState{
    iconItem?:ReactNode,
    titleItem:string,
    btnGroupItem:Array<IbtnGroup>
}

export interface tabWrapperState{
    title:string,
    key:string,
}
export interface Icolumn<T> {
    key: string;
    label: string;
    formatter?: (value: any, row: T) => React.ReactNode;
    isFixed?: boolean;
    allowSorting?: boolean;
}