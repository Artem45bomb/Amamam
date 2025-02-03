import {FC, useRef, useState} from "react";
import { Props } from "./types";
import {Swiper, SwiperRef,SwiperSlide} from "swiper/react";
import Image from "next/image";
import {cn} from "@/utils/style";
import Link from "next/link";
// Import Swiper styles
import 'swiper/css';

export const ShelfProducts:FC<Props> = ({items,className}) => {
    const [index,setIndex] = useState(0);
    const ref = useRef<SwiperRef>(null)

    const setPosition = (value:number) => {
        const indexCount = index - value;

        if(ref.current) {
            if(indexCount > 0) ref.current.swiper.slidePrev(indexCount)
            else if (indexCount < 0) ref.current.swiper.slideNext(indexCount*-1)
        }
        setIndex(value)
    }

    return <div className={cn('flex w-full border-2 border-blue-700',className)}>
        <Swiper onSlideChange={e => setIndex(e.activeIndex)} ref={ref} className={'flex-1 min-h-full'}>
            {items.map(e => <SwiperSlide style={{minHeight:'100%',position:'relative'}} key={e.id}>
                <Image style={{backgroundSize:'cover'}} fill src={e.srcImage} alt={"item slide"} />
            </SwiperSlide>)}
        </Swiper>
        <div className={'flex-1 h-full border-l-2 border-blue-700'}>
            <div className={'pt-[14%] pb-[20%] px-[12%] h-full w-full'}>
                <h2 className={'text-blue-700 text-4xl font-bold'}>{items[index].title.toUpperCase()}</h2>
                <p className={'mt-[9%] font-gilroy text-secondary text-xl font-normal'}>{items[index].body}</p>
                <div className={'gap-5 justify-between flex mt-[20%]'}>
                    <div className={'flex gap-4'}>
                        {items.map((e, i) => <button
                            onClick={() => setPosition(i)}
                            key={e.id + '-' + "navigation"}
                            className={cn('w-4 h-4 rounded-full', index === i ? 'bg-gray-400' : 'border-gray-400 border')}>

                        </button>)}
                    </div>
                    <Link href={'d'} className={'text-secondary font-gilroy font-normal text-base'}>
                        Подробнее {'>'}
                    </Link>
                </div>
            </div>
        </div>
    </div>
}