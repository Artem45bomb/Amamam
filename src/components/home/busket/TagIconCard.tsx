import { TagsCard } from "./ItemRecomendations"

interface TagIconCardProps {
    type: TagsCard
}

export function TagIconCard({type}:TagIconCardProps){
    return(
        <div>
            <p>{type == TagsCard.Bestseller? "Хит продаж": type == TagsCard.New? "new":"%"}</p>
        </div>
    )
}
