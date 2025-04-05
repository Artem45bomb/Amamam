"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import Link from "next/link";
import React from 'react';
import YandexMap from '@/components/YandexMap';

export default function Contacts(){
    const router = useRouter();

    const handleBack = () => {
        router.back()
    }

    return <div style={{backgroundImage:`url("/png/bg-product.png")`,backgroundRepeat:'no-repeat'}} className={"bg-cover pt-4 md:pt-10"}>
        <div className={"w-full px-4 md:px-8 lg:px-20"} >
            <button className={"relative w-6 h-6"} onClick={handleBack}>
                <Image fill src={"/icon/chevron-left.svg"} alt={"back"}/>
            </button>
            <div className={"px-4 md:px-8 lg:px-40 flex flex-col gap-10 md:gap-16 lg:gap-20 pt-8 md:pt-10 lg:pt-14 pb-12 md:pb-16 lg:pb-24"}>
                <div className={"flex flex-col gap-4 md:gap-6 font-gilroy"}>
                    <h2 className={"font-semibold text-2xl md:text-3xl lg:text-4xl text-primary"}>
                        КОНТАКТЫ
                    </h2>
                    <p className={"font-normal text-secondary text-xs md:text-sm"} >для связи с нами Вы можете воспользоваться
                        следующими способами</p>
                </div>
                <div className={"flex flex-col gap-4 md:gap-6 font-gilroy border-b-[0.5px] border-neutral-700 pb-6 md:pb-8 lg:pb-10"}>
                    <h2 className={"font-semibold text-xl md:text-2xl lg:text-4xl text-primary"}>
                        Минск, пр. Независимости, 88, 1 этаж, пом. 760
                    </h2>
                    <p className={"font-normal text-secondary text-xs md:text-sm"} >всегда ждем вас</p>
                    <button className={"bg-blue-700 text-center text-white font-bold text-sm md:text-base w-40 md:w-48 lg:w-56 py-3 md:py-4"}>
                        ПОЗВОНИТЬ
                    </button>
                </div>
                <div className={"flex flex-col gap-4 md:gap-6 font-gilroy border-b-[0.5px] border-neutral-700 pb-6 md:pb-8 lg:pb-10"}>
                    <h2 className={"font-semibold text-xl md:text-2xl lg:text-4xl text-primary"}>
                        +375 44 721 14 20
                    </h2>
                    <p className={"font-normal text-secondary text-xs md:text-sm"} >9:00 - 21:00 ежедневно</p>
                </div>
                <div className={"flex flex-col gap-4 md:gap-6 font-gilroy border-b-[0.5px] border-neutral-700 pb-6 md:pb-8 lg:pb-10"}>
                    <h2 className={"font-semibold text-xl md:text-2xl lg:text-4xl text-primary"}>
                        <Link href={"mailto:hello@amamam.by"} className="break-all">hello@amamam.by</Link>
                    </h2>
                    <p className={"font-normal text-secondary text-xs md:text-sm"} >круглосуточно</p>
                </div>
                <div className={"flex flex-col gap-4 md:gap-6 font-gilroy border-b-[0.5px] border-neutral-700 pb-6 md:pb-8 lg:pb-10"}>
                    <h2 className={"font-semibold text-xl md:text-2xl lg:text-4xl text-primary"}>
                        Режим работы<br/>9:00 - 21:00 ежедневно
                    </h2>
                    <p className={"font-normal text-secondary text-xs md:text-sm"} >всегда ждем вас</p>
                </div>
            </div>
        </div>

        <div className={"w-full aspect-[2/1] md:aspect-[3/1] relative"}>
            <YandexMap address="Минск, пр. Независимости, 88, 1 этаж, пом. 760" showMarker={true} />
        </div>
    </div>
}