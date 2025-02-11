import { TagsCard } from "./ItemRecomendations"

interface TagIconCardProps {
    type: TagsCard
}

export function TagIconCard({type}:TagIconCardProps){
    return(
        <div className="absolute z-10">
            <p className={`text-white leading-none p-2 font-nauryzRedKeds text-base min-w-8 text-center ${type == TagsCard.Bestseller? "bg-blue-700": type == TagsCard.New? "bg-[#94CB56]":"bg-[#F93C00]"}`}>{type == TagsCard.Bestseller? "Хит продаж": type == TagsCard.New? "NEW":"%"}</p>
        </div>
    )
}
