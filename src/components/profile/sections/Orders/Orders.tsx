"use client";
import {Props} from "./types";
import {FC, useMemo} from "react";
import {listOrders} from "@/app/test";
import {Order} from "@/components/profile/sections/Orders/Order";
import {Section} from "@/components/profile/sections/types";
import Image from "next/image";

export const Orders:FC<Props> = ({onChange,onChangeOrderView}) => {

    return <section className="flex-1 flex-col flex gap-20 items-start pr-[13%]">

        <div className={"flex flex-col gap-10 items-start w-full"}>
            <div className={"flex gap-2 items-center"}>
                <button className={"w-6 h-6 relative"} onClick={() => onChange(Section.Form)}>
                    <Image fill src={"/icon/chevron-left.svg"} alt={"back"}/>
                </button>
                <h2 className={"font-bold font-nauryzRedKeds text-3xl text-blue-700"}>заказы</h2>
            </div>
            <div className={"w-full h-[1px] bg-gray-300 relative"}>
                <div className={"h-[3px] bg-blue-700 w-1/5 rounded absolute top-1/2 -translate-y-1/2 left-0"}></div>
            </div>
        </div>

        <div className="flex-1 w-full flex flex-wrap max-h-full overflow-auto gap-14">
            {listOrders.map(e => <Order key={e.id + "-order"} onClick={() => onChangeOrderView(e.id)} {...e} />)}
        </div>
    </section>
}