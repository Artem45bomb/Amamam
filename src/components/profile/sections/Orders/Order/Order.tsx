"use client";
import {FC, useMemo} from "react";
import {BtnAction} from "@/components/ui/assets/BtnAction";
import {Props} from "./types";
import Image from "next/image";

export const Order: FC<Props> = ({completed,id,dateCompleted,dateAccepted,products}) => {

    const datesParse = useMemo(() => {
        const dateAcceptedNew = new Date(dateAccepted);
        const dateCompleteNew = dateCompleted ? new Date(dateCompleted) : undefined;
        return {
            dateAccepted:dateAcceptedNew,
            dateCompleted:dateCompleteNew
        }
    },[dateCompleted,dateAccepted])

    const orderInfo = useMemo(() => ({
        count:products.length,
        price:products.reduce((prev,e) => prev+e.price,0)
    }),[products])

    return <div className={"flex items-center gap-20"}>
        <div className={"flex flex-col gap-5"}>
            <div className={"flex gap-3 items-center"}>
                <BtnAction black={completed} disabled={!completed} className={"w-40"}>
                    {completed ? "выполнен" : "отмена"}
                </BtnAction>
                <p className={"text-secondary font-gilroy font-normal text-base"}>{id}</p>
            </div>
            <div className={"flex gap-3"}>
                <ViewDay date={datesParse.dateAccepted} type={"accepted"}/>
                <div className={"flex w-40 items-center"}>
                    <div className={"bg-primary w-[5px] h-[5px] rounded-full"}></div>
                    <div className={"flex-1 h-[1px] bg-primary"}></div>
                    <div className={"w-4 aspect-square rounded-full relative"}>
                        <Image fill src={completed ?"/icon/completed-order.svg" : "/icon/decliend-order.svg"} alt={""}/>
                    </div>
                    {completed}
                </div>
                {datesParse.dateCompleted && <ViewDay date={datesParse.dateCompleted} type={"completed"}/>}
            </div>
        </div>
        <div className={"flex items-end justify-between"}>
            <div className={"flex flex-col gap-7"}>
                <p>состав / {orderInfo.count} шт</p>
                <div className={"flex overflow-hidden max-w-60 gap-2"}>
                    {products.map(e => <div key={"product-"+e.id} className={"w-16 aspect-square relative"}>
                        <Image fill src={e.image} alt={"product:"+e.id}/>
                    </div>)}
                </div>
            </div>
            <div className={"flex flex-col justify-end font-gilroy font-semibold text-right max-w-80"}>
                <p className={"text-base"}>сумма</p>
                <p className={"text-2xl"}>{orderInfo.price} ВYN</p>
            </div>
        </div>

    </div>
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

// Пример использования:
console.log(getShortMonthName(10)); // "окт"
console.log(getShortMonthName(1));  // "янв"
console.log(getShortMonthName(13)); // "Некорректный номер месяца"

function ViewDay({date,type}:{date:Date,type:"accepted" | "completed"}) {
    return <div className={"font-gilroy text-black font-semibold text-3xl"}>
        <h3>{date.getDate()}{" "}{getShortMonthName(date.getMonth())}</h3>
        <p className={"text-sm text-secondary font-normal mt-2.5"}>{type == "accepted" ? "Дата заказа": "Выполнен"}</p>
    </div>
}