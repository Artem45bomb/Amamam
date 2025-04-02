import {FC} from "react";
import {Product} from "@/components/home/Menu/Products/Product";
import Link from "next/link";


export const Products:FC = () => {
    return <div className={'flex flex-col border-t-2 border-blue-700 border-b-2 w-full'}>
        <div className={'flex w-full flex-nowrap h-64'}>
            <div className={'flex-1 border-blue-700 box-border'}>
                
            </div>
            <Product className={""} name={"Перец фаршированный"} price={4} backgroundSrc={"/png/product1.png"}/>
            <Product className={""} name={"Перец фаршированный"} price={4} backgroundSrc={"/png/product2.png"}/>
            <Product className={""} name={"Перец фаршированный"} price={4} backgroundSrc={"/png/product3.png"}/>
        </div>
        <div className={'flex w-full flex-nowrap h-64 border-t-2 border-blue-700'}>
            <Product name={"Перец фаршированный"} className={"border-r-2 border-blue-700"} price={4} backgroundSrc={"/png/product4.png"}/>
            <Product name={"Перец фаршированный"}  price={4} backgroundSrc={"/png/product5.png"}/>
        </div>
    </div>
}