import {FC} from "react";
import {Props} from "./types"
import {cn} from "@/utils/style";
import {BtnIcon} from "@/components/ui/assets/BtnIcon";
import Image from "next/image";

export const Product:FC<Props> = ({className,backgroundSrc,name,price}) => {
    return <div style={{backgroundImage:`url(${backgroundSrc})`}} className={cn('w-full h-full flex-1 flex flex-col justify-between p-5 bg-cover',className)}>
        <BtnIcon className={'ml-auto'} >
            <Image fill src={"/icon/heart-product.svg"} alt={"like"}/>
        </BtnIcon>
        <div className={"min-w-44 text-blue-700 font-semibold font-gilroy text-sm"}>
            <p>{name}<br/>{price} BYN</p>
        </div>
    </div>
}