"use client";
import {FC, PropsWithChildren} from "react";
import {Header} from "@/components/template/MainTemplate/Header";
import {Footer} from "./Footer";


export const MainTemplate:FC<PropsWithChildren> = ({children}) => {
    return <main className={"h-full w-full flex flex-col bg-background"}>
        <Header/>
        <div className={"flex-1 w-full"}>
            {children}
        </div>
        <Footer/>
    </main>
}