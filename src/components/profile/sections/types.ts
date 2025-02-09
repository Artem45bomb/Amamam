"use client";
import {FormUser} from "@/components/profile/sections/FormUser";
import {Wishlist} from "@/components/profile/sections/Wishlist";


export enum Section{
    Form,
    Orders,
    Wishlist,
    Order
}

export interface ChangeSection{
    onChange:(section:Section)=>void;
}

export type SectionType = typeof FormUser ;
export const SectionInfo :Record<Section, SectionType> = {
    [Section.Form]:FormUser,
    [Section.Orders]:FormUser,
    [Section.Wishlist]:Wishlist,
    [Section.Order]:FormUser,
}