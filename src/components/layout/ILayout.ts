import { Button } from "@nextui-org/react";
import { ReactNode } from "@tanstack/react-router";
import React from "react";

export interface categoryState{
    icon?:ReactNode,
    title:string,
    btnGroup:Array<React.ReactElement<typeof Button>>
    id:number,
    url:string
}
export interface categoryItemState{
    icon?:ReactNode,
    title:string,
    btnGroup:Array<React.ReactElement<typeof Button>>
}
export interface viewState{
    categoryOpen:Array<number>,
    removeId:(index:number)=>void,
    pushId:(index:number)=>void,
    removeAll:()=>void
}
