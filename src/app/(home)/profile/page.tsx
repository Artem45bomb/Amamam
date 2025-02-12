"use client";
import {useGetUserProfileQuery} from "@/services/user/get-user-profile";
import {FormEventHandler, useCallback, useMemo, useState} from "react";
import {useUpdateProfile} from "@/hooks/user/useUpdateProfile";
import {SectionUser} from "@/components/profile/sections/SectionUser";
import {Section, SectionInfo} from "@/components/profile/sections/types";


export default function Profile(){
    const {data} = useGetUserProfileQuery();
    const [section,setSection] = useState(Section.Form);
    const [order,setOrder] = useState<string>();
    const updateProfile = useUpdateProfile()

    const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
        async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        if(data){
            const nameFirst = (formData.get("nameFirst")?.toString() ?? '') as string;
            const nameLast = (formData.get("nameLast")?.toString() ?? '') as string;
            const surname = (formData.get("surname")?.toString() ?? '') as string;
            const photo = (formData.get("photo")?.toString() ?? '') as string;
            const gender = (formData.get("gender")?.toString() ?? '') as Gender;
            const email = (formData.get("email")?.toString() ?? '') as string;
            const phone = (formData.get("phone")?.toString() ?? '') as string;
            const dateOfBirth = (formData.get("dateOfBirth")?.toString() ?? '') as string;

            await updateProfile(prev => ({
                ...prev,
                nameLast,
                nameFirst,
                gender,
                email,
                photo,
                surname,
                phone,
                dateOfBirth
            }))
        }
    },[data,updateProfile])

    const handleChangeSection = (section:Section) => {
        setSection(section)
        if(section === Section.Order && section !== Section.Order)
            setOrder(undefined);
    }

    const handleChangeOrderView = (orderId:string) => {
        console.log(orderId);
        setOrder(orderId);
        setSection(Section.Order);
    }

    const SectionView = useMemo(()=>SectionInfo[section],[section])

    if (!data)
        return null


    return <form className="flex sm:gap-10 md:gap-20 xl:gap-28 text-black py-24 pl-14 text-left" onSubmit={handleSubmit}>
        <SectionUser {...data} onChange={handleChangeSection} currentSection={section}/>
        <SectionView onChangeOrderView={handleChangeOrderView} orderId={order ?? ''} {...data} onChange={handleChangeSection} />
    </form>
}