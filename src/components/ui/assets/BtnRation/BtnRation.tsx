import { Props } from './types'
import {FC} from "react";
import {cn} from "@/utils/style";

export const BtnRation:FC<Props> = ({className,onClick,active,...props}) => {
    return  <button 
        onClick={onClick} 
        className={cn(
            "border border-gray-500 rounded-full flex-col flex items-center justify-center w-6 h-6",
            "transition-all duration-200 ease-in-out",
            "hover:border-blue-500 hover:scale-110",
            "active:scale-95 active:border-blue-600",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
            active ? "border-blue-700" : "",
            className
        )} 
        {...props}
    >
        { active && <div className={"w-2 h-2 rounded-full bg-blue-700"}></div>}
    </button>
}