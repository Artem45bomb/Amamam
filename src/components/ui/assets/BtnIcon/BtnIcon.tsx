import {Props} from "./type"
import {FC} from "react";
import {cn} from "@/utils/style";


export const BtnIcon:FC<Props> = ({className,children,onClick}) => {
    const handleClick = () => {
        onClick?.()
    }

    return <button 
        onClick={handleClick} 
        className={cn(
            "h-7 w-7 relative",
            "transition-all duration-200 ease-in-out",
            "hover:scale-110 active:scale-95",
            "hover:bg-gray-100 active:bg-gray-200",
            "rounded-lg",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
            className
        )}
    >
        {children}
    </button>
}
