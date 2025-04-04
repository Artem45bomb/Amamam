import {FC} from "react";
import {Footer} from "@/components/home/Menu/Footer";


export const Menu:FC = () => {
    return <div className={"pt-16 pb-2 sm:pb-7 flex flex-col gap-16"}>
        <div className={'mx-auto flex flex-col items-center gap-6 sm:gap-12 w-full sm:w-[47%] sm:min-w-166  text-center px-10 sm:px-20'}>
            <h2 className={'font-bold text-3xl sm:text-5xl text-primary font-nauryzRedKeds sm:min-w-166'}>ам ам ам mеню</h2>
            <p className={'text-sm sm:text-base font-normal text-secondary font-gilroy sm:min-w-166'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
        <Footer/>
    </div>
}