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
        <a className="text-black min-w-[250px] xl:max-w-[250px] xll:max-w-[2000px]" href="#">
            <div className="bg-center bg-cover h-[250px]" style={{backgroundImage:`url(${imgPath}`}}></div>
            <div className={"py-4 pr-4 pl-5  border-t-0 border border-blue-700"}>
                <div className="flex items-center">
                    <Icon className="size-4 mr-2" src={"/icon/Star.svg"} alt={"star"}/>
                    <p className=" text-[10px] font-gilroy font-normal">{stars}</p>
                </div>
                <p className="font-medium text-xs mb-[34px] mt-[17px] whitespace-nowrap text-ellipsis overflow-hidden">{describe}</p>
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