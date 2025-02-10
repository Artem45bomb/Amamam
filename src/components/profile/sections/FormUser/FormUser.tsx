import {FormInput} from "@/components/ui/organizm/form";
import {BtnRation} from "@/components/ui/assets/BtnRation";
import {BtnAction} from "@/components/ui/assets/BtnAction";
import { Props } from "./types";
import {FC, useEffect, useState} from "react";


export const FormUser:FC<Props> = ({...data}) => {
    const [gender, setGender] = useState<Gender>();

    useEffect(() => {
        setGender(data?.gender ?? "MALE");
    },[data?.gender])


    return <section className="w-full flex flex-col gap-28 items-start">
        <h2 className={"font-bold text-5xl font-nauryzRedKeds text-blue-700"}>мой профиль</h2>
        <div className="w-[39vw] flex flex-col gap-14">
            <FormInput placeholder={"Имя"} name={"nameFirst"} defaultValue={data.nameFirst}/>
            <FormInput placeholder={"Фамилия"} name={"nameLast"} defaultValue={data.nameLast}/>
            <FormInput placeholder={"Отчество"} name={"surname"} defaultValue={data.surname}/>
            <div className={"flex gap-16 items-center text-secondary"}>
                <input hidden name={"gender"} value={gender}/>
                <div className={"flex items-center gap-3"}>
                    <BtnRation type={"button"} onClick={()=>setGender("MALE")} active={gender == "MALE"}/>
                    <span className={"text-nowrap"}>{"мужчина"}</span>
                </div>
                <div className={"flex items-center gap-3"}>
                    <BtnRation type={"button"} onClick={()=>setGender("FEMALE")} active={gender == "FEMALE"}/>
                    <span className={"text-nowrap"}>{"женщина"}</span>
                </div>

            </div>
            <FormInput placeholder={"Дата рождения"} name={"dateOfBirth"} defaultValue={data.city}/>
            <FormInput placeholder={"Город"} name={"city"} defaultValue={data.phoneNumber}/>
            <FormInput placeholder={"Номер телефона"} name={"phone"} defaultValue={data.email}/>
            <FormInput placeholder={"email"} name={"email"} defaultValue={data.email}/>

            <BtnAction type={"submit"} className={"font-bold font-gilroy text-xl"} black>
                сохранить
            </BtnAction>
        </div>
    </section>
}