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

    const params = useParams<{orderID:string}>()
    console.log(params.orderID)
    console.log("dfa")
    const sesData = sessionStorage.getItem(params.orderID)
    
    interface SessionData {
        id: number;
        count: number;
    }
    
    let parseSesData: SessionData | null = null;
    if (sesData !== null) parseSesData = JSON.parse(sesData)
    console.log(sesData)

    if (!parseSesData) {
        // Обработка случая, когда данные отсутствуют
        return <div>Данные заказа не найдены</div>;
    }
    
    const mainProduct = mokeList.find((e) => e.id == parseSesData.id);
    return (
        <div className="px-4 md:px-0">
            {/* Back button */}
            <button 
                className="ml-4 md:ml-20 mt-6 md:mt-9 mb-8 md:mb-14 transition-transform hover:scale-105 active:scale-95"
                aria-label="Назад"
            >
                <Icon 
                    src={'/icon/arrow-down.svg'} 
                    alt="back" 
                    className="w-6 h-6 rotate-90 transition-transform hover:translate-x-1" 
                    onClick={() => router.back()}
                />
            </button>
    
            <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-12 xl:gap-52 mx-4 md:mx-12 xl:ml-28 md:mr-12">
                {/* Left column - Form */}
                <div className="w-full lg:w-[590px]">
                    {/* Contact Information */}
                    <div className="mb-12 md:mb-20">
                        <div className="ml-0 md:ml-24">
                            <button 
                                className="flex justify-between items-center w-full group"
                                onClick={handleClickContacts}
                                aria-expanded={contacts}
                                aria-controls="contacts-section"
                            >
                                <p className="font-medium text-xl md:text-3xl font-gilroy text-primary transition-colors group-hover:text-blue-700">
                                    контактные данные
                                </p>
                                <Icon 
                                    src={'/icon/arrow-down.svg'} 
                                    alt={contacts ? "Скрыть" : "Показать"} 
                                    className={`w-6 h-6 transition-all duration-300 ${contacts ? 'rotate-180' : ''}`} 
                                />
                            </button>
                            <div className={`${contacts ? 'hidden' : 'block'} mt-3 md:mt-5 transition-opacity duration-300`}>
                                <p className="text-secondary text-xs font-gilroy mb-6 md:mb-10">
                                    ввести данные
                                </p>
                                <div className="w-full border border-secondary transition-all duration-300"></div>
                            </div>
                        </div>
                        <div 
                            id="contacts-section"
                            className={`mt-6 md:mt-10 overflow-hidden transition-all duration-300 ease-in-out ${!contacts ? 'max-h-0' : 'max-h-[1500px]'}`}
                        >
                            <div className="flex gap-4 md:gap-10">
                                <p className="text-end text-primary text-sm md:text-base font-gilroy hidden sm:block">
                                    ваши<br/>данные
                                </p>
                                <div className="flex flex-col gap-4 md:gap-7 flex-1 text-secondary">
                                    <div className="transition-all duration-200">
                                        <p className="text-xs mb-1">фамилия</p>
                                        <input 
                                            type="text" 
                                            className="bg-transparent border-b border-b-secondary w-full text-primary py-1 md:py-0 focus:border-blue-700 focus:outline-none transition-colors duration-200"
                                        />
                                    </div>
                                    <div className="mb-6 md:mb-8 transition-all duration-200">
                                        <p className="text-xs mb-1">имя</p>
                                        <input 
                                            type="text" 
                                            className="bg-transparent border-b border-b-secondary w-full text-primary py-1 md:py-0 focus:border-blue-700 focus:outline-none transition-colors duration-200"
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
                                        className="bg-transparent border-b border-b-secondary w-full text-primary py-1 md:py-0 focus:border-blue-700 focus:outline-none transition-colors duration-200"
                                    />
                                    <div className="flex gap-2 my-4 md:my-6 items-start">
                                        <input 
                                            type="checkbox" 
                                            name="checkbox" 
                                            id="rule" 
                                            className="w-3 h-3 mt-1 appearance-none border border-secondary checked:bg-blue-700 checked:border-blue-700 transition-colors duration-200"
                                        />
                                        <label htmlFor="rule" className="text-xs md:text-sm hover:text-primary transition-colors duration-200">
                                            я ознакомился и согласен с Политикой обработки персональных данных и пользовательским соглашением
                                        </label>
                                    </div>
                                    <div className="flex gap-2 items-start">
                                        <input 
                                            type="checkbox" 
                                            name="checkbox" 
                                            id="ad" 
                                            className="w-3 h-3 mt-1 appearance-none border border-secondary checked:bg-blue-700 checked:border-blue-700 transition-colors duration-200"
                                        />
                                        <label htmlFor="ad" className="text-xs md:text-sm hover:text-primary transition-colors duration-200">
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
                                className="flex justify-between items-center w-full group"
                                onClick={handleClickDelivery}
                                aria-expanded={delivery}
                                aria-controls="delivery-section"
                            >
                                <p className="font-medium text-xl md:text-3xl font-gilroy text-primary transition-colors group-hover:text-blue-700">
                                    способ получения
                                </p>
                                <Icon 
                                    src={'/icon/arrow-down.svg'} 
                                    alt={delivery ? "Скрыть" : "Показать"} 
                                    className={`w-6 h-6 transition-all duration-300 ${delivery ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div className={`${delivery ? 'hidden' : 'block'} mt-3 md:mt-5 transition-opacity duration-300`}>
                                <p className="text-secondary text-xs font-gilroy mb-6 md:mb-10">
                                    выбрать способ доставки
                                </p>
                                <div className="w-full border border-secondary transition-all duration-300"></div>
                            </div>
                        </div>
                        <div 
                            id="delivery-section"
                            className={`mt-6 md:mt-10 overflow-hidden transition-all duration-300 ease-in-out ${!delivery ? 'max-h-0' : 'max-h-[2000px]'}`}
                        >
                            <div className="flex gap-4 md:gap-10 mb-8 md:mb-12">
                                <p className="text-end text-primary text-sm md:text-base font-gilroy hidden sm:block">
                                    способ<br/>доставки
                                </p>
                                <div className="flex flex-col gap-4 md:gap-7 flex-1 text-secondary">
                                    <div className="flex justify-between border-b border-b-secondary pb-3 transition-colors hover:border-blue-700 duration-200">
                                        <div className="flex gap-3">
                                            <div className="flex items-center">
                                                <input 
                                                    type="radio" 
                                                    name="delivery" 
                                                    id="courier" 
                                                    checked={isCourier}
                                                    onChange={() => setIsCourier(true)}
                                                    className="w-4 h-4 border border-secondary checked:bg-blue-700 checked:border-blue-700 transition-colors duration-200"
                                                />
                                            </div>
                                            <label htmlFor="courier" className="cursor-pointer">
                                                <p className="text-sm md:text-base font-gilroy text-primary">курьер</p>
                                                <p className="text-xs md:text-base font-gilroy text-secondary">доставит в указанный срок</p>
                                            </label>
                                        </div>
                                        <p className="text-sm md:text-base font-bold font-gilroy text-primary">5 BYN</p>
                                    </div>
                                    <div className="flex justify-between border-b border-b-secondary pb-3 transition-colors hover:border-blue-700 duration-200">
                                        <div className="flex gap-3">
                                            <div className="flex items-center">
                                                <input 
                                                    type="radio" 
                                                    name="delivery" 
                                                    id="self" 
                                                    checked={!isCourier}
                                                    onChange={() => setIsCourier(false)}
                                                    className="w-4 h-4 border border-secondary checked:bg-blue-700 checked:border-blue-700 transition-colors duration-200"
                                                />
                                            </div>
                                            <label htmlFor="self" className="cursor-pointer">
                                                <p className="text-sm md:text-base font-gilroy text-primary">самовывоз</p>
                                                <p className="text-xs md:text-base font-gilroy text-secondary">из лавки вкусностей amamam.by</p>
                                            </label>
                                        </div>
                                        <p className="text-sm md:text-base font-bold font-gilroy text-primary">бесплатно</p>
                                    </div>
                                </div>
                            </div>
    
                            <div className={`flex gap-4 md:gap-10 mb-8 md:mb-12 transition-all duration-300 ${!isCourier ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-40'}`}>
                                <p className="text-end text-primary text-sm md:text-base font-gilroy hidden sm:block">
                                    адрес<br/>доставки
                                </p>
                                <div className="flex flex-col gap-x-4 md:gap-x-7 flex-1 text-secondary">
                                    <p className="text-xs mb-1">улица, дом, корпус, подъезд, этаж, квартира, домофон</p>
                                    <input 
                                        type="text" 
                                        className="bg-transparent border-b border-b-secondary w-full text-primary py-1 md:py-0 focus:border-blue-700 focus:outline-none transition-colors duration-200"
                                    />
                                </div>
                            </div>
    
                            <div className={`flex gap-4 md:gap-10 justify-between mb-8 md:mb-12 transition-all duration-300 ${!isCourier ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-40'}`}>
                                <p className="text-end text-primary text-sm md:text-base font-gilroy hidden sm:block">
                                    дата<br/>доставки
                                </p>
                                <div className="flex flex-col gap-x-4 md:gap-x-7 flex-1 text-secondary">
                                    <p className="text-xs mb-1">Дата</p>
                                    <input 
                                        type="date" 
                                        className="bg-transparent border-b border-b-secondary w-full text-primary py-1 md:py-0 focus:border-blue-700 focus:outline-none transition-colors duration-200"
                                    />
                                </div>
                            </div>
                            
                            <div className={`flex gap-4 md:gap-10 justify-between mb-8 md:mb-12 transition-all duration-300 ${!isCourier ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-40'}`}>
                                <p className="text-end text-primary text-sm md:text-base font-gilroy hidden sm:block">
                                    время<br/>доставки
                                </p>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-4 flex-1 font-gilroy font-bold text-primary">
                                    {['9:00-12:00', '12:00-15:00', '15:00-18:00', '18:00-21:00'].map((time) => (
                                        <div key={time} className="relative">
                                            <input 
                                                type="radio" 
                                                name="time" 
                                                id={time.replace(':', '-')} 
                                                className="absolute opacity-0 w-0 h-0 peer"
                                            />
                                            <label 
                                                htmlFor={time.replace(':', '-')} 
                                                className="text-sm md:text-base cursor-pointer transition-all duration-200 peer-checked:text-blue-700 peer-checked:underline peer-hover:text-blue-500"
                                            >
                                                {time}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className={`flex gap-4 md:gap-10 justify-between transition-all duration-300 ${!isCourier ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-96'}`}>
                                <p className="text-end text-primary text-sm md:text-base font-gilroy hidden sm:block">
                                    комментарий
                                </p>
                                <div className="flex flex-col gap-4 md:gap-7 flex-1 font-gilroy font-bold text-primary">
                                    <div className="flex flex-col gap-4 md:gap-7 flex-1 text-secondary">
                                        <div className="transition-all duration-200">
                                            <p className="text-xs mb-1 font-normal">информация для курьера</p>
                                            <input 
                                                type="text" 
                                                className="bg-transparent border-b border-b-secondary w-full text-primary py-1 md:py-0 focus:border-blue-700 focus:outline-none transition-colors duration-200"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className={`flex justify-between ${!isGift ? 'border-b border-b-secondary' : ''} pb-3 font-normal transition-all duration-300`}>
                                        <div className="flex gap-3 flex-col w-full">
                                            <div className="flex gap-3 items-start">
                                                <div className="flex items-center mt-0.5">
                                                    <input 
                                                        type="checkbox" 
                                                        name="gift" 
                                                        id="gift" 
                                                        checked={isGift}
                                                        onChange={() => setIsGift(!isGift)}
                                                        className="w-3 h-3 appearance-none border border-secondary checked:bg-blue-700 checked:border-blue-700 transition-colors duration-200"
                                                    />
                                                </div>
                                                <label htmlFor="gift" className="text-xs md:text-sm cursor-pointer hover:text-primary transition-colors duration-200">
                                                    <p className="font-gilroy text-secondary">Доставить подарок другому человеку</p>
                                                </label>
                                            </div>
                                            <div className={`${!isGift ? "hidden" : ''} mt-2 space-y-2 transition-all duration-300`}>
                                                <div>
                                                    <p className="text-xs mb-1 font-normal text-secondary">имя получателя</p>
                                                    <input 
                                                        type="text" 
                                                        className="bg-transparent border-b border-b-secondary w-full text-primary py-1 md:py-0 focus:border-blue-700 focus:outline-none transition-colors duration-200"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-xs mb-1 font-normal text-secondary">телефон получателя</p>
                                                    <input 
                                                        type="text" 
                                                        className="bg-transparent border-b border-b-secondary w-full text-primary py-1 md:py-0 focus:border-blue-700 focus:outline-none transition-colors duration-200"
                                                    />
                                                </div>
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
                                className="flex justify-between items-center w-full group"
                                onClick={handleClickPayment}
                                aria-expanded={payment}
                                aria-controls="payment-section"
                            >
                                <p className="font-medium text-xl md:text-3xl font-gilroy text-primary transition-colors group-hover:text-blue-700">
                                    способ оплаты
                                </p>
                                <Icon 
                                    src={'/icon/arrow-down.svg'} 
                                    alt={payment ? "Скрыть" : "Показать"} 
                                    className={`w-6 h-6 transition-all duration-300 ${payment ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div className={`${payment ? 'hidden' : 'block'} mt-3 md:mt-5 transition-opacity duration-300`}>
                                <p className="text-secondary text-xs font-gilroy mb-6 md:mb-10">
                                    выбрать способ оплаты
                                </p>
                                <div className="w-full border border-secondary transition-all duration-300"></div>
                            </div>
                        </div>
                        <div 
                            id="payment-section"
                            className={`flex flex-col gap-4 md:gap-7 flex-1 text-secondary ml-0 md:ml-24 mt-6 md:mt-10 overflow-hidden transition-all duration-300 ease-in-out ${!payment ? 'max-h-0' : 'max-h-96'}`}
                        >
                            <div className="flex justify-between border-b border-b-secondary pb-3 transition-colors hover:border-blue-700 duration-200">
                                <div className="flex gap-3">
                                    <div className="flex items-center">
                                        <input 
                                            type="radio" 
                                            name="payment" 
                                            id="cash" 
                                            className="w-4 h-4 border border-secondary checked:bg-blue-700 checked:border-blue-700 transition-colors duration-200"
                                        />
                                    </div>
                                    <label htmlFor="cash" className="cursor-pointer">
                                        <p className="text-sm md:text-base font-gilroy text-primary">наличными при получении</p>
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-between border-b border-b-secondary pb-3 transition-colors hover:border-blue-700 duration-200">
                                <div className="flex gap-3">
                                    <div className="flex items-center">
                                        <input 
                                            type="radio" 
                                            name="payment" 
                                            id="card" 
                                            className="w-4 h-4 border border-secondary checked:bg-blue-700 checked:border-blue-700 transition-colors duration-200"
                                        />
                                    </div>
                                    <label htmlFor="card" className="cursor-pointer">
                                        <p className="text-sm md:text-base font-gilroy text-primary">карта онлайн</p>
                                    </label>
                                </div>
                            </div>
                            <button className="flex mt-8 md:mt-14 justify-center font-gilroy w-full bg-blue-700 items-center py-3 text-lg md:text-xl font-bold text-white hover:bg-blue-800 active:bg-blue-900 transition-colors duration-200 shadow-md hover:shadow-lg active:shadow-none">
                                ОПЛАТИТЬ
                            </button>
                        </div>
                    </div>
                </div>
    
                {/* Right column - Order Summary */}
                <div className="w-full lg:w-[461px] bg-white py-6 md:py-12 px-4 md:px-10 border-2 border-blue-700 mb-8 md:mb-12 self-start lg:sticky top-4 transition-all duration-300 hover:shadow-xl">
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
                                className="border border-blue-700 mr-3 md:mr-5 w-12 h-12 md:w-14 md:h-14 transition-transform duration-200 hover:scale-105"
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
                        <div className="flex-1 border-dotted border-b-2 border-black mx-2 md:mx-4 transition-all duration-300"></div>
                        <p className="text-end font-bold text-sm md:text-base">
                            {mainProduct!==undefined ? mainProduct?.price * parseSesData.count : ''} BYN
                        </p>
                    </div>
                    <div className="flex items-end text-primary">
                        <p className="text-sm md:text-base">доставка</p>
                        <div className="flex-1 border-dotted border-b-2 border-black mx-2 md:mx-4 transition-all duration-300"></div>
                        <p className="text-end font-bold text-sm md:text-base">
                            {isCourier ? "5 BYN" : "0"}
                        </p>
                    </div>
                    <div className="flex justify-between text-lg md:text-xl text-primary font-bold my-8 md:my-12">
                        <p>ИТОГО</p>
                        <p className="transition-all duration-300">
                            {mainProduct!==undefined ? mainProduct?.price * parseSesData.count + (isCourier ? 5 : 0) : ''} BYN
                        </p>
                    </div>
                    <button className="hidden lg:flex mt-8 md:mt-14 justify-center font-gilroy w-full bg-blue-700 items-center py-3 text-lg md:text-xl font-bold text-white hover:bg-blue-800 active:bg-blue-900 transition-colors duration-200 shadow-md hover:shadow-lg active:shadow-none">
                        ОПЛАТИТЬ
                    </button>
                </div>
            </div>
        </div>
    )
}