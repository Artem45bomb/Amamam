"use client";
import {FormUser} from "@/components/profile/sections/FormUser";
import {Wishlist} from "@/components/profile/sections/Wishlist";
import {Orders} from "@/components/profile/sections/Orders";
import {SectionOrderView} from "@/components/profile/sections/SectionOrderView";


export enum Section{
    Form,
    Orders,
    Wishlist,
    Order
}

export interface ChangeSection{
    onChange:(section:Section)=>void;
}

export type SectionType = typeof FormUser | typeof Wishlist | typeof Orders | typeof SectionOrderView;
export const SectionInfo :Record<Section, SectionType> = {
    [Section.Form]:FormUser,
    [Section.Orders]:Orders,
    [Section.Wishlist]:Wishlist,
    [Section.Order]:SectionOrderView,
}