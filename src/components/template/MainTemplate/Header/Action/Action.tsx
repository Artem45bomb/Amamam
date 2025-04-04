import { BtnIcon } from "@/components/ui/assets/BtnIcon";
import Image from "next/image";
import { UserAction } from "@/components/template/MainTemplate/Header/Action/User";
import Link from "next/link";

interface ActionProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export const Action: React.FC<ActionProps> = ({ isOpen, setIsOpen }) => {
    return (
        <div className="flex gap-5 items-center">
            {/* Показываем только search icon при ширине < md */}
            <BtnIcon>
                <Image src="/icon/search.svg" fill alt="search icon" />
            </BtnIcon>

            {/* Прячем при md */}
            <div className="hidden md:flex gap-5 items-center">
                <BtnIcon>
                    <Image src="/icon/heart.svg" fill alt="heart icon" />
                </BtnIcon>
                <UserAction />
                <BtnIcon>
                    <Image src="/icon/shopping-cart.svg" fill alt="shopping-cart icon" />
                </BtnIcon>
            </div>

            {/* Бургер-меню */}
            <div className="md:hidden flex items-center text-primary">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-7 h-7 relative focus:outline-none"
                    aria-label="Меню"
                >
                    <span className={`block absolute h-0.5 w-7 bg-current transform transition duration-75 ease-in-out ${
                        isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                    }`}></span>
                    <span className={`block absolute h-0.5 w-7 bg-current transform transition duration-75 ease-in-out ${
                        isOpen ? "opacity-0" : "opacity-100"
                    }`}></span>
                    <span className={`block absolute h-0.5 w-7 bg-current transform transition duration-75 ease-in-out ${
                        isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                    }`}></span>
                </button>
            </div>

            {/* Выпадающее меню */}
            {isOpen && (
                <div className="absolute top-full right-0 w-full bg-white shadow-lg p-5 flex flex-col gap-4 items-center z-10 text-primary text-lg">
                    <Link href="/catalog">Каталог</Link>
                    <Link href="/news">Новинки</Link>
                    <Link href="/about">О нас</Link>
                    <Link href="/payment-and-delivery">Доставка</Link>
                    <BtnIcon>
                        <Image src="/icon/heart.svg" fill alt="heart icon" />
                    </BtnIcon>
                    <UserAction />
                    <BtnIcon>
                        <Image src="/icon/shopping-cart.svg" fill alt="shopping-cart icon" />
                    </BtnIcon>
                </div>
            )}
        </div>
    );
};
