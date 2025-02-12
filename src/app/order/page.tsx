"use client"

import { Icon } from "@/components/ui/assets/Icon/Icon";
import { useState } from "react";



export default function Order(){
    const [contacts, setContacts]= useState(false)
    const [delivery, setDelivery]= useState(false)
    const [payment, setPayment] = useState(false)
    function handleClickContacts(){
        setContacts(!contacts)
    }

    function handleClickDelivery(){
        setDelivery(!delivery)
    }

    function handleClickPayment(){
        setPayment(!payment)
    }



    return (
        <div>
            <button className="ml-20 mt-9 mb-14"><Icon src={'/icon/arrow-down.svg'} alt="back" className="w-6 h-6 rotate-90"/></button>

            <div className="flex justify-between ml-28 mr-16">
                <div className="w-[590px]">
                    {/* КОНТАКТНЫЕ ДАННЫЕ, АРТЕМ */}
                    <div className="mb-20">
                        <div className="ml-24">
                            <button className="flex justify-between items-center w-full" onClick={handleClickContacts}>
                                <p className="font-medium text-3xl font-gilroy text-primary">контактные данные</p>
                                <Icon src={'/icon/arrow-down.svg'} alt="back" className="w-6 h-6"/>
                            </button>
                            <div className={`${contacts?'hidden':''} mt-5`}>
                                <p className="text-secondary text-xs font-gilroy mb-10">ввести данные</p>
                                <div className="w-full border border-secondary"></div>
                            </div>
                        </div>
                        <div className={`mt-10 ${!contacts ? 'hidden':''}`}>
                            <div className="flex gap-10">
                                <p className="text-end text-primary text-base font-gilroy">ваши<br/>данные</p>
                                <div className="flex flex-col gap-7 flex-1 text-secondary">
                                    <div className="">
                                        <p className="text-xs mb-1">фамилия</p>
                                        <input type="text" className="bg-transparent border-b border-b-secondary w-full text-primary"/>
                                    </div>
                                    <div className="mb-8">
                                        <p className="text-xs mb-1">имя</p>
                                        <input type="text" className="bg-transparent border-b border-b-secondary w-full text-primary"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-8 justify-between">
                                <p className="text-end text-primary text-base font-gilroy">контакты</p>
                                <div className="flex flex-col gap-x-7 flex-1 text-secondary">
                                    <p className="text-xs mb-1">+375 (__) ___ - __ -  __</p>
                                    <input type="text" className="bg-transparent border-b border-b-secondary w-full text-primary"/>
                                    <div className="flex gap-2 my-6">
                                        <input type="checkbox" name="checkbox" id="rule" className="w-3 h-3"/>
                                        <label htmlFor="rule">я ознакомился и согласен с Политикой обработки персональных данных и пользовательским соглашением</label>
                                    </div>
                                    <div className="flex gap-2">
                                        <input type="checkbox" name="checkbox" id="ad" className="w-3 h-3"/>
                                        <label htmlFor="ad">я даю согласие на получение рекламных рассылок в виде e‑mail sms, 
                                        push или в мессенджерах</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* СПОСОБО ПОЛУЧЕНИЯ, АРТЕМ */}
                    <div className="mb-20">
                        <div className="ml-24">
                            <button className="flex justify-between items-center w-full" onClick={handleClickDelivery}>
                                <p className="font-medium text-3xl font-gilroy text-primary">способ получения</p>
                                <Icon src={'/icon/arrow-down.svg'} alt="back" className="w-6 h-6"/>
                            </button>
                            <div className={`${delivery?'hidden':''} mt-5`}>
                                <p className="text-secondary text-xs font-gilroy mb-10">выбрать способ доставки</p>
                                <div className="w-full border border-secondary"></div>
                            </div>
                        </div>
                        <div className={`mt-10 ${!delivery ? 'hidden':''}`}>
                            <div className="flex gap-10">
                                <p className="text-end text-primary text-base font-gilroy">способ<br/>доставки</p>
                                <div className="flex flex-col gap-7 flex-1 text-secondary">
                                    <div className="flex justify-between border-b border-b-secondary">
                                        <div className="flex gap-3">
                                            <div><input type="radio" name="delivery" id="courier"/></div>
                                            <label htmlFor="courier">
                                                <p className="text-base font-gilroy text-primary">курьер</p>
                                                <p className="text-base font-gilroy text-secondary">доставит в указанный срок</p>
                                            </label>
                                        </div>
                                        <p className="text-base font-bold font-gilroy">5 BYN</p>
                                    </div>
                                    <div className="flex justify-between border-b border-b-secondary">
                                        <div className="flex gap-3">
                                            <div><input type="radio" name="delivery" id="self" className={``}/></div>
                                            <label htmlFor="self">
                                                <p className="text-base font-gilroy text-primary">самовызов</p>
                                                <p className="text-base font-gilroy text-secondary">из лавки вкусностей amamam.by</p>
                                            </label>
                                        </div>
                                        <p className="text-base font-bold font-gilroy">бесплатно</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-8 justify-between">
                                <p className="text-end text-primary text-base font-gilroy">контакты</p>
                                <div className="flex flex-col gap-x-7 flex-1 text-secondary">
                                    <p className="text-xs mb-1">+375 (__) ___ - __ -  __</p>
                                    <input type="text" className="bg-transparent border-b border-b-secondary w-full text-primary"/>
                                    <div className="flex gap-2 my-6">
                                        <input type="checkbox" name="checkbox" id="rule" className="w-3 h-3"/>
                                        <label htmlFor="rule">я ознакомился и согласен с Политикой обработки персональных данных и пользовательским соглашением</label>
                                    </div>
                                    <div className="flex gap-2">
                                        <input type="checkbox" name="checkbox" id="ad" className="w-3 h-3"/>
                                        <label htmlFor="ad">я даю согласие на получение рекламных рассылок в виде e‑mail sms, 
                                        push или в мессенджерах</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* СПОСОБО ОПЛАТЫ, АРТЕМ */}
                    <div className="mb-20">
                        <div className="ml-24">
                            <button className="flex justify-between items-center w-full" onClick={handleClickPayment}>
                                <p className="font-medium text-3xl font-gilroy text-primary">способ оплаты</p>
                                <Icon src={'/icon/arrow-down.svg'} alt="back" className="w-6 h-6"/>
                            </button>
                            <div className={`${payment?'hidden':''} mt-5`}>
                                <p className="text-secondary text-xs font-gilroy mb-10">выбрать способ оплаты</p>
                                <div className="w-full border border-secondary"></div>
                            </div>
                        </div>
                        
                    </div>

                </div>
                <div className="w-[441px]">

                </div>
            </div>
        </div>
    )
}