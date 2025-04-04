"use client";

import ItemRecomendations, { ProductType } from "./ItemRecomendations";
import { ItemRecomendationsProps } from "./ItemRecomendations";
// import dynamic from "next/dynamic";
// const ItemRecomendations = dynamic(() => import("./ItemRecomendations"), { ssr: false });

import { list1 } from "../../../app/test";

export interface RecomendationsProps {
    list:ItemRecomendationsProps[]
}


export default function Recomendations({ list }: RecomendationsProps) {
    return (
        <div className="grid xl:grid-cols-4 gap-x-[90px] md:grid-cols-2 gap-y-7 lg:gap-y-14">
            {list.map((item) => (
                <ItemRecomendations
                    key={item.id}
                    imgPath={item.imgPath}
                    imgHover={item.imgHover}
                    stars={item.stars}
                    describe={item.describe}
                    price={item.price}
                    TagCard={item.TagCard}
                    type={item.type} id={item.id}/>
            ))}
        </div>
    );
}

{/* <ItemRecomendations imgPath={"/png/ChinaSoup.jpg"} stars={3} describe="Красивые капибары в зоопарке" price={14}/>
            <ItemRecomendations imgPath={"/png/cookiesBusket.jpg"} stars={4} describe="Цюриха или закаты недружественных" price={14}/>
            <ItemRecomendations imgPath={"/png/product3.png"} stars={4.9} describe="Стран. Ты захочешь вернуться," price={14}/>
            <ItemRecomendations imgPath={"/png/product4.png"} stars={2.4} describe="Но просрочен загран" price={14}/> */}