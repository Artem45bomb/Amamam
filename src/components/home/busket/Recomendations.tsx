import ItemRecomendations from "./ItemRecomendations";
import { ItemRecomendationsProps } from "./ItemRecomendations";

import { list1 } from "../../../app/data";
import { list2 } from "../../../app/data";

export interface RecomendationsProps {
    list:ItemRecomendationsProps[]
}


export default function Recomendations({ list }: RecomendationsProps) {
    return (
        <div className="grid xl:grid-cols-4 gap-x-[90px] md:grid-cols-2 gap-y-14">
            {list.map((item) => (
                <ItemRecomendations
                    key={item.key}
                    imgPath={item.imgPath}
                    imgHover={item.imgHover}
                    stars={item.stars}
                    describe={item.describe}
                    price={item.price}
                />
            ))}
        </div>
    );
}

{/* <ItemRecomendations imgPath={"/png/ChinaSoup.jpg"} stars={3} describe="Красивые капибары в зоопарке" price={14}/>
            <ItemRecomendations imgPath={"/png/cookiesBusket.jpg"} stars={4} describe="Цюриха или закаты недружественных" price={14}/>
            <ItemRecomendations imgPath={"/png/product3.png"} stars={4.9} describe="Стран. Ты захочешь вернуться," price={14}/>
            <ItemRecomendations imgPath={"/png/product4.png"} stars={2.4} describe="Но просрочен загран" price={14}/> */}