"use client";

import { useParams, useRouter } from "next/navigation";
import DescribeProduct from "@/components/home/busket/DescribeProduct";
import DetailsProduct from "@/components/home/busket/DetailsProduct";
import MainInfoProduct from "@/components/home/busket/DetailsProduct";
import ProductImages from "@/components/home/busket/ProductImages";
import ProductPath from "@/components/home/busket/ProductPath";
import Recomendations from "@/components/home/busket/Recomendations";
import { Icon } from "@/components/ui/assets/Icon/Icon";
import { useState } from "react";
import { list1 } from "@/app/test";
import { useSearchParams } from "next/navigation";
import { log } from "console";

import { mokeList } from "@/app/test";

export default function ProductCard() {


  const router = useRouter();
  
  const params = useParams<{id:string}>()
  const listPathes = ["/png/cookiesBusket.jpg", "/png/ChinaSoup.jpg", "/png/product1.png"]

  const [isActiveCart, setIsActiveCart] = useState(false);

  const mainProduct = mokeList.find((e)=>e.id.toString() == params.id)
  
  function handleClickCart(){
    setIsActiveCart(!isActiveCart)
    console.log(isActiveCart)
  }

  const [count, setCount] = useState(0)


  const handleClickPlus = () => {
    setCount(count+1);
  };
  
  const handleClickMinus = () => {
    if (count > 0 ) setCount(count - 1)
  }

  function handleMakeOrder(){
    
  }

  return (

    <div className="">
      {/* Это вот корзина, которая тебе нужна, Темик для оформления заказа */}
        <div className={`fixed w-[940px] h-screen top-0 right-0 z-50 bg-[#f7f7f7] px-16 font-gilroy text-primary overflow-y-scroll ${isActiveCart? '': 'hidden'}`}>
          <div className=" pt-24 flex justify-between  items-center mb-6">
            <h2 className="text-4xl font-semibold">КОРЗИНА</h2>
            <button onClick={handleClickCart}><Icon alt="cross" className="w-7 h-7" src={'/icon/x.svg'}/></button>

          </div>
          <div className="w-full h-0.5 bg-blue-700"></div>
          <p className="mt-6 mb-12 text-secondary text-base">сумма доставки 10 BYN</p>

          <div className="flex gap-11">
            <div>
              <Icon src={mainProduct !== undefined?mainProduct?.imgs[0]:''} alt="dish" className="w-72 h-72"/>
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div className="">
                <p className="text-2xl mb-7">{mainProduct?.name}</p>
                <p className="text-3xl">{mainProduct?.countProduct} шт. / {mainProduct?.weight} г.</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-end">
                  <button className="text-blue-700" onClick={handleClickMinus}><Icon className="w-8 h-8" src={'/icon/Group 258.svg'} alt="minus"/></button>
                  <p className="text-2xl w-16 text-center">{count}</p>
                  <button className="text-blue-700" onClick={handleClickPlus}><Icon className="w-8 h-8 rotate-180" src={'/icon/Group 258.svg'} alt="plus"/></button>
                </div>
                <p className="text-end text-4xl font-black mt-7">{mainProduct!==undefined?mainProduct?.price*count:''} BYN</p>
              </div>
            </div>
          </div>

          <p className="text-3xl font-bold mt-11 mb-8">сумма заказа</p>
          <div className="flex items-end">
            <p className="text-xl">стоимость продуктов</p>
            <div className="flex-1 border-dotted border-b-2 border-black mx-4"></div>
            <p className="text-end font-bold text-xl">{mainProduct!==undefined?mainProduct?.price*count:''} BYN</p>
          </div>
          <div className="text-secondary flex items-end mt-5">
            <p className="text-xl">скидка</p>
            <div className="flex-1 border-dotted border-b-2 border-secondary mx-4"></div>
            <p className="text-end font-bold text-xl">0 BYN</p>
          </div>
          <div className="flex items-center justify-between font-bold mt-11">
            <p className=" text-xl">ИТОГО</p>
            <p className="text-4xl">{mainProduct!==undefined?mainProduct?.price*count:''} BYN</p>
          </div>
          <button className="flex mt-14 justify-center w-full bg-blue-700 items-center py-3 text-xl font-bold text-white">ОФОРМИТЬ ЗАКАЗ</button>

          <p className="mt-20 mb-12 font-nauryzRedKeds text-4xl text-blue-700">добавте пряностей</p>
          <Recomendations list={list1.slice(0,3)}/>
        </div>
      {/* Это вот корзина, которая тебе нужна, Темик для оформления заказа */}

        <div className={`top-0 fixed w-screen h-screen opacity-50 z-40 bg-secondary ${isActiveCart? '': 'hidden'}`}>

        </div>
        <ProductPath path={`Каталог / Еда / ${mainProduct?.typeProduct} / ${mainProduct?.name}`}/>

        <div className="flex">
          <ProductImages listPathes={mainProduct?.imgs}/>
          <DetailsProduct 
            id={mainProduct?.id}
            isHasChoose={false} 
            price={mainProduct?.price} 
            name={mainProduct?.name}
            countProd={mainProduct?.countProduct}
            weight={mainProduct?.weight}
            ingredients={mainProduct?.ingredients}
            stars={mainProduct?.stars}
            handleClick={handleClickCart}
            handleClickMinus={handleClickMinus}
            handleClickPlus={handleClickPlus}
            count={count}
          />
        </div>


        <div className="mx-20 mt-24">
          <div className="flex justify-end">
            <DescribeProduct name={mainProduct?.name} id={mainProduct?.id} describe={mainProduct?.describe} energyValue={mainProduct?.energyValue} nutritionalValue={mainProduct?.nutritionalValue}/>
          </div>
        </div>

        <div className="mt-24 mx-11 sm:ml-20 sm:mr-[90px]">
          <p className="font-bold text-2xl sm:text-5xl font-nauryzRedKeds mb-14 text-blue-700">ВАМ ПРИГОДИТЬСЯ</p>
          <Recomendations list={list1.slice(0,4)}/>
        </div>
        <a href="#" className="block text-center text-primary text-xl font-nauryzRedKeds mt-16 md:mt-[136px] mb-20 font-bold">
          СМОТРЕТЬ ВСЕ
        </a>
    </div>
  );
}