import { Props } from './types'
import {FC} from "react";
import {cn} from "@/utils/style";

export const BtnRation:FC<Props> = ({className,onClick,active,...props}) => {
    return  <button onClick={onClick} className={cn("border  border-gray-500 rounded-full flex-col flex items-center justify-center w-6 h-6",active ? "border-blue-700" : "",className)} {...props} >
        { active && <div className={"w-2 h-2 rounded-full bg-blue-700"}></div>}
    </button>
}