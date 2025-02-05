import { Icon } from "@/components/ui/assets/Icon/Icon"
import { cn } from "@/utils/style"

enum TypeOfBorder {
    Information,
    Product
}

interface ItemRecomendationsProps{
    imgPath:string,
    stars:number,
    price:number,
    describe:string,
    type:TypeOfBorder,

}



export default function ItemRecomendations({imgPath, stars, price, describe, type}:ItemRecomendationsProps){
    return(
        <a className="text-black  mt-[60px]" href="#">
            <div className="bg-center bg-cover size-[250px]" style={{backgroundImage:`url(${imgPath}`}}></div>
            <div className={cn("w-[250px] py-4 pr-4 pl-5  border-t-0", type == TypeOfBorder.Information? "border border-blue-700": "")}>
                <div className="flex items-center">
                    <Icon className="size-4 mr-2" src={"/icon/Star.svg"} alt={"star"}/>
                    <p className=" text-[10px] font-gilroy font-normal">{stars}</p>
                </div>
                <p className="font-medium text-xs mb-[34px] mt-[17px]">{describe}</p>
                <div className="flex justify-between">
                    <div>
                        <p className="font-semibold text-xl">{price} BYN</p>
                        <p className="font-normal text-xs text-secondary">1 шт</p>
                    </div>
                    <button>
                        <Icon className="w-7 h-7" src={"/icon/blueTelega.svg"} alt={"star"}/>
                    </button>
                </div>
            </div>
        </a>
    )
}