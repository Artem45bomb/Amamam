"use client"

import { Icon } from "@/components/ui/assets/Icon/Icon";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { mokeList } from "@/app/test";
import { useRouter } from "next/navigation";

export default function Order(){
    const router = useRouter()
    const [contacts, setContacts]= useState(false)
    const [delivery, setDelivery]= useState(false)
    const [payment, setPayment] = useState(false)
    const [isCourier, setIsCourier] = useState(true);
    const [isGift, setIsGift] = useState(false)
    
    function handleClickContacts(){
        setContacts(!contacts)
    }

    function handleClickDelivery(){
        setDelivery(!delivery)
    }

    function handleClickPayment(){
        setPayment(!payment)
    }
    
    function handleCourier(){
        setIsCourier(!isCourier)
    }

    const params = useParams<{orderID:string}>()
    const sesData = sessionStorage.getItem(params.orderID)
    let parseSesData: any;
    if (sesData !== null) parseSesData = JSON.parse(sesData)

    const mainProduct = mokeList.find((e)=> e.id == parseSesData.id)
    
    return (
        <div className="px-4 md:px-0">
            {/* Back button */}
            <button className="ml-4 md:ml-20 mt-6 md:mt-9 mb-8 md:mb-14">
                <Icon 
                    src={'/icon/arrow-down.svg'} 
                    alt="back" 
                    className="w-6 h-6 rotate-90" 
                    onClick={()=> router.back()}
                />
            </button>

            <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-12 xl:gap-52 mx-4 md:mx-12 xl:ml-28 md:mr-12">
                {/* Left column - Form */}
                <div className="w-full lg:w-[590px]">
                    {/* Contact Information */}
                    <div className="mb-12 md:mb-20">
                        <div className="ml-0 md:ml-24">
                            <button 
                                className="flex justify-between items-center w-full" 
                                onClick={handleClickContacts}
                            >
                                <p className="font-medium text-xl md:text-3xl font-gilroy text-primary">
                                    контактные данные
                                </p>
                                <Icon 
                                    src={'/icon/arrow-down.svg'} 
                                    alt="back" 
                                    className={`w-6 h-6 transition-transform ${contacts ? 'rotate-180' : ''}`} 
                                />
                            </button>
                            <div className={`${contacts?'hidden':''} mt-3 md:mt-5`}>
                                <p className="text-secondary text-xs font-gilroy mb-6 md:mb-10">
                                    ввести данные
                                </p>
                                <div className="w-full border border-secondary"></div>
                            </div>
                        </div>
                        <div className={`mt-6 md:mt-10 ${!contacts ? 'hidden':''}`}>
                            <div className="flex gap-4 md:gap-10">
                                <p className="text-end text-primary text-sm md:text-base font-gilroy hidden sm:block">
                                    ваши<br/>данные
                                </p>
                                <div className="flex flex-col gap-4 md:gap-7 flex-1 text-secondary">
                                    <div className="">
                                        <p className="text-xs mb-1">фамилия</p>
                                        <input 
                                            type="text" 
                                            className="bg-transparent border-b border-b-secondary w-full text-primary py-1 md:py-0"
                                        />
                                    </div>
                                    <div className="mb-6 md:mb-8">
                                        <p className="text-xs mb-1">имя</p>
                                        <input 
                                            type="text" 
                                            className="bg-transparent border-b border-b-secondary w-full text-primary py-1 md:py-0"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-8 justify-between">
                                <p className="text-end text-primary text-sm md:text-base font-gilroy hidden sm:block">
                                    контакты
                                </p>
                                <div className="flex flex-col gap-x-4 md:gap-x-7 flex-1 text-secondary">
                                    <p className="text-xs mb-1">+375 (__) ___ - __ -  __</p>
                                    <input 
                                        type="text" 
                                        className="bg-transparent border-b border-b-secondary w-full text-primary py-1 md:py-0"
                                    />
                                    <div className="flex gap-2 my-4 md:my-6">
                                        <input type="checkbox" name="checkbox" id="rule" className="w-3 h-3 mt-1"/>
                                        <label htmlFor="rule" className="text-xs md:text-sm">
                                            я ознакомился и согласен с Политикой обработки персональных данных и пользовательским соглашением
                                        </label>
                                    </div>
                                    <div className="flex gap-2">
                                        <input type="checkbox" name="checkbox" id="ad" className="w-3 h-3 mt-1"/>
                                        <label htmlFor="ad" className="text-xs md:text-sm">
                                            я даю согласие на получение рекламных рассылок в виде e‑mail sms, 
                                            push или в мессенджерах
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Delivery Method */}
                    <div className="mb-12 md:mb-20">
                        <div className="ml-0 md:ml-24">
                            <button 
                                className="flex justify-between items-center w-full" 
                                onClick={handleClickDelivery}
                            >
                                <p className="font-medium text-xl md:text-3xl font-gilroy text-primary">
                                    способ получения
                                </p>
                                <Icon 
                                    src={'/icon/arrow-down.svg'} 
                                    alt="back" 
                                    className={`w-6 h-6 transition-transform ${delivery ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div className={`${delivery?'hidden':''} mt-3 md:mt-5`}>
                                <p className="text-secondary text-xs font-gilroy mb-6 md:mb-10">
                                    выбрать способ доставки
                                </p>
                                <div className="w-full border border-secondary"></div>
                            </div>
                        </div>
                        <div className={`mt-6 md:mt-10 ${!delivery ? 'hidden':''}`}>
                            <div className="flex gap-4 md:gap-10 mb-8 md:mb-12">
                                <p className="text-end text-primary text-sm md:text-base font-gilroy hidden sm:block">
                                    способ<br/>доставки
                                </p>
                                <div className="flex flex-col gap-4 md:gap-7 flex-1 text-secondary">
                                    <div className="flex justify-between border-b border-b-secondary pb-3">
                                        <div className="flex gap-3">
                                            <div>
                                                <input 
                                                    type="radio" 
                                                    name="delivery" 
                                                    id="courier" 
                                                    checked={isCourier}
                                                    onChange={()=>setIsCourier(true)}
                                                />
                                            </div>
                                            <label htmlFor="courier">
                                                <p className="text-sm md:text-base font-gilroy text-primary">курьер</p>
                                                <p className="text-xs md:text-base font-gilroy text-secondary">доставит в указанный срок</p>
                                            </label>
                                        </div>
                                        <p className="text-sm md:text-base font-bold font-gilroy text-primary">5 BYN</p>
                                    </div>
                                    <div className="flex justify-between border-b border-b-secondary pb-3">
                                        <div className="flex gap-3">
                                            <div>
                                                <input 
                                                    type="radio" 
                                                    name="delivery" 
                                                    id="self" 
                                                    checked={!isCourier}
                                                    onChange={()=>setIsCourier(false)}
                                                />
                                            </div>
                                            <label htmlFor="self">
                                                <p className="text-sm md:text-base font-gilroy text-primary">самовывоз</p>
                                                <p className="text-xs md:text-base font-gilroy text-secondary">из лавки вкусностей amamam.by</p>
                                            </label>
                                        </div>
                                        <p className="text-sm md:text-base font-bold font-gilroy text-primary">бесплатно</p>
                                    </div>
                                </div>
                            </div>

                            <div className={`flex gap-4 md:gap-10 mb-8 md:mb-12 ${!isCourier? 'hidden':''}`}>
                                <p className="text-end text-primary text-sm md:text-base font-gilroy hidden sm:block">
                                    адрес<br/>доставки
                                </p>
                                <div className="flex flex-col gap-x-4 md:gap-x-7 flex-1 text-secondary">
                                    <p className="text-xs mb-1">улица, дом, корпус, подъезд, этаж, квартира, домофон</p>
                                    <input 
                                        type="text" 
                                        className="bg-transparent border-b border-b-secondary w-full text-primary py-1 md:py-0"
                                    />
                                </div>
                            </div>

                            <div className={`flex gap-4 md:gap-10 justify-between mb-8 md:mb-12 ${!isCourier? 'hidden':''}`}>
                                <p className="text-end text-primary text-sm md:text-base font-gilroy hidden sm:block">
                                    дата<br/>доставки
                                </p>
                                <div className="flex flex-col gap-x-4 md:gap-x-7 flex-1 text-secondary">
                                    <p className="text-xs mb-1">Дата</p>
                                    <input 
                                        type="date" 
                                        className="bg-transparent border-b border-b-secondary w-full text-primary py-1 md:py-0"
                                    />
                                </div>
                            </div>
                            
                            <div className={`flex gap-4 md:gap-10 justify-between mb-8 md:mb-12 ${!isCourier? 'hidden':''}`}>
                                <p className="text-end text-primary text-sm md:text-base font-gilroy hidden sm:block">
                                    время<br/>доставки
                                </p>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-4 flex-1 font-gilroy font-bold text-primary">
                                    <div className="">
                                        <input type="radio" name="time" id="9-12" className="hidden peer"/>
                                        <label htmlFor="9-12" className="text-sm md:text-base peer-checked:text-blue-700 peer-checked:underline">9:00-12:00</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="time" id="12-15" className="hidden peer"/>
                                        <label htmlFor="12-15" className="text-sm md:text-base peer-checked:text-blue-700 peer-checked:underline">12:00-15:00</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="time" id="15-18" className="hidden peer"/>
                                        <label htmlFor="15-18" className="text-sm md:text-base peer-checked:text-blue-700 peer-checked:underline">15:00-18:00</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="time" id="18-21" className="hidden peer"/>
                                        <label htmlFor="18-21" className="text-sm md:text-base peer-checked:text-blue-700 peer-checked:underline">18:00-21:00</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`flex gap-4 md:gap-10 justify-between ${!isCourier? 'hidden':''}`}>
                                <p className="text-end text-primary text-sm md:text-base font-gilroy hidden sm:block">
                                    комментарий
                                </p>
                                <div className="flex flex-col gap-4 md:gap-7 flex-1 font-gilroy font-bold text-primary">
                                    <div className="flex flex-col gap-4 md:gap-7 flex-1 text-secondary">
                                        <div className="">
                                            <p className="text-xs mb-1 font-normal">информация для курьера</p>
                                            <input 
                                                type="text" 
                                                className="bg-transparent border-b border-b-secondary w-full text-primary py-1 md:py-0"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className={`flex justify-between ${!isGift?'border-b border-b-secondary':''}  pb-3 font-normal`}>
                                        <div className="flex gap-3 flex-col w-full">
                                            <div className="flex gap-3">
                                                <div>
                                                    <input 
                                                        type="checkbox" 
                                                        name="gift" 
                                                        id="gift" 
                                                        checked={isGift}
                                                        onChange={()=>setIsGift(!isGift)}
                                                    />
                                                </div>
                                                <label htmlFor="gift" className="text-xs md:text-sm">
                                                    <p className="font-gilroy text-secondary">Доставить подарок другому человеку</p>
                                                </label>
                                            </div>
                                            <div className={`${!isGift?"hidden":''} mt-2`}>
                                                <p className="text-xs mb-1 font-normal text-secondary">имя получателя</p>
                                                <input 
                                                    type="text" 
                                                    className="bg-transparent border-b border-b-secondary w-full text-primary py-1 md:py-0"
                                                />
                                                <p className="text-xs mb-1 font-normal text-secondary mt-2">телефон получателя</p>
                                                <input 
                                                    type="text" 
                                                    className="bg-transparent border-b border-b-secondary w-full text-primary py-1 md:py-0"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="mb-12 md:mb-20">
                        <div className="ml-0 md:ml-24">
                            <button 
                                className="flex justify-between items-center w-full" 
                                onClick={handleClickPayment}
                            >
                                <p className="font-medium text-xl md:text-3xl font-gilroy text-primary">
                                    способ оплаты
                                </p>
                                <Icon 
                                    src={'/icon/arrow-down.svg'} 
                                    alt="back" 
                                    className={`w-6 h-6 transition-transform ${payment ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div className={`${payment?'hidden':''} mt-3 md:mt-5`}>
                                <p className="text-secondary text-xs font-gilroy mb-6 md:mb-10">
                                    выбрать способ оплаты
                                </p>
                                <div className="w-full border border-secondary"></div>
                            </div>
                        </div>
                        <div className={`flex flex-col gap-4 md:gap-7 flex-1 text-secondary ml-0 md:ml-24 mt-6 md:mt-10 ${!payment ? 'hidden':''}`}>
                            <div className="flex justify-between border-b border-b-secondary pb-3">
                                <div className="flex gap-3">
                                    <div><input type="radio" name="payment" id="cash"/></div>
                                    <label htmlFor="cash">
                                        <p className="text-sm md:text-base font-gilroy text-primary">наличными при получении</p>
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-between border-b border-b-secondary pb-3">
                                <div className="flex gap-3">
                                    <div><input type="radio" name="payment" id="card"/></div>
                                    <label htmlFor="card">
                                        <p className="text-sm md:text-base font-gilroy text-primary">карта онлайн</p>
                                    </label>
                                </div>
                            </div>
                            <button className="flex mt-8 md:mt-14 justify-center font-gilroy w-full bg-blue-700 items-center py-3 text-lg md:text-xl font-bold text-white">
                                ОПЛАТИТЬ
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right column - Order Summary */}
                <div className="w-full lg:w-[461px] bg-white py-6 md:py-12 px-4 md:px-10 border-2 border-blue-700 mb-8 md:mb-12 self-start lg:sticky top-4">
                    <p className="font-gilroy text-xl md:text-2xl font-medium text-primary">
                        сумма заказа
                    </p>
                    <div className="flex items-center mt-4 md:mt-7 justify-between">
                        <div className="flex items-center">
                            <Image 
                                width={56} 
                                height={56} 
                                src={`${mokeList.find((e) => e.id == parseSesData.id)?.imgs[0]}`} 
                                alt={"dish"} 
                                className="border border-blue-700 mr-3 md:mr-5 w-12 h-12 md:w-14 md:h-14"
                            />
                            <p className="font-gilroy text-sm md:text-base text-primary">
                                {mokeList.find((e) => e.id == parseSesData.id)?.name}
                            </p>
                        </div>
                        <p className="text-sm md:text-base font-bold font-gilroy text-primary min-w-14">
                            {parseSesData.count} x {mokeList.find((e) => e.id == parseSesData.id)?.price}
                        </p>
                    </div>
                    <div className="flex items-end text-primary mt-6 md:mt-10 mb-4 md:mb-6">
                        <p className="text-sm md:text-base">стоимость продуктов</p>
                        <div className="flex-1 border-dotted border-b-2 border-black mx-2 md:mx-4"></div>
                        <p className="text-end font-bold text-sm md:text-base">
                            {mainProduct!==undefined?mainProduct?.price*parseSesData.count:''} BYN
                        </p>
                    </div>
                    <div className="flex items-end text-primary">
                        <p className="text-sm md:text-base">доставка</p>
                        <div className="flex-1 border-dotted border-b-2 border-black mx-2 md:mx-4"></div>
                        <p className="text-end font-bold text-sm md:text-base">
                            {isCourier?"5 BYN": "0"}
                        </p>
                    </div>
                    <div className="flex justify-between text-lg md:text-xl text-primary font-bold my-8 md:my-12">
                        <p>ИТОГО</p>
                        <p>
                            {mainProduct!==undefined?mainProduct?.price*parseSesData.count + (isCourier?5:0) :''} BYN
                        </p>
                    </div>
                    <button className="hidden lg:flex mt-8 md:mt-14 justify-center font-gilroy w-full bg-blue-700 items-center py-3 text-lg md:text-xl font-bold text-white">
                        ОПЛАТИТЬ
                    </button>
                </div>
            </div>
        </div>
    )
}