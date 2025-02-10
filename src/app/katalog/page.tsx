"use client"

import CheckRadio from "@/components/home/busket/CheckRadio";
import ProductPath from "@/components/home/busket/ProductPath";
import { InputType } from "@/components/home/busket/CheckRadio";
import { useState } from "react";
import { list1, radioTest } from "../test";
import { Icon } from "@/components/ui/assets/Icon/Icon";
import Recomendations from "@/components/home/busket/Recomendations";
import { ProductType } from "@/components/home/busket/ItemRecomendations";


export default function Katalog(){
    const [selected, setSelected] = useState("Бакалея");
    const [chooseTypeProduct, setChooseTypeProduct] = useState(ProductType.Grocery)
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (label: string, productType: ProductType) => {
        setSelected(label);
        setChooseTypeProduct(productType)
    };

    return(
        <div>
            <ProductPath path={`Главная / Каталог / ${selected}`}/>
            <h1 className="text-5xl font-nauryzRedKeds text-black mb-12 mx-20">{selected}</h1>
            <fieldset className="flex gap-11 px-20 w-full overflow-hidden">
                {radioTest.map(({ id, label, name, typeProduct }) => (
                    <CheckRadio 
                        key={id} 
                        type={InputType.Radio} 
                        id={id} 
                        label={label} 
                        name={name}
                        onChange={() => handleChange(label, typeProduct)}
                        typeProduct={typeProduct} 
                        checked={typeProduct == chooseTypeProduct}
                    />
                ))}
            </fieldset>
            <div className="mx-20 flex items-center mt-16 mb-14">
                <select 
                    name="sort" 
                    id="sort-select" 
                    className="text-lg font-gilroy font-medium text-primary bg-transparent appearance-none focus:outline-none rounded-none" 
                    onClick={() => {isOpen ? setIsOpen(false): setIsOpen(true)}} 
                    onBlur={() => setIsOpen(false)}
                >
                    <option value="popular" className="">по популярности</option>
                    <option value="cheap" className="">сначала дешевле</option>
                    <option value="expensive" className="">сначала дороже</option>
                </select>
                <Icon className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} src={"icon/arrow-down.svg"} alt="arrow"/>
            </div>

            <div className="mx-11 sm:ml-20 sm:mr-[90px]">
                <Recomendations list={list1.filter((e)=> e.type == chooseTypeProduct)}/>
            </div>
            <a href="#" className="block text-center text-primary text-xl font-nauryzRedKeds mt-16 md:mt-[136px] mb-20 font-bold">
                СМОТРЕТЬ ВСЕ
            </a>
        </div>
    )
}