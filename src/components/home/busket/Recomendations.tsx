import ItemRecomendations from "./ItemRecomendations";



export default function Recomendations () {
    return (
        <div className="flex flex-wrap gap-x-[90px] justify-center">
            <ItemRecomendations imgPath={"/png/product1.png"} stars={3} describe="Красивые капибары в зоопарке" price={14}/>
            <ItemRecomendations imgPath={"/png/product2.png"} stars={4} describe="Цюриха или закаты недружественных" price={14}/>
            <ItemRecomendations imgPath={"/png/product3.png"} stars={4.9} describe="Стран. Ты захочешь вернуться," price={14}/>
            <ItemRecomendations imgPath={"/png/product4.png"} stars={2.4} describe="Но просрочен загран" price={14}/>
        </div>
    )
}