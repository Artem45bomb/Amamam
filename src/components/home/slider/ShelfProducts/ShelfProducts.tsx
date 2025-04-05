import {FC, useRef, useState} from "react";
import { Props } from "./types";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {cn} from "@/utils/style";
import Link from "next/link";
import 'swiper/css';

export const ShelfProducts: FC<Props> = ({items, className}) => {
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const ref = useRef<SwiperRef>(null);

    const setPosition = (value: number) => {
        if (isAnimating || index === value) return;
        
        setIsAnimating(true);
        const indexCount = index - value;
        if(ref.current) {
            if(indexCount > 0) ref.current.swiper.slidePrev(indexCount)
            else if (indexCount < 0) ref.current.swiper.slideNext(indexCount*-1)
        }
        setIndex(value);
        setTimeout(() => setIsAnimating(false), 500);
    }

    return (
        <div className={cn(
            'flex flex-col lg:flex-row w-full border-2 border-blue-700 group',
            'transition-all duration-300 hover:shadow-lg',
            className
        )}>
            
            <Swiper 
                onSlideChange={e => setIndex(e.activeIndex)} 
                ref={ref} 
                className={'w-full lg:flex-1 h-96 lg:h-auto order-1 lg:order-none relative'}
                spaceBetween={20}
                slidesPerView={1}
            >
                {items.map(e => (
                    <SwiperSlide 
                        key={e.id}
                        className="relative h-full transition-opacity duration-500"
                    >
                        <Image 
                            style={{objectFit:'cover'}} 
                            fill 
                            src={e.srcImage} 
                            alt="item slide" 
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="transition-transform duration-700 group-hover:scale-105"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Контентная часть */}
            <div className={cn(
                'lg:flex-1 border-t-2 lg:border-t-0 lg:border-l-2 border-blue-700',
                'order-3 lg:order-none transition-colors duration-300 group-hover:border-blue-600',
                'bg-white/90 group-hover:bg-white'
            )}>
                <div className={'p-6 lg:pt-[14%] lg:pb-[20%] lg:px-[12%] h-full w-full'}>
                    <h2 className={'text-blue-700 text-2xl lg:text-4xl font-bold transition-colors duration-300 group-hover:text-blue-800'}>
                        {items[index].title.toUpperCase()}
                    </h2>
                    
                    <p className={'mt-4 lg:mt-[9%] font-gilroy text-secondary text-base lg:text-xl font-normal transition-colors duration-300 group-hover:text-gray-800'}>
                        {items[index].body}
                    </p>
                    
                    <div className={'gap-3 lg:gap-5 justify-between flex mt-8 lg:mt-[20%]'}>
                        <div className={'flex gap-3 lg:gap-4 items-center'}>
                            {items.map((e, i) => (
                                <button
                                    onClick={() => setPosition(i)}
                                    key={e.id + '-navigation'}
                                    className={cn(
                                        'w-3 h-3 lg:w-4 lg:h-4 rounded-full',
                                        index === i ? 'bg-gray-400' : 'border-gray-400 border'
                                    )}
                                    aria-label={`Перейти к слайду ${i+1}`}
                                />
                            ))}
                        </div>
                        
                        <Link 
                            href={''} 
                            className={
                                'text-secondary font-gilroy font-normal text-sm lg:text-base flex items-center gap-1 transition-all duration-300 hover:text-blue-600 hover:gap-2 hover:font-semibold'
                            }
                        >
                            Подробнее 
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">{'>'}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}