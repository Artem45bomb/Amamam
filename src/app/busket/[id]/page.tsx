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
import {v4 as uuidv4} from 'uuid'

import { mokeList } from "@/app/test";
import Cart from "@/components/home/busket/Cart";
import { InInstagram } from "@/components/home/InInstagram";

export default function ProductCard() {
  const params = useParams<{id:string}>()
  const listPathes = ["/png/cookiesBusket.jpg", "/png/ChinaSoup.jpg", "/png/product1.png"]

  const [isActiveCart, setIsActiveCart] = useState(false);

  const mainProduct = mokeList.find((e)=>e.id.toString() == params.id)
  
  function handleClickCart(){
    setIsActiveCart(!isActiveCart)
  }

  const [count, setCount] = useState(0)


  const handleClickPlus = () => {
    setCount(count+1);
  };
  
  const handleClickMinus = () => {
    if (count > 0 ) setCount(count - 1)
  }

  return (

    <div className="">
      {/* Это вот корзина, которая тебе нужна, Темик для оформления заказа */}
      <Cart onClickCart={handleClickCart} mainProduct={mainProduct} onClickMinus={handleClickMinus} onClickPlus={handleClickPlus} count={count} isActiveCart={isActiveCart}/>
      {/* Это вот корзина, которая тебе нужна, Темик для оформления заказа */}

        <div className={`top-0 fixed w-screen h-screen opacity-50 z-40 bg-secondary ${isActiveCart? '': 'hidden'}`}>

        </div>
        <ProductPath path={`Каталог / Еда / ${mainProduct?.typeProduct} / ${mainProduct?.name}`}/>

        
        <div className="flex flex-col lg:flex-row">
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


        <div className="mx-7 lg:mx-20 mt-6 md:mt-12 lg:mt-24">
          <div className="flex justify-end">
            <DescribeProduct name={mainProduct?.name} id={mainProduct?.id} describe={mainProduct?.describe} energyValue={mainProduct?.energyValue} nutritionalValue={mainProduct?.nutritionalValue}/>
          </div>
        </div>

        <div className="mt-12 sm:mt-24 mx-7 sm:ml-20 sm:mr-[90px]">
          <p className="font-bold text-2xl sm:text-5xl font-nauryzRedKeds mb-14 text-blue-700">ВАМ ПРИГОДИТЬСЯ</p>
          <Recomendations list={list1.slice(0,4)}/>
        </div>
        <a href="#" className="block text-center text-primary text-xl font-nauryzRedKeds mt-16 md:mt-[136px] mb-20 font-bold">
          СМОТРЕТЬ ВСЕ
        </a>
        {/* <InInstagram className={"my-24"}/> */}
    </div>
  );
}