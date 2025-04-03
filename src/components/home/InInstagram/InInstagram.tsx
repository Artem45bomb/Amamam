import {FC, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {cn} from "@/utils/style";
import {SliderItem} from "@/components/home/slider/OrderProduct/types";
import Image from "next/image";

const slidesInitial: SliderItem[] = [{
    id: '1-in', srcImage: '/png/dog.png'
}, {
    id: '2-in', srcImage: '/png/instagram2.png'
}, {
    id: '3-in', srcImage: '/png/potato.png'
}]

export const InInstagram: FC<Stylable> = ({className}) => {
    const [slides, setSlides] = useState(slidesInitial); // Хранение слайдов по их индексам
    const [active, setActive] = useState(0);

    const setSlide = (value: number) => {
        const currentSlide = slidesInitial[value];
        const newSlides = [currentSlide, ...slidesInitial.slice(value + 1), ...slidesInitial.slice(0, value)]

        setSlides(newSlides);
        setActive(value); // Обновляем активный слайд
    }

    return (<div
        style={{backgroundImage: `url("/png/bg-product.png")`, backgroundRepeat: 'no-repeat'}}
        className={cn('w-full bg-blue-700 py-11 pl-20 gap-20 flex bg-cover items-center',className)}
    >
        <div className={'flex flex-col items-start max-w-96'}>
            <div className={'text-white flex flex-col gap-12'}>
                <h2 className={'font-nauryzRedKeds text-4xl leading-10 font-bold text-nowrap'}>В INSTAGRAM</h2>
                <p className={'text-[1.1rem] font-medium text-white'}>
                    Our designer already made a lot of beautiful prototypes of rooms that inspire you
                </p>
            </div>
            <button className={'mt-7 font-gilroy font-normal text-base text-white'}>Подробнее{" >"}</button>
        </div>
        <div className="relative overflow-x-hidden min-h-[586px] flex-1">
            <Swiper
                className={'absolute top-0 left-0'}
                spaceBetween={24}
            >
                {slides.map((slide, i) => (<SwiperSlide
                    key={slide.id}
                    className={cn("min-h-[486px] max-w-96 bg-red-500 transition-all", i == 0 ? 'min-h-[586px]' : '')}
                >
                    <Image style={{backgroundSize: 'cover'}} fill src={slide
                        .srcImage} alt={"item slide"}/>
                </SwiperSlide>))}
            </Swiper>
            <div className={'flex gap-4 absolute bottom-9 left-6 translate-x-96 z-40'}>
                {slides.map((_, i) => (<button
                    onClick={() => setSlide(i)}
                    key={i + '-' + "navigation"}
                    className={cn('w-4 h-4 rounded-full', active === i ? 'bg-white' : 'border-white border')}
                />))}
            </div>
        </div>
    </div>);
}