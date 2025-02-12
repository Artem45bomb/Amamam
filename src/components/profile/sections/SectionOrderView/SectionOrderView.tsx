import { Props } from "./types"
import {FC, useMemo} from "react";
import {listOrders} from "@/app/test";
import Image from "next/image";
import {Section} from "@/components/profile/sections/types";
import {cn} from "@/utils/style";
import {BtnAction} from "@/components/ui/assets/BtnAction";
import {Product} from "@/components/profile/sections/SectionOrderView/Product";

function getOrderInfo(orderId: string) {
    return listOrders.find((order) => order.id === orderId)!;
}

export const SectionOrderView:FC<Props> = ({orderId,onChange}) => {
    const {completed,products,discount,address,} = getOrderInfo(orderId);

    const orderInfo = useMemo(() => ({
        count: products.reduce((prev, e) => prev + e.count, 0), // Общее количество продуктов с учетом их количества
        price: products.reduce((prev, e) => prev + (e.price * e.count), 0), // Общая стоимость с учетом количества
        delivery: products.reduce((prev, e) => {
            if(!e.priceOriginal) return prev;
            return  e.priceOriginal - e.price
        }, 0),
    }), [products]);

    return <section className={" w-full pb-24 font-gilroy pr-[13%]"}>
        <div className={"flex flex-col gap-20 w-full max-w-full"}>
            <div className={"gap-7 font-gilroy font-normal flex flex-col items-start text-primary w-full"}>
                <div className={"flex gap-2 mt-2 items-center"}>
                    <button className={"w-6 h-6 relative"} onClick={() => onChange(Section.Form)}>
                        <Image fill src={"/icon/chevron-left.svg"} alt={"back"}/>
                    </button>
                    <h2 className={"text-base"}>мои заказы</h2>
                </div>
                <h2 className={"text-3xl font-semibold"}>{orderId}</h2>
                <div className={"flex w-full items-center"}>
                    <div className={"bg-primary w-[5px] h-[5px] rounded-full"}></div>
                    <div className={"flex-1 h-[1px] bg-primary"}></div>
                    <div className={"w-4 aspect-square rounded-full relative"}>
                        <Image style={{objectFit:"cover"}} className={"bg-cover"} fill src={completed ?"/icon/completed-order.svg" : "/icon/decliend-order.svg"} alt={""}/>
                    </div>
                    {completed}
                </div>
            </div>
            <div className={"gap-7 font-gilroy font-normal flex flex-col items-start text-primary w-full"}>
                <h2 className={"text-3xl mt-2 font-semibold"}>информация о заказе</h2>
                <LiInfo name={"дата доставки"} info={"4 октября, 18:00 - 21:00"}/>
                <LiInfo name={"способ доставки"} info={discount.type === "COURIER" ? "курьерская доставка"  : "самовывоз"}/>
                <LiInfo name={"адрес доставкии"} info={address}/>
            </div>
            <div className={"gap-7 font-gilroy font-normal flex flex-col items-start text-primary w-full"}>
                <h2 className={"text-3xl mt-2 font-semibold"}>сумма заказа</h2>
                <LiInfo name={"продукты"} info={orderInfo.price + " BYN"}/>
                <LiInfo name={"доставка"} info={discount.price ? ""+discount.price : "бесплатно"}/>
                {orderInfo.delivery > 0 && <LiInfo name={"дата доставки"} className={"text-blue-700"} info={`${-1*orderInfo.delivery} BYN`}/>}
            </div>
        </div>
        <p className={"w-full text-end mt-10"}>итого <span className={"font-semibold text-3xl"}>{orderInfo.price} BYN</span></p>
        <div className={"flex gap-8 flex-col mt-20 mb-24"}>
            <h2 className={"text-black text-3xl font-medium mr-auto"}>состав заказа / {orderInfo.count} шт</h2>
            <div className={" flex flex-col gap-8"}>
                {products.map(e => <Product key={e.id+"-product-show"} {...e}/>)}
            </div>
        </div>
        <BtnAction black className={"text-xl font-bold"}>
            повторить заказ
        </BtnAction>
    </section>
}

function LiInfo({name,info,className,p}:{name: string,info:string,className?:string,p?:string}) {
    return <div className={cn("flex justify-between w-full font-gilroy text-base font-normal items-end gap-1",className)} >
        <p>{name}</p>
        <div className={"h-[1px] flex-1 border border-b-black border-dashed mb-[1px]"}></div>
        <p className={cn("max-w-full",p)}>{info}</p>
    </div>
}