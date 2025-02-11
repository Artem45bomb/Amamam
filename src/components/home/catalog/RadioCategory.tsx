export interface RadioCategoryPrrops{
    label:string,
    id: string,
    cheked: boolean
}

export function RadioCategory({label, id, cheked}:RadioCategoryPrrops){
    return(
        <div>
            <input type="radio" className="peer hidden" id={id} name="categories" checked={cheked}/>
            <label htmlFor={id} className="text-xl peer-checked:text-blue-700 peer-checked:underline peer-checked:font-nauryzRedKeds">{label}</label>
        </div>
    )
}