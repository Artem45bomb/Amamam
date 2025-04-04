"use client"
import { mokeList } from "@/app/test";
import { ProductType } from "../busket/ItemRecomendations";
import { ListCategory } from "./ListCategory";
import { RadioCategory } from "./RadioCategory";
import { Icon } from "@/components/ui/assets/Icon/Icon";

export function ProductCategories(){
    return (
        <div className="flex border-b-2 border-blue-700">
            <div className="w-80 bg-white px-20 py-16">
                <fieldset className="text-secondary font-gilroy flex flex-col gap-7">
                    <RadioCategory label="еда" id="food" cheked={true}/>
                    <RadioCategory label="Бренды" id="brends" cheked={false}/>
                    <RadioCategory label="Новинки" id="news" cheked={false}/>
                    <RadioCategory label="Выбор шефа" id="chef" cheked={false}/>
                    <RadioCategory label="Hot позиции" id="hot" cheked={false}/>
                    <RadioCategory label="Акции и подарки" id="gifts" cheked={false}/>
                </fieldset>
            </div>
            <div className="pl-20 py-16 pr-16 flex">
                <div className="flex flex-wrap gap-14">
                    <ListCategory type={ProductType.Breakfast} icon="croissant.svg" list={mokeList.filter((e)=>e.typeProduct == ProductType.Breakfast).slice(0,7)}/>
                    <ListCategory type={ProductType.PostLaunch} icon="mortar.svg" list={mokeList.filter((e)=>e.typeProduct == ProductType.PostLaunch).slice(0,7)}/>
                    <ListCategory type={ProductType.Launch} icon="dish 3.svg" list={mokeList.filter((e)=>e.typeProduct == ProductType.Launch).slice(0,7)}/>
                    <ListCategory type={ProductType.Grocery} icon="bread 1.svg" list={mokeList.filter((e)=>e.typeProduct == ProductType.Grocery).slice(0,7)}/>
                    <ListCategory type={ProductType.Oil} icon="bottle.svg" list={mokeList.filter((e)=>e.typeProduct == ProductType.Oil).slice(0,7)}/>
                    <ListCategory type={ProductType.Sous} icon="jar.svg" list={mokeList.filter((e)=>e.typeProduct == ProductType.Sous).slice(0,7)}/>
                </div>
                <div className="flex gap-6 flex-col">
                    <Icon className="w-96 h-60" src={"/png/Group273.png"} alt="chefImage"/>
                    <Icon className="w-96 h-60" src={"/png/Group274.png"} alt="chefImage"/>
                </div>
            </div>
        </div>
    )
}