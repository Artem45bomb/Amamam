import {Props} from "./types";
import {FC, useState} from "react";
import {cn} from "@/utils/style";


export const Question: FC<Props> = ({title, text}) => {
    const [active, setActive] = useState(false);

    return <div className={'w-full border-b border-secondary pb-10 font-gilroy'}>
        <div className={cn('flex items-center justify-between transition-all', active ? "mb-12" : "")}>
            <h2 className={'font-semibold text-3xl text-black'}>{title}</h2>
            <button onClick={() => setActive(prev => !prev)}
                    className={cn('px-2 py-3 transition-all', active ? "border border-blue-700 rounded-md" : "")}>
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("transition-all",active ? 'rotate-180' :'')}>
                    <path d="M16.5498 8.75L9.0498 1.25L1.5498 8.75" stroke={active? "#0033D9": '#000000'} strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            </button>
        </div>
        <p className={cn("font-normal text-[1.1rem] transition-all", active ? "" : "opacity-0 h-0 text-[0rem]")}>{text}</p>
    </div>
}