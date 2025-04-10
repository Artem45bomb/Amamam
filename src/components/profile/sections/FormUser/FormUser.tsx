import {FormInput} from "@/components/ui/organizm/form";
import {FormDateInput} from "@/components/ui/organizm/form/FormDateInput";
import {BtnRation} from "@/components/ui/assets/BtnRation";
import {BtnAction} from "@/components/ui/assets/BtnAction";
import { Props } from "./types";
import {FC, useEffect, useState} from "react";

export const FormUser:FC<Props> = ({...data}) => {
    const [gender, setGender] = useState<Gender>(data?.gender ?? "NONE");

    useEffect(() => {
        setGender(data?.gender ?? "NONE");
    },[data?.gender])

    return <section className="w-full flex flex-col gap-28 items-start">
        <h2 className={"font-bold text-5xl font-nauryzRedKeds text-blue-700"}>мой профиль</h2>
        <div className="w-[39vw] flex flex-col gap-14">
            <FormInput placeholder={"Имя"} name={"first_name"} defaultValue={data.first_name}/>
            <FormInput placeholder={"Фамилия"} name={"last_name"} defaultValue={data.last_name}/>
            <FormInput placeholder={"Отчество"} name={"username"} defaultValue={data.username}/>
            <div className={"flex gap-16 items-center text-secondary"}>
                <input hidden name={"gender"} value={gender}/>
                <div className={"flex items-center gap-3"}>
                    <BtnRation type={"button"} onClick={()=>setGender("MALE")} active={gender === "MALE"}/>
                    <span className={"text-nowrap"}>{"мужчина"}</span>
                </div>
                <div className={"flex items-center gap-3"}>
                    <BtnRation type={"button"} onClick={()=>setGender("FEMALE")} active={gender === "FEMALE"}/>
                    <span className={"text-nowrap"}>{"женщина"}</span>
                </div>
            </div>
            <FormDateInput placeholder={"Дата рождения"} name={"date_of_birth"} defaultValue={data.date_of_birth ?? ''}/>
            <FormInput placeholder={"Город"} name={"city"} defaultValue={data.city ?? ''}/>
            <FormInput placeholder={"Номер телефона"} name={"phone"} defaultValue={data.phone}/>
            <FormInput placeholder={"email"} name={"email"} defaultValue={data.email}/>

            <BtnAction disabled={false} type={"submit"} className={"font-bold font-gilroy text-xl"} black>
                сохранить
            </BtnAction>
        </div>
    </section>
}