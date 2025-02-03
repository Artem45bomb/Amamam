import { Props } from './types'
import {FC} from "react";
import {cn} from "@/utils/style";

export const BtnAction:FC<Props> = ({children,className,onClick}) => {
    return <button onClick={onClick} className={cn("border bg-gray-100 border-blue-700 flex items-center justify-center text-blue-700 text-center w-full h-12",className)}>
        {children}
    </button>
}