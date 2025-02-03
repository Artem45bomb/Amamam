import {FC} from "react";
import {Product} from "@/components/home/Menu/Products/Product";
import Link from "next/link";


export const Products:FC = () => {
    return <div className={'flex flex-col border-t-2 border-blue-700 border-b-2 w-full'}>
        <div className={'flex w-full flex-nowrap h-64'}>
            <div className={'flex-1 border-r-2 border-blue-700 h-full flex flex-col justify-between items-start pl-11 pb-5 pt-12'}>
                <h3 className={'font-nauryzRedKeds text-primary font-bold text-4xl'}>ЧТО МЫ ГОТОВИМ?</h3>
                <Link href={"/catalog"} className={'text-secondary font-gilroy font-normal text-base'}>Каталог {">"}</Link>
            </div>
            <Product className={"border-r-2 border-blue-700"} name={"Перец фаршированный"} price={4} backgroundSrc={"/png/product1.png"}/>
            <Product name={"Перец фаршированный"} price={4} backgroundSrc={"/png/product2.png"}/>
            <Product className={"border-l-2 border-blue-700"} name={"Перец фаршированный"} price={4} backgroundSrc={"/png/product3.png"}/>
        </div>
        <div className={'flex w-full flex-nowrap h-64 border-t-2 border-blue-700'}>
            <Product name={"Перец фаршированный"} className={"border-r-2 border-blue-700"} price={4} backgroundSrc={"/png/product4.png"}/>
            <Product name={"Перец фаршированный"}  price={4} backgroundSrc={"/png/product5.png"}/>
        </div>
    </div>
}