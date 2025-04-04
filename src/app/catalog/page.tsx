"use client";
import { ProductCategories } from "@/components/home/catalog/ProductCategories";
import {Menu} from "@/components/home/Menu";
import {InInstagram} from "@/components/home/InInstagram";
import {Questions} from "@/components/home/Questions";


export default function Catalog(){
    return (
        <div className={'bg-background'}>
            <ProductCategories/>
            <Menu/>
            <InInstagram/>
            <Questions/>
        </div>

    )
}