
import Image from "next/image";
import {Props} from "./types";
import {FC} from "react";
import {Section} from "@/components/profile/sections/types";
import ItemRecomendations from "@/components/home/busket/ItemRecomendations";
import {list1} from "@/app/test";

export const Wishlist:FC<Props> = ({onChange}) => {

    return <section className="flex-1 flex-col flex gap-20 items-start">
        <div className={"flex gap-2 items-center"}>
            <button className={"w-6 h-6 relative"} onClick={() => onChange(Section.Form)}>
                <Image fill src={"/icon/chevron-left.svg"} alt={"back"}/>
            </button>
            <h2 className={"font-bold font-nauryzRedKeds text-3xl text-blue-700"}>WISHLIST</h2>
        </div>
        <div className="flex-1 w-full flex flex-wrap max-h-full overflow-auto gap-14">
            {list1.map(e => <ItemRecomendations key={e.id+"-item"} {...e} className={"w-40"}/>)}
        </div>
    </section>
}