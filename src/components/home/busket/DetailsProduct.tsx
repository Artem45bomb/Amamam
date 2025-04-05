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
  const [isChoose1Active, setIsChoose1Active] = useState(false);
  const [isChoose2Active, setIsChoose2Active] = useState(false);
  
  const chooseActive = 'border-blue-700 text-blue-700 bg-blue-50';
  const chooseNotActive = 'border-secondary text-secondary';

  const handleClickChoose1 = () => setIsChoose1Active(!isChoose1Active);
  const handleClickChoose2 = () => setIsChoose2Active(!isChoose2Active);

  return (
    <div className="px-7 sm:px-10 md:pl-10 lg:pl-14 md:pr-10 lg:pr-20 py-6 lg:py-0 max-w-[547px] xll:max-w-[650px]">
      {/* Заголовок и основная информация */}
      <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl text-blue-700 font-nauryzRedKeds pb-3 sm:pb-4 transition-colors duration-200 hover:text-blue-800">
        {name}
      </h2>
      <p className="font-gilroy font-normal text-sm sm:text-base pb-1 sm:pb-2 text-secondary">
        арт. {id}
      </p>
      <p className={`font-normal text-xl sm:text-2xl font-gilroy text-primary ${isHasChoose ? '' : 'mb-6 sm:mb-12 lg:mb-24'}`}>
        {countProd} шт. / {weight} г.
      </p>
      
      {/* Выбор опций */}
      {isHasChoose && (
        <div className="flex flex-wrap gap-3 font-gilroy mt-3 sm:mt-[18px] mb-4 sm:mb-[33px]">
          <button 
            onClick={handleClickChoose1} 
            className={`flex justify-center items-center w-full sm:w-[159px] h-[45px] border-[2px] transition-all duration-200 ${isChoose1Active ? chooseActive : chooseNotActive} hover:border-blue-600 hover:text-blue-600`}
          >
            С соусом
          </button>
          <button 
            onClick={handleClickChoose2} 
            className={`flex justify-center items-center w-full sm:w-[159px] h-[45px] border-[2px] transition-all duration-200 ${isChoose2Active ? chooseActive : chooseNotActive} hover:border-blue-600 hover:text-blue-600`}
          >
            Горячее
          </button>
        </div>
      )}
      
      {/* Состав и рейтинг */}
      <p className="font-gilroy font-normal text-sm sm:text-base text-secondary mb-4 sm:mb-5">
        Состав продукта: {ingredients}
      </p>
      
      <div className="flex items-center font-gilroy text-sm sm:text-base text-secondary font-normal mb-4 sm:mb-0">
        {[...Array(5)].map((_, i) => (
          <Icon key={i} className="size-4 sm:size-6 transition-transform duration-200 hover:scale-110" src={"/icon/Star.svg"} alt={"star"}/>
        ))}
        <p className="ml-1 sm:ml-2">{stars}</p>
        <a href="#" className="underline ml-2 sm:ml-5 text-sm sm:text-base hover:text-blue-700 transition-colors duration-200">
          Добавить отзыв
        </a>
      </div>
      
      {/* Цена */}
      <p className="text-2xl sm:text-3xl lg:text-[40px] text-primary font-bold font-gilroy py-4 sm:py-6 lg:pt-10 lg:pb-10 transition-colors duration-200 hover:text-blue-800">
        {price} BYN
      </p>
      
      {/* Кнопки добавления в корзину */}
      <div className="text-primary flex gap-3 sm:gap-0">
        {count === 0 ? (
          <>
            <button 
              onClick={handleClickPlus} 
              className="w-3/4 sm:w-[257px] h-12 bg-blue-700 text-background hover:bg-blue-800 transition-all duration-300 active:scale-[0.98]"
            >
              Добавить в корзину
            </button>
            <button className="border border-blue-700 flex justify-center items-center size-12 sm:ml-6 mx-auto sm:mx-0 hover:bg-blue-50 transition-colors duration-200">
              <Icon className="size-5 sm:size-7 transition-transform duration-200 hover:scale-110" src={"/icon/akar-icons_heart.svg"} alt={"heart"}/>
            </button>
          </>
        ) : (
          <>
            <div className="w-3/4 sm:w-[257px] h-12 flex">
              <div className="flex-1 border border-blue-700 flex justify-center items-center hover:bg-blue-50 transition-colors duration-200">
                <p className="font-gilroy font-medium text-sm sm:text-base text-primary">
                  {price !== undefined ? price*count : ""} BYN
                </p>
              </div>
              <div className="flex flex-1 items-center justify-evenly bg-blue-700">
                <button 
                  onClick={handleClickMinus} 
                  className="font-gilroy font-medium text-xl sm:text-2xl size-8 sm:size-10 text-background hover:opacity-80 transition-opacity duration-200 active:scale-95"
                >
                  -
                </button>
                <p className="font-gilroy font-medium text-sm sm:text-base text-background">
                  {count} шт
                </p>
                
                <button 
                  onClick={handleClickPlus} 
                  className="font-gilroy font-medium text-xl sm:text-2xl size-8 sm:size-10 text-background hover:opacity-80 transition-opacity duration-200 active:scale-95"
                >
                  +
                </button>
              </div>
            </div>
            <button 
              className="border border-blue-700 flex justify-center items-center size-12 sm:ml-6 mx-auto sm:mx-0 sm:mt-0 hover:bg-blue-50 transition-colors duration-200"
              onClick={handleClick}
            >
              <Icon className="size-5 sm:size-7 transition-transform duration-200 hover:scale-110" src={"/icon/shopping-cart.svg"} alt={"shopping-cart"}/>
            </button>
          </>
        )}
      </div>
      
      {/* Дополнительная кнопка */}
      {count > 0 && (
        <button className="flex items-center text-secondary text-sm sm:text-base font-normal font-gilroy mt-4 sm:mt-6 hover:text-blue-700 transition-colors duration-200">
          Добавить в <Icon className="size-2 ml-1 sm:ml-2 transition-transform duration-200 hover:scale-125" src={"/icon/akar-icons_heart.svg"} alt={"heart"}/>
        </button>
      )}
    </div>
  )
}