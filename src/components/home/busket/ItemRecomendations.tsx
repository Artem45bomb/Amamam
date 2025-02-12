"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@/components/ui/assets/Icon/Icon"
import { cn } from "@/utils/style"

enum TypeOfBorder {
    Information,
    Product
}

export enum ProductType {
    Breakfast = "Завтраки",
    PostLaunch = "Полдники",
    Launch = "Обеды",
    Grocery = "Бакалея",
    Oil = "Масла",
    Sous = "Соусы"
}

export enum TagsCard{
    New,
    Percent,
    Bestseller,
}

export interface ItemRecomendationsProps {
    id: number;
    imgPath: string;
    stars: number;
    price: number;
    describe: string;
    imgHover: string;
    type: ProductType;
    TagCard?: TagsCard;
    className?: string;
}
import { TagIconCard } from "./TagIconCard";

export default function ItemRecomendations({ imgPath, imgHover, stars, price, describe, type, TagCard, id,className}: ItemRecomendationsProps) {
    const router = useRouter();
    const handleClick = () => {
        // Переход на динамическую страницу
        router.push(`/busket/${id}`);
    };

    return (
        <article className={cn("text-black min-w-[250px] xl:max-w-[250px] xll:max-w-[2000px] cursor-pointer bg-white",className)} onClick={handleClick}>

                <div className="relative flex h-[250px] border border-blue-700">
                    
                    {TagCard!=undefined?<TagIconCard type={TagCard}/>:''}
                    {/* Основное изображение */}
                    <div
                        className="absolute inset-0 bg-center bg-cover transition-opacity duration-300 opacity-100 hover:opacity-0"
                        style={{ backgroundImage: `url(${imgPath})` }}
                    />
                    {/* Изображение при наведении */}
                    <div
                        className="absolute inset-0 bg-center bg-cover transition-opacity duration-300 opacity-0 hover:opacity-100"
                        style={{ backgroundImage: `url(${imgHover})` }}
                    />
                    <button className="absolute top-4 right-4" 
                            onClick={(e) => {
                                e.stopPropagation(); // Останавливаем всплытие события
                                console.log("Лайк поставлен!");
                            }}>
                        <Icon className={`w-6`} alt={'like'} src={'/icon/heart-white.svg'}/>
                    </button>
                </div>
    
                <div className="py-4 pr-4 pl-5 border-t-0">
                    <div className="flex items-center">
                        <Icon className="size-4 mr-2" src={"/icon/Star.svg"} alt={"star"} />
                        <p className="text-[10px] font-gilroy font-normal">{stars}</p>
                    </div>
                    <p className="font-medium text-xs mb-[34px] mt-[17px] whitespace-nowrap text-ellipsis overflow-hidden">{describe}</p>
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold text-xl">{price} BYN</p>
                            <p className="font-normal text-xs text-secondary">1 шт</p>
                        </div>
                        <button onClick={(e) => {
                                e.stopPropagation(); // Останавливаем всплытие события
                                console.log("В корзину добавлен!");
                            }}>
                            <Icon className="w-7 h-7" src={"/icon/blueTelega.svg"} alt={"star"} />
                        </button>
                    </div>
                </div>
        </article>
    );
}

