import {Props} from './types'
import {FC} from "react";
import Image from "next/image";
import {cn} from "@/utils/style";


export const Icon: FC<Props> = ({classNameImage, className, ...props}) => {
    return <div className={cn("relative w-6 h-6",className)}>
        <Image fill {...props} className={classNameImage} alt={props.alt ? props.alt : ""}/>
    </div>
}