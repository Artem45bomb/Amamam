import {FC} from "react";
import {BtnLogo} from "@/components/ui/assets/BtnLogo/BtnLogo";
import {Action} from "@/components/template/MainTemplate/Header/Action";
import Link from "next/link";


export const Header:FC = () => {
    return <header className={"flex px-5 md:px-10 xl:px-20 justify-between py-9 items-center bg-white w-full"}>
        <BtnLogo/>
        <ul className={"flex gap-6 md:gap-10 xl:gap-16 primary items-center text-black"}>
            <Link href={"/catalog"}>Каталог</Link>
            <Link href={"/news"}>Новинки</Link>
            <Link href={"/about"}>О нас</Link>
            <Link href={"/payment-and-delivery"}>Доставка</Link>
        </ul>
       <Action/>
    </header>
}