"use client";
import {FC, useRef, useState} from "react";
import {Props} from "./types";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {cn} from "@/utils/style";
import Link from "next/link";
import 'swiper/css';
import './index.css';

export const OrderProduct: FC<Props> = ({items, className}) => {
    const ref = useRef<SwiperRef>(null);
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const setPosition = (value: number) => {
        if (isAnimating || index === value) return;
        
        setIsAnimating(true);
        const indexCount = index - value;
        if (ref.current) {
            if (indexCount > 0) ref.current.swiper.slidePrev(indexCount);
            else if (indexCount < 0) ref.current.swiper.slideNext(indexCount * -1);
        }
        setIndex(value);
        
        setTimeout(() => setIsAnimating(false), 500);
    }

    return (
        <Swiper 
            spaceBetween={50} 
            style={{minHeight: "300px"}}
            ref={ref} 
            className={cn('w-full h-full relative group', className)}
            breakpoints={{
                640: {
                    spaceBetween: 30,
                    minHeight: "350px"
                },
                768: {
                    spaceBetween: 40,
                    minHeight: "400px"
                },
                1024: {
                    spaceBetween: 50,
                    minHeight: "450px"
                }
            }}
        >
            {/* Контент поверх слайдов */}
            <div className={'absolute top-0 left-0 w-full h-full flex flex-col justify-end gap-2 items-start z-10 py-4 sm:py-6 px-4 sm:px-8 md:px-16'}>
                <div className={'border border-blue-700 bg-white w-full max-w-xs transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]'}>
                    <div className={'px-4 sm:px-7 pt-4 sm:pt-6 pb-3 sm:pb-4'}>
                        <h2 className={'text-primary text-sm sm:text-base font-bold whitespace-nowrap leading-4'}>
                            НОВЫЕ БЛЮДА НА ОБЕД
                        </h2>
                        <Link 
                            href={'d'} 
                            className={
                                'text-secondary font-gilroy font-normal text-sm sm:text-base hover:opacity-80 transition-opacity duration-200 inline-block hover:translate-x-1'
                            }
                        >
                            Заказать {'>'}
                        </Link>
                    </div>
                </div>
                
                {/* Навигационные точки */}
                <div className={'flex w-full justify-center'}>
                    <div className={'flex gap-3 sm:gap-4 mx-auto'}>
                        {items.map((e, i) => (
                            <button
                                onClick={() => setPosition(i)}
                                key={e.id + '-navigation'}
                                className={cn(
                                    'w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 transform hover:scale-125',
                                    index === i ? 'bg-white scale-125' : 'border-white border hover:bg-white/50'
                                )}
                                aria-label={`Перейти к слайду ${i+1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Слайды */}
            {items.map(e => (
                <SwiperSlide 
                    className={'min-w-full min-h-full max-w-full max-h-full relative transition-opacity duration-500'} 
                    key={e.id}
                >
                    <Image 
                        fill 
                        src={e.srcImage} 
                        alt="item slide"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}