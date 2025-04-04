import {FC, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {cn} from "@/utils/style";
import {SliderItem} from "@/components/home/slider/OrderProduct/types";
import Image from "next/image";

const slidesInitial: SliderItem[] = [
    { id: '1-in', srcImage: '/png/dog.png' },
    { id: '2-in', srcImage: '/png/instagram2.png' },
    { id: '3-in', srcImage: '/png/potato.png' }
];

export const InInstagram: FC<Stylable> = ({className}) => {
    const [slides, setSlides] = useState(slidesInitial);
    const [active, setActive] = useState(0);

    const setSlide = (value: number) => {
        const currentSlide = slidesInitial[value];
        const newSlides = [currentSlide, ...slidesInitial.slice(value + 1), ...slidesInitial.slice(0, value)];
        setSlides(newSlides);
        setActive(value);
    }

    return (
        <div
            style={{backgroundImage: `url("/png/bg-product.png")`, backgroundRepeat: 'no-repeat'}}
            className={cn(
                'w-full bg-blue-700 py-8 sm:py-11 px-4 sm:pl-10 md:pl-20 gap-8 md:gap-20 flex flex-col lg:flex-row bg-cover items-center',
                className
            )}
        >
            {/* Текстовая часть */}
            <div className={'flex flex-col items-start max-w-full lg:max-w-96'}>
                <div className={'text-white flex flex-col gap-6 sm:gap-12'}>
                    <h2 className={'font-nauryzRedKeds text-2xl sm:text-3xl lg:text-4xl leading-tight font-bold whitespace-nowrap'}>
                        В INSTAGRAM
                    </h2>
                    <p className={'text-base sm:text-[1.1rem] font-medium text-white'}>
                        Our designer already made a lot of beautiful prototypes of rooms that inspire you
                    </p>
                </div>
                <button className={'mt-4 sm:mt-7 font-gilroy font-normal text-sm sm:text-base text-white hover:opacity-80 transition-opacity'}>
                    Подробнее{" >"}
                </button>
            </div>

            {/* Слайдер */}
            <div className="relative w-full lg:flex-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[586px]">
                <Swiper
                    className={'absolute top-0 left-0 w-full h-full'}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 1.8,
                            spaceBetween: 24
                        },
                        1024: {
                            slidesPerView: 2.3,
                            spaceBetween: 24
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 24
                        }
                    }}
                >
                    {slides.map((slide, i) => (
                        <SwiperSlide
                            key={slide.id}
                            className={cn(
                                "min-h-[250px] sm:min-h-[350px] lg:min-h-[486px] max-w-[280px] sm:max-w-[350px] lg:max-w-96 bg-red-500 transition-all relative",
                                i === 0 ? 'lg:min-h-[586px]' : ''
                            )}
                        >
                            <Image 
                                fill 
                                src={slide.srcImage} 
                                alt="item slide"
                                className="object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                {/* Навигационные точки */}
                <div className={'flex gap-4 absolute bottom-4 sm:bottom-9 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 z-40'}>
                    {slides.map((_, i) => (
                        <button
                            onClick={() => setSlide(i)}
                            key={i + '-navigation'}
                            className={cn(
                                'w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors',
                                active === i ? 'bg-white' : 'border-white border'
                            )}
                            aria-label={`Перейти к слайду ${i+1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}