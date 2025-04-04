"use client";

import ProductPath from "@/components/home/busket/ProductPath";
import {InInstagram} from "@/components/home/InInstagram";
import Image from "next/image";


export default function About() {
    return <div className={"flex flex-col items-center-center text-secondary pt-2 sm:pt-8"}>
        <ProductPath path="Главная / О нас"/>
        <div className={"flex-1 w-full items-center flex flex-col px-5 sm:px-10 md:px-20"}>
            {/* <p className={"font-gilroy text-sm font-normal mr-auto"} >Главная / О нас</p> */}
            <div style={{backgroundImage:`url("/png/bg-product.png")`,backgroundRepeat:'no-repeat'}} className={"bg-cover w-full relative aspect-[4/2] sm:aspect-[4/1] mb-14 bg-blue-700 overflow-hidden"}>
                <div className={"absolute -rotate-[15deg] h-3/5 aspect-[7/1] -left-[15%] -top-8"}>
                    <Image src={"/icon/amamam.svg"} fill alt={"text"}/>
                </div>
                <div className={"absolute -rotate-[15deg] h-3/5 aspect-[7/1] left-8 -bottom-2"}>
                    <Image src={"/icon/amamam.svg"} fill alt={"text"}/>
                </div>
            </div>
        </div>
        <div className={"flex-1 w-full items-center flex flex-col px-7 sm:px-20"}>
            <h2 className={"text-5xl font-bold font-nauryzRedKeds text-blue-700"}>О нас</h2>
            <div className={"max-w-96 md:max-w-[75%] lg:max-w-[65%] xl:max-w-[55%] 2xl:max-w-[45%] flex flex-col gap-10 mt-6 sm:mt-12"}>
                <p >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
            </div>
        </div>
        <InInstagram className={"my-24"}/>
    </div>
}