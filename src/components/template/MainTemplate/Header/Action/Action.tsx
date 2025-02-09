import {BtnIcon} from "@/components/ui/assets/BtnIcon";
import Image from "next/image";
import {UserAction} from "@/components/template/MainTemplate/Header/Action/User";


export const Action = () => {
    return <div className={'flex gap-5 items-center'}>
        <BtnIcon>
            <Image src={"/icon/heart.svg"} fill alt={"heart icon"}/>
        </BtnIcon>
        <BtnIcon>
            <Image src={"/icon/search.svg"} fill alt={"search icon"}/>
        </BtnIcon>
        <UserAction/>
        <BtnIcon>
            <Image src={"/icon/shopping-cart.svg"} fill alt={"shopping-cart icon"}/>
        </BtnIcon>
    </div>
}