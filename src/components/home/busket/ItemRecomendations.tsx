"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@/components/ui/assets/Icon/Icon"
import { cn } from "@/utils/style"

enum TypeOfBorder {
    Information,
    Product
}

export enum ProductType {
    Breakfast,
    PostLaunch,
    Launch,
    Grocery,
    Oil,
    Sous
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
    type: ProductType
    TagCard?: TagsCard
}



import { useState } from "react";
import { TagIconCard } from "./TagIconCard";

export default function ItemRecomendations({ imgPath, imgHover, stars, price, describe, type, TagCard, id}: ItemRecomendationsProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const handleClick = () => {
        // Переход на динамическую страницу
        router.push(`/busket/${id}?imgPath=${encodeURIComponent(imgPath)}&stars=${stars}&price=${price}&describe=${encodeURIComponent(describe)}&type=${type}&TagCard=${TagCard ?? ""}`);
    };

    return (
        <article className="text-black min-w-[250px] xl:max-w-[250px] xll:max-w-[2000px]" onClick={handleClick}>
                <div className="relative h-[250px] overflow-hidden border border-blue-700">
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
                </div>
    
                <div className="py-4 pr-4 pl-5 border-t-0 border border-blue-700">
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
                        <button>
                            <Icon className="w-7 h-7" src={"/icon/blueTelega.svg"} alt={"star"} />
                        </button>
                    </div>
                </div>
        </article>
    );
}

