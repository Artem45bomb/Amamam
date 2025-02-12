import {FC} from "react";
import Image from "next/image";
import {Props} from "./types";

export const Product :FC<Props>= ({image,name,count,weight,priceOriginal,price}) => {
    return <div className={"flex items-end h-40 justify-between"}>
        <div className={"flex items-center gap-10 h-full"}>
            <div className={"h-full aspect-square relative"}>
                <Image style={{objectFit:"cover"}} fill className={"absolute"} src={image} alt={name}/>
            </div>
            <div className={"font-gilroy font-medium text-base text-black flex flex-col gap-3.5"}>
                <p>{name}</p>
                <p className={"font-gilroy text-sm text-secondary"}>{count} {" шт."} / {weight} {" г."}</p>
            </div>
        </div>
        <div className={"flex items-end h-full gap-8 font-gilroy font-normal text-xl"}>
            {priceOriginal && <p className={"text-[Grey] text-xl font-bold line-through"}>{priceOriginal} BYN</p>}
            <div className={"flex-col flex gap-2"}>
                {priceOriginal && <p className={"ml-auto text-[0.6rem] text-secondary"}>скидка {priceOriginal - price} BYN</p>}
                <p className={"text-xl text-black font-bold"} >{price} BYN</p>
            </div>
        </div>
    </div>
}