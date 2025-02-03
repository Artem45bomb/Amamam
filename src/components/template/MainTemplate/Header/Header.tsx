import {FC} from "react";
import {BtnLogo} from "@/components/ui/assets/BtnLogo/BtnLogo";
import {Action} from "@/components/template/MainTemplate/Header/Action";
import Link from "next/link";


export const Header:FC = () => {
    return <header className={"flex px-20 justify-between py-9 items-center bg-white w-full"} >
        <BtnLogo/>
        <ul className={"flex gap-16 primary items-center text-black"}>
            <Link href={"/catalog"}>Каталог</Link>
            <Link href={"/news"}>Новинки</Link>
            <Link href={"/about-us"}>О нас</Link>
            <Link href={"/delivery"}>Доставка</Link>
        </ul>
       <Action/>
    </header>
}