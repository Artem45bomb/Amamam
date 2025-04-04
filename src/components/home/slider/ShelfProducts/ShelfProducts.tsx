import {FC, useRef, useState} from "react";
import { Props } from "./types";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {cn} from "@/utils/style";
import Link from "next/link";
import 'swiper/css';

export const ShelfProducts: FC<Props> = ({items, className}) => {
    const [index, setIndex] = useState(0);
    const ref = useRef<SwiperRef>(null);

    const setPosition = (value: number) => {
        const indexCount = index - value;
        if(ref.current) {
            if(indexCount > 0) ref.current.swiper.slidePrev(indexCount)
            else if (indexCount < 0) ref.current.swiper.slideNext(indexCount*-1)
        }
        setIndex(value);
    }

    return (
        <div className={cn(
            'flex flex-col lg:flex-row w-full border-2 border-blue-700',
            className
        )}>
            
            <Swiper 
                onSlideChange={e => setIndex(e.activeIndex)} 
                ref={ref} 
                className={'w-full lg:flex-1 h-96 lg:h-auto order-1 lg:order-none'}
                spaceBetween={20}
                slidesPerView={1}
            >
                {items.map(e => (
                    <SwiperSlide 
                        key={e.id}
                        className="relative h-full"
                    >
                        <Image 
                            style={{objectFit:'cover'}} 
                            fill 
                            src={e.srcImage} 
                            alt="item slide" 
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Контентная часть */}
            <div className={cn(
                'lg:flex-1 border-t-2 lg:border-t-0 lg:border-l-2 border-blue-700',
                'order-3 lg:order-none'
            )}>
                <div className={'p-4 lg:pt-[14%] lg:pb-[20%] lg:px-[12%] h-full w-full'}>
                    <h2 className={'text-blue-700 text-2xl lg:text-4xl font-bold'}>
                        {items[index].title.toUpperCase()}
                    </h2>
                    
                    <p className={'mt-4 lg:mt-[9%] font-gilroy text-secondary text-base lg:text-xl font-normal'}>
                        {items[index].body}
                    </p>
                    
                    <div className={'gap-3 lg:gap-5 justify-between flex mt-6 lg:mt-[20%]'}>
                        <div className={'flex gap-2 lg:gap-4'}>
                            {items.map((e, i) => (
                                <button
                                    onClick={() => setPosition(i)}
                                    key={e.id + '-navigation'}
                                    className={cn(
                                        'w-3 h-3 lg:w-4 lg:h-4 rounded-full',
                                        index === i ? 'bg-gray-400' : 'border-gray-400 border'
                                    )}
                                />
                            ))}
                        </div>
                        
                        <Link 
                            href={'d'} 
                            className={'text-secondary font-gilroy font-normal text-sm lg:text-base'}
                        >
                            Подробнее {'>'}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}