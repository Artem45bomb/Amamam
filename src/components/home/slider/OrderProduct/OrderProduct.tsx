"use client";
import {FC, useRef, useState} from "react";
import {Props} from "./types";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {cn} from "@/utils/style";
import Link from "next/link";
// Import Swiper styles
import 'swiper/css';
import './index.css';

export const OrderProduct: FC<Props> = ({items, className}) => {
    const ref = useRef<SwiperRef>(null)
    const [index, setIndex] = useState(0);

    const setPosition = (value: number) => {
        const indexCount = index - value;

        if (ref.current) {
            if (indexCount > 0) ref.current.swiper.slidePrev(indexCount)
            else if (indexCount < 0) ref.current.swiper.slideNext(indexCount * -1)
        }
        setIndex(value)
    }


    return <Swiper spaceBetween={50} style={{minHeight:"400px"}} ref={ref} className={cn('w-full h-full relative', className)}>
        <div className={'absolute top-0 left-0 w-full h-full flex flex-col justify-end gap-2 items-start z-10 py-6 px-16'}>
            <div className={'border border-blue-700 bg-white'}>
                <div className={'px-7 pt-6 pb-4'}>
                    <h2 className={'text-primary text-base font-bold text-nowrap leading-4'}>НОВЫЕ БЛЮДА НА ОБЕД</h2>
                    <Link href={'d'} className={'text-secondary font-gilroy font-normal text-base'}>
                        Заказать {'>'}
                    </Link>
                </div>
            </div>
            <div className={'flex w-full justify-center'}>
                <div className={'flex gap-4 mx-auto'}>
                    {items.map((e, i) => <button
                        onClick={() => setPosition(i)}
                        key={e.id + '-' + "navigation"}
                        className={cn('w-4 h-4 rounded-full', index === i ? 'bg-white' : 'border-white border')}>
                    </button>)}
                </div>
            </div>
        </div>
        {items.map(e => <SwiperSlide className={'min-w-full min-h-full max-w-full max-h-full relative'} key={e.id}>
            <Image style={{backgroundSize: 'cover'}} fill src={e.srcImage} alt={"item slide"}/>
        </SwiperSlide>)}
    </Swiper>
}