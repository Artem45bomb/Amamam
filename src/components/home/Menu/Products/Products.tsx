import {FC} from "react";
import {Product} from "@/components/home/Menu/Products/Product";
import Link from "next/link";


export const Products:FC = () => {
    return <div className={'flex flex-col border-t border-blue-700 border-b mx-10 sm:mx-20 lg:mx-0'}>
        <div className={'grid lg:grid-cols-4 sm:grid-cols-2 w-full'}>
            <div className={'flex-1 flex flex-col justify-between p-5 border-blue-700 border h-64'}>
                <h3 className={'font-nauryzRedKeds text-primary font-bold text-3xl md:text-4xl lg:text-3xl xl:text-4xl md:ml-4 xl:ml-6 mt-6'}>ЧТО МЫ ГОТОВИМ?</h3>
                <Link href={"/catalog"} className={'text-secondary font-gilroy font-normal text-base md:ml-6'}>Каталог {">"}</Link>
            </div>
            <Product className={""} name={"Перец фаршированный"} price={4} backgroundSrc={"/png/product1.png"}/>
            <Product className={""} name={"Перец фаршированный"} price={4} backgroundSrc={"/png/product2.png"}/>
            <Product className={""} name={"Перец фаршированный"} price={4} backgroundSrc={"/png/product3.png"}/>
        </div>
        <div className={'grid sm:grid-cols-2 flex-wrap h-64 border-blue-700'}>
            <Product name={"Перец фаршированный"} className={""} price={4} backgroundSrc={"/png/product4.png"}/>
            <Product name={"Перец фаршированный"}  price={4} backgroundSrc={"/png/product5.png"}/>
        </div>
    </div>
}