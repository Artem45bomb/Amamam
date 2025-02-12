"use client";
import {FC, useMemo} from "react";
import {BtnAction} from "@/components/ui/assets/BtnAction";
import {Props} from "./types";
import Image from "next/image";
import {cn} from "@/utils/style";

export const Order: FC<Props> = ({completed,id,dateCompleted,dateAccepted,products,onClick}) => {

    const datesParse = useMemo(() => {
        const dateAcceptedNew = new Date(dateAccepted);
        const dateCompleteNew = dateCompleted ? new Date(dateCompleted) : undefined;
        return {
            dateAccepted:dateAcceptedNew,
            dateCompleted:dateCompleteNew
        }
    },[dateCompleted,dateAccepted])

    const orderInfo = useMemo(() => ({
        count: products.reduce((prev, e) => prev + e.count, 0), // Общее количество продуктов с учетом их количества
        price: products.reduce((prev, e) => prev + (e.price * e.count), 0), // Общая стоимость с учетом количества
    }), [products]);

    return <button className={"flex items-end gap-[10%] w-full justify-between md:justify-start flex-wrap"} onClick={onClick}>
        <div className={"flex flex-col gap-5"}>
            <div className={"flex gap-3 items-center"}>
                <BtnAction black={completed} disabled={!completed} className={"max-w-40"}>
                    {completed ? "выполнен" : "отмена"}
                </BtnAction>
                <p className={"text-secondary font-gilroy font-normal text-base text-nowrap"}>{id}</p>
            </div>
            <div className={"flex gap-3"}>
                <ViewDay date={datesParse.dateAccepted} type={"accepted"}/>
                <div className={"flex w-40 items-center"}>
                    <div className={"bg-primary w-[5px] h-[5px] rounded-full"}></div>
                    <div className={"flex-1 h-[1px] bg-primary"}></div>
                    <div className={"w-4 aspect-square rounded-full relative"}>
                        <Image style={{objectFit:"cover"}} className={"bg-cover"} fill src={completed ?"/icon/completed-order.svg" : "/icon/decliend-order.svg"} alt={""}/>
                    </div>
                    {completed}
                </div>
                <ViewDay date={datesParse.dateCompleted ?? datesParse.dateAccepted} type={"completed"} className={datesParse.dateCompleted ? "" : "opacity-0"}/>
            </div>
        </div>
        <div className={"flex items-end justify-between w-60"}>
            <div className={"flex flex-col gap-7"}>
                <p>состав / {orderInfo.count} шт</p>
                <div className={"flex overflow-hidden max-w-60 gap-2"}>
                    {products.map(e => <div key={"product-"+e.id} className={"w-16 aspect-square relative"}>
                        <Image fill src={e.image} alt={"product:"+e.id}/>
                    </div>)}
                </div>
            </div>

        </div>
        <div className={"flex flex-col justify-end font-gilroy font-semibold text-right max-w-80"}>
            <p className={"text-base"}>сумма</p>
            <p className={"text-2xl"}>{orderInfo.price} ВYN</p>
        </div>
    </button>
}

function getShortMonthName(month:number) {
    const months = [
        "янв",
        "фев",
        "мар",
        "апр",
        "май",
        "июн",
        "июл",
        "авг",
        "сен",
        "окт",
        "ноя",
        "дек"
    ];
    return months[month - 1] ?? months[0];
}

function ViewDay({date,type,className}:{date:Date,type:"accepted" | "completed",className?:string}) {
    return <div className={cn("font-gilroy text-black font-semibold text-3xl",className)}>
        <h3>{date.getDate()}{" "}{getShortMonthName(date.getMonth())}</h3>
        <p className={"text-sm text-secondary font-normal mt-2.5"}>{type == "accepted" ? "Дата заказа": "Выполнен"}</p>
    </div>
}