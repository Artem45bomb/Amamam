import {FC} from "react";
import {BtnIcon} from "@/components/ui/assets/BtnIcon";
import Link from "next/link";
import Image from "next/image";
import {Icon} from "@/components/ui/assets/Icon/Icon";
import {BtnAction} from "@/components/ui/assets/BtnAction";


export const Footer: FC = () => {
    return <footer className={'px-20 flex flex-col bg-white border-t border-secondary'}>
        <div className={'flex-col flex w-full border-b border-gray-400 pt-32 pb-10'}>
            <div className={" flex flex-wrap justify-between gap-10"}>
                <div className={'flex flex-col'}>
                    <BtnIcon className={'w-72 h-10 ml-auto'}>
                        <Image src={"/icon/logo-black.svg"} alt={"logo icon"} fill/>
                    </BtnIcon>
                    <div className={'font-gilroy mt-16'}>
                        <p className={'font-semibold text-3xl text-black'}>+375 29 000 00 00</p>
                        <p className={'font-normal text-base text-gray-300 mt-2 mb-4'}>call-центр</p>
                        <div className={'flex gap-6 text-primary font-medium text-base items-center'}>
                            <Link href={""} className={'flex items-center gap-2'}>
                                <Icon src={"/icon/whatsap.svg"} alt={"whatsap icon"}/>
                                <span>WhatsApp</span>
                            </Link>
                            <Link href={"/icon/tg.svg"} className={'flex items-center gap-2'}>
                                <Icon className={'w-6 h-6'} src={"/icon/whatsap.svg"} alt={"whatsap icon"}/>
                                <span>Telegram</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col font-gilroy font-medium text-2xl gap-5'}>
                    <h2 className={'text-black'}>Покупателям</h2>
                    <ul className={'flex flex-col gap-5 text-base text-primary font-light'}>
                        <Link href={"/delivery"}>Доставка</Link>
                        <Link href={"/refund"}>Возврат</Link>
                        <Link href={"/catalog"}>Каталог</Link>
                        <Link href={"/questions"}>Вопросы и ответы</Link>
                        <Link href={"/i"}>Инстаграм</Link>
                        <Link href={"/reviews"}>Отзывы</Link>
                    </ul>
                </div>
                <div className={'flex flex-col font-gilroy font-medium text-2xl gap-5 '}>
                    <h2 className={'text-primary text-nowrap text-black'}>О компании</h2>
                    <ul className={'flex flex-col gap-5 text-base text-primary font-light'}>
                        <Link href={"/career"}>Карьера</Link>
                        <Link href={"/history"}>Истории</Link>
                        <Link href={"/contacts"}>Контакты</Link>
                    </ul>
                </div>
                <div className={'max-w-72 font-gilroy font-normal text-base text-black'}>
                    <p>Наши подписчики в курсе всех новинок и специальных предложений</p>
                    <BtnAction className={'mt-8 mb-11'}>
                        Подписаться
                    </BtnAction>
                    <ul className={'flex justify-between gap-4'}>
                        <li>Instagram</li>
                        <li>ВКонтакте</li>
                        <li>Telegram</li>
                    </ul>
                </div>
            </div>
            <div className={'flex justify-between mt-24'}>
                <div className={'font-gilroy'}>
                    <p className={'font-semibold text-3xl text-black'}>+375 29 000 00 00</p>
                    <p className={'font-normal text-base text-gray-300 mt-2'}>Минск, ул. Кальварийская, 21, 1
                        этаж</p>
                </div>
                <div className={'flex flex-wrap items-center pt-16 gap-12 items-center'}>
                    <Link href={"/"}>
                        <Icon className={'min-w-52 min-h-16'} src={"/icon/logo_webpay.svg"} alt={"webpay"}/>
                    </Link>
                    <Link href={"/"}>
                        <Icon className={'min-w-16 min-h-5'} src={"/icon/logo_visa.svg"} alt={"webpay"}/>
                    </Link>
                    <Link href={"/"}>
                        <Icon className={'min-w-20 min-h-20'} src={"/icon/verify_by_visa.svg"} alt={"webpay"}/>
                    </Link>
                    <Link href={"/"}>
                        <Icon className={'min-w-24 min-h-9'} src={"/icon/logo_mastercard.svg"} alt={"webpay"}/>
                    </Link>
                    <Link href={"/"}>
                        <Icon className={'min-w-16 min-h-16'} src={"/icon/belcart.svg"} alt={"webpay"}/>
                    </Link>
                    <Link href={"/"}>
                        <Icon className={'min-w-28 min-h-16'} src={"/icon/verify_by_master.svg"} alt={"webpay"}/>
                    </Link>
                </div>
            </div>
        </div>
        <div className={'font-gilroy text-primary font-normal text-base flex justify-between items-end pt-20 pb-24'}>
            <p>ООО «Презент Симпл», УНП 193590358, регистрация №193590358 от 15.09.2021,<br/>
                Мингорисполком, юр. адрес: Республика Беларусь, г.Минск, ул.Кальварийская,<br/>
                21-114. Интернет-магазин present-simple.by зарегистрирован в Торговом реестре<br/>
                №489673 от 13.08.2020.</p>
            <p>2024 amamam. Все права защищены</p>
        </div>
    </footer>
}