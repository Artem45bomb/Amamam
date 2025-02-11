import { Icon } from "@/components/ui/assets/Icon/Icon";
import { useState } from "react";

interface MainInfoProductProps {
  isHasChoose: boolean,
  price: number|undefined,
  name: string|undefined,
  id: number|undefined,
  countProd: number|undefined,
  weight:number|undefined,
  ingredients: string|undefined,
  stars: number|undefined,
  handleClick: ()=>void,
  count: number,
  handleClickPlus: ()=>void,
  handleClickMinus: ()=>void,
}

export default function DetailsProduct({isHasChoose, price, name, id, countProd, weight, ingredients, stars, handleClick, count, handleClickMinus, handleClickPlus}:MainInfoProductProps) {
  const [isChoose1Active, setIsChoose1Active] = useState(false)
  const [isChoose2Active, setIsChoose2Active] = useState(false)
  const chooseActive = 'border-blue-700 text-blue-700'
  const chooseNotActive = 'border-secondary text-secondary'
  

  const handleClickChoose1 =()=>{
    isChoose1Active ? setIsChoose1Active(false): setIsChoose1Active(true)
  }
  const handleClickChoose2 =()=>{
    isChoose2Active ? setIsChoose2Active(false): setIsChoose2Active(true)
  }
    return(
        <div className=" pt-10 pl-14 pr-20" style={{maxWidth:547}}>
                    <h2 className="font-bold text-4xl text-blue-700 font-nauryzRedKeds pb-4">{name}</h2>
                    <p className="font-gilroy font-normal text-base pb-2 text-secondary">арт. {id}</p>
                    <p className={`font-normal text-2xl font-gilroy text-primary ${isHasChoose?0:'mb-24'}`}>{countProd} шт. / {weight} г.</p>
                    {isHasChoose && (
                      <div className="flex font-gilroy mt-[18px] mb-[33px]">
                        <button onClick={handleClickChoose1} className={`flex justify-center items-center w-[159px] h-[45px] border-[2px] mr-7 ${isChoose1Active ? chooseActive: chooseNotActive}`}>С соусом</button>
                        <button onClick={handleClickChoose2} className={`flex justify-center items-center w-[159px] h-[45px] border-[2px]  ${isChoose2Active ? chooseActive: chooseNotActive}`}>Горячее</button>
                      </div>
                    )}
                    <p className="font-gilroy font-normal text-base text-secondary mb-5">Состав продукта: {ingredients}</p>
                    <div className="flex font-gilroy text-base text-secondary font-normal">
                      <Icon className="size-6" src={"/icon/Star.svg"} alt={"star"}/>
                      <Icon className="size-6" src={"/icon/Star.svg"} alt={"star"}/>
                      <Icon className="size-6" src={"/icon/Star.svg"} alt={"star"}/>
                      <Icon className="size-6" src={"/icon/Star.svg"} alt={"star"}/>
                      <Icon className="size-6" src={"/icon/Star.svg"} alt={"star"}/>
                      <p className="ml-2">{stars}</p>
                      <a href="#" className=" underline ml-5">Добавить отзыв</a>
                    </div>
                    <p className="text-[40px] text-primary font-bold font-gilroy pb-10 pt-10" >{price} BYN</p>
                    <div className="text-primary flex">
                      {count === 0 && (
                        <button onClick={handleClickPlus} className="w-[257px] h-12 bg-blue-700 text-background">Добавить в корзину</button>
                      )}
                      {count > 0 && (
                        <div className="w-[257px] h-12 flex ">
                          <div className="flex-1 border border-blue-700 flex justify-center items-center">
                            <p className="font-gilroy font-medium text-base text-primary">{price !== undefined?price*count:""} BYN</p>
                          </div>
                          <div className="flex flex-1 items-center justify-evenly bg-blue-700 ">
                            <button onClick={handleClickMinus} className="font-gilroy font-medium text-2xl size-10 text-background">-</button>
                            <p className="font-gilroy font-medium text-base text-background">{count} шт</p>
                            <button onClick={handleClickPlus} className="font-gilroy font-medium text-2xl size-10 text-background">+</button>
                          </div>
                        </div>
                      )}
                      {count === 0 && (
                        <button className="border border-blue-700 flex justify-center items-center size-12 ml-6">
                          <Icon className="size-7" src={"/icon/akar-icons_heart.svg"} alt={"heart"}/>
                        </button>
                      )}
                      {count > 0 && (
                        <button className="border border-blue-700 flex justify-center items-center size-12 ml-6" onClick={handleClick}>
                        <Icon className="size-7" src={"/icon/shopping-cart.svg"} alt={"shopping-cart"}/>
                      </button>
                      )}
                    </div>
                    {count > 0 && (
                      <button className="flex text-secondary text-base font-normal font-gilroy mt-6">Добавить в <Icon className="size-2 ml-2" src={"/icon/akar-icons_heart.svg"} alt={"heart"}/></button>
                    )}
                  </div>
    )
}