"use client";
import {useGetUserProfileQuery} from "@/services/user/get-user-profile";
import {FormEventHandler, useCallback, useMemo, useState} from "react";
import {useUpdateProfile} from "@/hooks/useUpdateProfile";
import {SectionUser} from "@/components/profile/sections/SectionUser";
import {Section, SectionInfo} from "@/components/profile/sections/types";
import {useProfileUpdateMutation} from "@/services/profile/mutatian";

export default function Profile(){
    const [section,setSection] = useState(Section.Form);
    const [order,setOrder] = useState<string>();
    const {data} = useGetUserProfileQuery();
    const updateProfile = useProfileUpdateMutation()
    const updateSession = useUpdateProfile()

    const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
        async (event) => {
        event.preventDefault();
        console.log(1)

        const formData = new FormData(event.currentTarget);
        if(data){
            const dateOfBirth = formData.get("date_of_birth")?.toString();
            const updateData: UserUpdateData = {
                first_name: formData.get("first_name")?.toString() ?? '',
                last_name: formData.get("last_name")?.toString() ?? '',
                email: formData.get("email")?.toString() ?? '',
                phone: formData.get("phone")?.toString() ?? '',
                gender: formData.get("gender")?.toString() as Gender ?? "NONE",
                date_of_birth: dateOfBirth ?? '',
                city: formData.get("city")?.toString() ?? '',
                delivery_address: formData.get("delivery_address")?.toString() ?? '',
                delivery_postal_code: formData.get("delivery_postal_code")?.toString() ?? '',
                delivery_country: formData.get("delivery_country")?.toString() ?? ''
            };
            const res = await updateProfile.mutateAsync(updateData);
            await updateSession(res);
        }
    },[data, updateProfile,updateSession])

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