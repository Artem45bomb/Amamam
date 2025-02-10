"use client";
import {BtnIcon} from "@/components/ui/assets/BtnIcon";
import Image from "next/image";
import {FormEventHandler, useCallback, useState} from "react";
import {FormInput} from "@/components/ui/organizm/form";
import {BtnAction} from "@/components/ui/assets/BtnAction";
import {useLoginMutation} from "@/services/login";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";


export const UserAction = () => {
    const {status} = useSession();
    const [isVerifiedEmail, setIsVerifiedEmail] = useState<string>();
    const {mutateAsync} = useLoginMutation();
    const router = useRouter();
    const [show,setShow] = useState(false)

    const handleClose = () => {
        setShow(false)
        setIsVerifiedEmail("")
    }

    const handleProfile = () => {
        if (status === "authenticated")
            router.push("/profile");
        setShow(true)
    }

    const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if(!isVerifiedEmail) {
            const phone = (formData.get("phone")?.toString() ?? '') as string;
            const email = (formData.get("email") ?? '')?.toString() as string;
            setIsVerifiedEmail(email);
        }
        else {
            const code = (formData.get("code") ?? '')?.toString() as string;
            await mutateAsync({username:isVerifiedEmail,password:code})
            router.push("/profile");
        }
    },[mutateAsync,isVerifiedEmail])


    return <div className="relative">
        <BtnIcon onClick={handleProfile}>
            <Image src={"/icon/user.svg"} fill alt={"user icon"}/>
        </BtnIcon>
        {show && status !== "authenticated" && <div className={"fixed bg-[#9F9F9F] bg-opacity-50 z-20 top-0 left-0 w-full h-full"}> </div>}
        {show && status !=="authenticated" &&  <div className="fixed z-30 w-full h-full top-0 left-0">
            <div className="bg-white border-l border-l-blue-700 w-3/4 h-full ml-auto text-black">
                <div className="flex flex-col h-full pt-[12%] pb-[9%] justify-between pl-[22%] pr-14 gap-2">
                    <div className={"flex flex-col gap-14 h-full w-full"}>
                        <button className="relative w-7 h-7 ml-auto" onClick={handleClose}>
                            <Image fill src={"/icon/x.svg"} alt={"close login"}/>
                        </button>
                        <form className="flex flex-col font-gilroy text-left w-3/5" onSubmit={handleSubmit}>
                            <h2 className={"font-semibold text-3xl"}>ВОЙТИ ИЛИ ЗАРЕГЕСТРИРОВАТЬСЯ</h2>
                            <p className={"text-2xl font-normal mb-[6vh] mt-10"}>Пришлём письмо на указанную электронную почту. Введите код
                                из письма.</p>
                            <div className={"flex flex-col gap-10 w-full"}>
                                {!isVerifiedEmail && <>
                                    <FormInput input={"phone"} options={{phone:{inputProps:{name:"phone",id:"phone"}}}}/>
                                    <FormInput placeholder={"email"} name="email" id={"email"}/>
                                </>
                                }
                                {isVerifiedEmail && <FormInput placeholder={"Введите код"} name="code" id={"code"}/>}
                            </div>
                            <BtnAction type={"submit"} className={"mt-[10vh] font-bold font-gilroy text-xl"} black>
                                {isVerifiedEmail ? "отправить" :"получить код"}
                            </BtnAction>
                        </form>
                    </div>

                    <p className={"font-gilroy text-sm font-normal w-3/5"}>Нажимая на кнопку «Получить код», я даю согласие на
                        обработку своих персональных данных в соответствии
                        с политикой обработки персональных данных</p>
                </div>
            </div>
        </div>}
    </div>
}