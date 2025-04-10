"use client";
import Image from "next/image";
import {DragDropFile} from "@/components/ui/organizm/DragDropFile";
import {signOut} from "next-auth/react";
import {Props} from "./types";
import {FC, useMemo, useRef, useState} from "react";
import {Section} from "@/components/profile/sections/types";
import {cn} from "@/utils/style";


export const SectionUser:FC<Props> = ({onChange,currentSection,...data}) =>{
    const fileRef = useRef<HTMLInputElement>(null);
    const [show,setShow]=useState(true);
    const [file, setFile] = useState<File>();

    const handleFileChange = (file: File) => {
        setFile(file);
    };

    const path = useMemo(() => (file ? URL.createObjectURL(file)  : data.avatar && show ? data.avatar : ''), [file,data,show]);


    return  <section>
        <div className={"flex flex-col gap-28 items-end font-gilroy text-right"}>
            <div className={"flex gap-2"}>

                <div className={"flex gap-6 items-start pt-[0.65rem]"}>
                    <div className={"capitalize text-black font-gilroy text-base"}>
                        <p className={data.first_name ? "":"text-secondary"}>{data.first_name ? data.first_name:"Имя"  }</p>
                        <p className={data.last_name ? "": "text-secondary"}>{data.last_name ?data.last_name:"Фамилия"}</p>
                    </div>
                    <div className={"w-32 aspect-square relative"}>
                        <input hidden name={"photo"} id={"photo"} value={path}/>
                        {path ?
                            <Image fill src={path} alt={"profile photo"}/>
                            : <DragDropFile inputRef={fileRef} onFileChange={handleFileChange} />
                        }
                    </div>

                </div>
                <button onClick={() => {
                    setFile(undefined);
                    setShow(false)}
                } className={"w-6 h-6 relative"}>
                    <Image fill src={"/icon/more-horizontal.svg"} alt={"more-icon"} />
                </button>
            </div>
            <ul className={"flex flex-col gap-5 items-end text-3xl"}>
                <button type={"button"} className={cn(currentSection === Section.Orders ? "text-blue-700" : "")} onClick={() => onChange(Section.Orders)}>Мои покупки</button>
                <button type={"button"} className={cn(currentSection === Section.Wishlist ? "text-blue-700" : "")} onClick={() => onChange(Section.Wishlist)}>Wishlist</button>
            </ul>
            <ul className={"flex flex-col gap-5 items-end text-left text-xl font-medium"}>
                <button className={"text-nowrap"} type={"button"}>Настройки уведомлений</button>
                <button type={"button"} onClick={() => signOut({redirect:true,callbackUrl:"/"})}>выйти</button>
            </ul>
        </div>

    </section>
}