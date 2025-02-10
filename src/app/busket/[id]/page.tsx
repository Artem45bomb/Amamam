"use client";

import { useRouter } from "next/navigation";
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

export default function ProductCard() {
  const router = useRouter();
  const searchParams = useSearchParams();

    const imgPath = searchParams.get("imgPath");
    const stars = searchParams.get("stars");
    const price = searchParams.get("price");
    const describe = searchParams.get("describe");
    const type = searchParams.get("type");
    const TagCard = searchParams.get("TagCard");
  const [count, setCount] = useState(0)
  const listPathes = ["/png/cookiesBusket.jpg", "/png/ChinaSoup.jpg", "/png/product1.png"]

  const handleClickPlus = () => {
    setCount(count+1);
  };

  const handleClickMinus = () => {
    setCount(count - 1)
  }

  
  return (

    <div className="">
        <ProductPath path={`Каталог / Еда / Бакалея / ${describe}`}/>

        <div className="flex">
          <ProductImages listPathes={listPathes}/>
          <DetailsProduct count={count} handleClickMinus={handleClickMinus} handleClickPlus={handleClickPlus} isHasChoose={true}/>
        </div>


        <div className="mx-20 mt-24">
          <div className="flex justify-end">
            <DescribeProduct/>
          </div>
        </div>

        <div className="mt-24 mx-11 sm:ml-20 sm:mr-[90px]">
          <p className="font-bold text-2xl sm:text-5xl font-nauryzRedKeds mb-14 text-blue-700">ВАМ ПРИГОДИТЬСЯ</p>
          <Recomendations list={list1}/>
        </div>
        <a href="#" className="block text-center text-primary text-xl font-nauryzRedKeds mt-16 md:mt-[136px] mb-20 font-bold">
          СМОТРЕТЬ ВСЕ
        </a>
    </div>
  );
}