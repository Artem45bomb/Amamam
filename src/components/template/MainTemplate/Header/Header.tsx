import { FC, useState } from "react";
import { BtnLogo } from "@/components/ui/assets/BtnLogo/BtnLogo";
import { Action } from "@/components/template/MainTemplate/Header/Action";
import Link from "next/link";

export const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex px-5 md:px-10 xl:px-20 justify-between py-9 items-center bg-white w-full relative">
            <BtnLogo />
            {/* Навигация скрывается при md */}
            <ul className="hidden md:flex gap-6 md:gap-10 xl:gap-16 primary items-center text-black">
                <Link href="/catalog">Каталог</Link>
                <Link href="/news">Новинки</Link>
                <Link href="/about">О нас</Link>
                <Link href="/payment-and-delivery">Доставка</Link>
            </ul>
            <Action isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    );
};
