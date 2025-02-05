"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";


export default function Contacts(){
    const router = useRouter();

    const handleBack = () => {
        router.back()
    }

    return <div style={{backgroundImage:`url("/png/bg-product.png")`,backgroundRepeat:'no-repeat'}} className={"bg-cover pt-10"}>
        <div className={"w-full px-20"} >
            <button className={"relative w-6 h-6"} onClick={handleBack}>
                <Image fill src={"/icon/chevron-left.svg"} alt={"back"}/>
            </button>
            <div className={"px-40 flex flex-col gap-20 pt-14 pb-24"}>
                <div className={"flex flex-col gap-6 font-gilroy "}>
                    <h2 className={"font-semibold text-4xl text-primary"}>
                        КОНТАКТЫ
                    </h2>
                    <p className={"font-normal text-secondary text-sm"} >для связи с нами Вы можете воспользоваться
                        следующими способами</p>
                </div>
                <div className={"flex flex-col gap-6 font-gilroy  border-b-[0.5px] border-neutral-700 pb-10"}>
                    <h2 className={"font-semibold text-4xl text-primary"}>
                        Минск, Кальварийская, 21, 1 этаж
                    </h2>
                    <p className={"font-normal text-secondary text-sm"} >всегда ждем вас</p>
                    <button className={"bg-blue-700 text-center text-white font-bold text-base w-56 py-4"}>
                        ПОЗВОНИТЬ
                    </button>
                </div>
                <div className={"flex flex-col gap-6 font-gilroy  border-b-[0.5px] border-neutral-700 pb-10"}>
                    <h2 className={"font-semibold text-4xl text-primary"}>
                        +375 44 774 51 09
                    </h2>
                    <p className={"font-normal text-secondary text-sm"} >8:00 - 21:00</p>
                </div>
                <div className={"flex flex-col gap-6 font-gilroy  border-b-[0.5px] border-neutral-700 pb-10"}>
                    <h2 className={"font-semibold text-4xl text-primary"}>
                        amamam@gmail.com
                    </h2>
                    <p className={"font-normal text-secondary text-sm"} >круглосуточно</p>
                </div>
                <div className={"flex flex-col gap-6 font-gilroy  border-b-[0.5px] border-neutral-700 pb-10"}>
                    <h2 className={"font-semibold text-4xl text-primary"}>
                        Режим работы <br/>8:00 - 21:00
                    </h2>
                    <p className={"font-normal text-secondary text-sm"} >всегда ждем вас</p>
                </div>
            </div></div>

        <div className={"w-full aspect-[3/1] relative"}>
            <Image className={"bg-cover"} src={"/map.jpg"} alt={"map"} fill/>
        </div>
    </div>
}