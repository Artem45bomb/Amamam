"use client";
import Image from "next/image";
import {FC} from "react";
import {cn} from "@/utils/style";
import {useRouter} from "next/navigation";


export const BtnLogo:FC<Stylable> = ({className}) => {
    const router = useRouter()

    const handleClick = () => {
        router.push("/")
    }

    return <button 
        onClick={handleClick} 
        className={cn(
            "h-6 w-32 relative",
            "transition-all duration-200 ease-in-out",
            "hover:opacity-80 active:opacity-90",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
            "rounded-md",
            className
        )}
    >
        <Image fill src={'/icon/logo.svg'} alt={"logo icon"}/>
    </button>
}