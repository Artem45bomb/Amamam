import {Props} from "./type"
import {FC} from "react";
import {cn} from "@/utils/style";


export const BtnIcon:FC<Props> = ({className,children,onClick}) => {
    const handleClick = () => {
        onClick?.()
    }

    return <button onClick={handleClick} className={cn("h-7 w-7 relative",className)}>
        {children}
    </button>
}
