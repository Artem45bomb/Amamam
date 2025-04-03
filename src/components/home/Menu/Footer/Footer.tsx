import {FC} from "react";
import {Products} from "@/components/home/Menu/Products";
import {ShelfProducts} from "@/components/home/slider/ShelfProducts";
import {items} from "./types";

export const Footer:FC = () => {
    return <div className={'flex flex-col gap-7'}>
        <div
            className={"flex flex-col gap-3 sm:flex-row w-full justify-between items-center text-primary font-bold text-xl leading-5 font-nauryzRedKeds px-10 sm:px-20 flex-1"}>
            <p>BESTSELLERS</p>
            <button>СМОТЕРТЬ ВСЕ {">"}</button>
        </div>
        <Products/>
        <div className={'px-10 sm:px-20 pt-28 pb-32 flex flex-col gap-7'} >
            <h2 className={'text-primary text-xl font-bold'}>ПОЛКА С ПРОДУКТАМИ</h2>
            <ShelfProducts className={'h-142'} items={items}/>
        </div>
    </div>

}