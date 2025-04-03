"use client";
import {Menu} from "@/components/home/Menu";
import {OrderProduct} from "@/components/home/slider/OrderProduct/OrderProduct";
import {Questions} from "@/components/home/Questions";
import {InInstagram} from "@/components/home/InInstagram";


export default function Home() {
  return (
      <div style={{backgroundImage:`url("/png/bg-product.png")`,backgroundRepeat:'repeat'}} className={'bg-background'}>
        <div className={'w-full lg:px-20 lg:pt-16 md:min-h-[35rem] '}>
            <OrderProduct items={[{id:"image;9",srcImage:"/png/product4.png"},{id:"image;10",srcImage:"/png/product5.png"}]} className={'min-w-full aspect-[20/9] '}/>
        </div>
        <Menu/>
        <InInstagram className=""/>
        <Questions/>
      </div>);
}
