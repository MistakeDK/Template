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
    icon?:ReactNode,
    info?:string
    onClick:(evt:React.MouseEvent<HTMLButtonElement>,info:string)=>void
}
export interface categoryItemState{
    iconItem?:ReactNode,
    titleItem:string,
    btnGroupItem:Array<React.ReactElement<typeof Button>>
}
export interface viewState{
    categoryOpen:Array<number>,
    removeId:(index:number)=>void,
    pushId:(index:number)=>void,
    removeAll:()=>void
}
