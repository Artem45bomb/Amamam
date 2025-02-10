import Image from "next/image";
import {Props} from "./types";
import {FC} from "react";
import {Section} from "@/components/profile/sections/types";
import {Order} from "@/components/profile/sections/Orders/Order";

export const Wishlist:FC<Props> = ({onChange}) => {
    return <section className="flex-1 flex-col flex gap-20 items-start">
        <div className={"flex gap-2 items-center"}>
            <button className={"w-6 h-6 relative"} onClick={() => onChange(Section.Form)}>
                <Image fill src={"/icon/chevron-left.svg"} alt={"back"}/>
            </button>
            <h2 className={"font-bold font-nauryzRedKeds text-3xl text-blue-700"}>WISHLIST</h2>
        </div>
        <div className="flex-1 w-full">
            <Order id={"IB-001684749"} completed={true} dateAccepted={new Date().toISOString()} dateCompleted={new Date().toISOString()} products={[{
                id:"",
                price:10,
                image:"/delivery.jpg"
            }]}/>
        </div>
    </section>
}