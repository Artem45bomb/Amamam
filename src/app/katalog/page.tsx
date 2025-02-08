import CheckRadio from "@/components/home/busket/CheckRadio";
import ProductPath from "@/components/home/busket/ProductPath";
import { InputType } from "@/components/home/busket/CheckRadio";

export default function Katalog(){
    return(
        <div>
            <ProductPath path="Главная / Каталог / Бакалея"/>
            <h1 className="text-5xl font-nauryzRedKeds text-black mb-12">Бакалея</h1>
            <CheckRadio label="qwerty" type={InputType.Radio} id="labe"/>
        </div>
    )
}