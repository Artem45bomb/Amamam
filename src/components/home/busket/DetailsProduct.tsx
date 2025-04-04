// DetailsProduct.tsx
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

export default function DetailsProduct({
  isHasChoose, price, name, id, countProd, weight, ingredients, stars, 
  handleClick, count, handleClickMinus, handleClickPlus
}: MainInfoProductProps) {
  const [isChoose1Active, setIsChoose1Active] = useState(false)
  const [isChoose2Active, setIsChoose2Active] = useState(false)
  
  const chooseActive = 'border-blue-700 text-blue-700'
  const chooseNotActive = 'border-secondary text-secondary'

  const handleClickChoose1 = () => setIsChoose1Active(!isChoose1Active)
  const handleClickChoose2 = () => setIsChoose2Active(!isChoose2Active)

  return (
    <div className="px-7 sm:px-10 md:pl-10 lg:pl-14 md:pr-10 lg:pr-20 py-6 lg:py-0 max-w-[547px] xll:max-w-[650px]">
      <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl text-blue-700 font-nauryzRedKeds pb-3 sm:pb-4">
        {name}
      </h2>
      <p className="font-gilroy font-normal text-sm sm:text-base pb-1 sm:pb-2 text-secondary">
        арт. {id}
      </p>
      <p className={`font-normal text-xl sm:text-2xl font-gilroy text-primary ${isHasChoose ? '' : 'mb-6 sm:mb-12 lg:mb-24'}`}>
        {countProd} шт. / {weight} г.
      </p>
      
      {isHasChoose && (
        <div className="flex flex-wrap gap-3 font-gilroy mt-3 sm:mt-[18px] mb-4 sm:mb-[33px]">
          <button 
            onClick={handleClickChoose1} 
            className={`flex justify-center items-center w-full sm:w-[159px] h-[45px] border-[2px] ${isChoose1Active ? chooseActive : chooseNotActive}`}
          >
            С соусом
          </button>
          <button 
            onClick={handleClickChoose2} 
            className={`flex justify-center items-center w-full sm:w-[159px] h-[45px] border-[2px] ${isChoose2Active ? chooseActive : chooseNotActive}`}
          >
            Горячее
          </button>
        </div>
      )}
      
      <p className="font-gilroy font-normal text-sm sm:text-base text-secondary mb-4 sm:mb-5">
        Состав продукта: {ingredients}
      </p>
      
      <div className="flex items-center font-gilroy text-sm sm:text-base text-secondary font-normal mb-4 sm:mb-0">
        {[...Array(5)].map((_, i) => (
          <Icon key={i} className="size-4 sm:size-6" src={"/icon/Star.svg"} alt={"star"}/>
        ))}
        <p className="ml-1 sm:ml-2">{stars}</p>
        <a href="#" className="underline ml-2 sm:ml-5 text-sm sm:text-base">
          Добавить отзыв
        </a>
      </div>
      
      <p className="text-2xl sm:text-3xl lg:text-[40px] text-primary font-bold font-gilroy py-4 sm:py-6 lg:pt-10 lg:pb-10">
        {price} BYN
      </p>
      
      <div className="text-primary flex  gap-3 sm:gap-0">
        {count === 0 ? (
          <>
            <button 
              onClick={handleClickPlus} 
              className="w-3/4 sm:w-[257px] h-12 bg-blue-700 text-background hover:bg-blue-800 transition-colors"
            >
              Добавить в корзину
            </button>
            <button className="border border-blue-700 flex justify-center items-center size-12 sm:ml-6 mx-auto sm:mx-0">
              <Icon className="size-5 sm:size-7" src={"/icon/akar-icons_heart.svg"} alt={"heart"}/>
            </button>
          </>
        ) : (
          <>
            <div className="w-3/4 sm:w-[257px] h-12 flex">
              <div className="flex-1 border border-blue-700 flex justify-center items-center">
                <p className="font-gilroy font-medium text-sm sm:text-base text-primary">
                  {price !== undefined ? price*count : ""} BYN
                </p>
              </div>
              <div className="flex flex-1 items-center justify-evenly bg-blue-700">
                <button 
                  onClick={handleClickMinus} 
                  className="font-gilroy font-medium text-xl sm:text-2xl size-8 sm:size-10 text-background hover:opacity-80"
                >
                  -
                </button>
                <p className="font-gilroy font-medium text-sm sm:text-base text-background">
                  {count} шт
                </p>
                <button 
                  onClick={handleClickPlus} 
                  className="font-gilroy font-medium text-xl sm:text-2xl size-8 sm:size-10 text-background hover:opacity-80"
                >
                  +
                </button>
              </div>
            </div>
            <button 
              className="border border-blue-700 flex justify-center items-center size-12 sm:ml-6 mx-auto sm:mx-0 sm:mt-0"
              onClick={handleClick}
            >
              <Icon className="size-5 sm:size-7" src={"/icon/shopping-cart.svg"} alt={"shopping-cart"}/>
            </button>
          </>
        )}
      </div>
      
      {count > 0 && (
        <button className="flex items-center text-secondary text-sm sm:text-base font-normal font-gilroy mt-4 sm:mt-6">
          Добавить в <Icon className="size-2 ml-1 sm:ml-2" src={"/icon/akar-icons_heart.svg"} alt={"heart"}/>
        </button>
      )}
    </div>
  )
}