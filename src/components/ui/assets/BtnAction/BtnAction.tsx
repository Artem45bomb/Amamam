import { Props } from './types'
import {FC} from "react";
import {cn} from "@/utils/style";

export const BtnAction:FC<Props> = ({children,className,onClick,black = false,...props}) => {
    return <button
        {...props}
        onClick={onClick}
        className={cn(
            "border border-blue-700 flex items-center justify-center text-blue-700 text-center w-full h-12",
            "transition-all duration-200 ease-in-out",
            "rounded-md",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
            black ? 
                "bg-blue-700 text-white hover:bg-blue-800 active:bg-blue-900" : 
                "bg-gray-100 hover:bg-gray-200 active:bg-gray-300 disabled:text-secondary disabled:border-secondary disabled:bg-transparent disabled:hover:bg-transparent disabled:active:bg-transparent",
            className
        )}
    >
        {children}
    </button>
}