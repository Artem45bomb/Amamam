import {FC} from "react";
import {Products} from "@/components/home/Menu/Products";
import {ShelfProducts} from "@/components/home/slider/ShelfProducts";
import {items} from "./types";

export const Footer:FC = () => {
    return <div className={'flex flex-col gap-7'}>
        <div className="flex flex-col gap-3 sm:flex-row w-full justify-between items-center text-primary font-bold text-xl leading-5 font-nauryzRedKeds px-4 sm:px-10 md:px-20 flex-1">
            <p className="">BESTSELLERS</p>
            <button 
                className="
                flex items-center gap-1
                transition-all duration-300
                hover:gap-2 hover:text-blue-600
                active:scale-95
                
                rounded-md px-2 py-1
                "
            >
                СМОТРЕТЬ ВСЕ 
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">{" >"}</span>
            </button>
        </div>
        <Products/>
        <div className={'px-10 sm:px-20 pt-28 pb-32 flex flex-col gap-7'} >
            <h2 className={'text-primary text-xl font-bold'}>ПОЛКА С ПРОДУКТАМИ</h2>
            <ShelfProducts className={'h-142'} items={items}/>
        </div>
    </div>

}