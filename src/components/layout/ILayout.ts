import { TabWrapper } from './TabWrapper';
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
export interface viewState{
    categoryOpen:Array<number>,
    removeId:(index:number)=>void,
    pushId:(index:number)=>void,
    removeAll:()=>void
}
export interface tabWrapperState{
    title:string,
    key:string
}
