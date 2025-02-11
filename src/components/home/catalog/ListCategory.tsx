import { mokeListInt } from "@/app/test"
import { Icon } from "@/components/ui/assets/Icon/Icon"
import { ProductType } from "../busket/ItemRecomendations"
import Link from "next/link"


export interface ListCategoryProps{
    type: ProductType,
    icon: string,
    list: mokeListInt[]
}

export function ListCategory({type, icon, list}: ListCategoryProps){
    return(
        <div className="w-36">
            <div className="flex gap-3">
                <Icon src={`icon/${icon}`} alt="icon" className="w-5 h-5"/>
                <p className="font-nauryzRedKeds text-base text-primary">{type}</p>
            </div>
            <ul className=" text-base text-secondary font-gilroy mt-6 ">
                {list.map(({name, id})=>(
                    <li className="max-w-36 truncate" key={id}>{name}</li>
                ))}
            </ul>
            <Link className="text-primary text-xs font-gilroy" href={`/catalog/${[type]}`}>Посмотреть все</Link>
        </div>
    )
}