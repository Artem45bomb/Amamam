import { Props } from './types'
import {FC} from "react";
import {cn} from "@/utils/style";

export const BtnAction:FC<Props> = ({children,className,onClick,black = false,...props}) => {
    return <button
        {...props}
        onClick={onClick}
        className={
        cn("border  border-blue-700 flex items-center justify-center text-blue-700 text-center w-full h-12",black ?"bg-blue-700 text-white" : "bg-gray-100 disabled:text-secondary disabled:border-secondary disabled:bg-transparent",className)
    } >
        {children}
    </button>
}