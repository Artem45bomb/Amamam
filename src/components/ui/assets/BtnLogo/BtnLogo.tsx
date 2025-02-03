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

    return <button onClick={handleClick} className={cn("h-6 w-32 relative",className)}>
        <Image fill src={'/icon/logo.svg'} alt={"logo icon"}/>
    </button>
}