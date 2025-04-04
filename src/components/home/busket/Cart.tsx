import { list1, mokeListInt } from "@/app/test";
import { Icon } from "@/components/ui/assets/Icon/Icon";
import Recomendations from "./Recomendations";
import { useRouter } from "next/navigation";
import {v4 as uuidv4} from 'uuid'

interface CartProps{
    onClickCart: ()=>void,
    mainProduct: mokeListInt|undefined,
    onClickMinus: ()=>void,
    onClickPlus: ()=>void,
    count: number,
    isActiveCart: boolean
}

export default function Cart({onClickCart,mainProduct, onClickMinus, onClickPlus, count, isActiveCart,}:CartProps){
    const router = useRouter();

    function handleMakeOrder(){
        const orderID = uuidv4()
        const sesObj = {id: mainProduct?.id, count}
        sessionStorage.setItem(orderID, JSON.stringify(sesObj))
        router.push(`/order/${orderID}`);
        
    }

    return(
        <div className={`fixed w-full md:w-[700px] lg:w-[940px] h-screen top-0 right-0 z-50 bg-[#f7f7f7] px-4 sm:px-8 lg:px-16 font-gilroy text-primary overflow-y-scroll ${isActiveCart? '': 'hidden'}`}>
            <div className="pt-8 sm:pt-12 lg:pt-24 flex justify-between items-center mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">КОРЗИНА</h2>
                <button onClick={onClickCart} className="p-1">
                <Icon alt="cross" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" src={'/icon/x.svg'}/>
                </button>
            </div>
            
            <div className="w-full h-0.5 bg-blue-700"></div>
            <p className="mt-4 sm:mt-6 mb-8 sm:mb-12 text-secondary text-sm sm:text-base">сумма доставки 10 BYN</p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-11">
                <div className="flex justify-center sm:block">
                <Icon 
                    src={mainProduct !== undefined ? mainProduct?.imgs[0] : ''} 
                    alt="dish" 
                    className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 mx-auto sm:mx-0"
                />
                </div>

                <div className="flex flex-col justify-between flex-1">
                <div className="">
                    <p className="text-xl sm:text-2xl mb-4 sm:mb-7">{mainProduct?.name}</p>
                    <p className="text-xl sm:text-2xl lg:text-3xl">{mainProduct?.countProduct} шт. / {mainProduct?.weight} г.</p>
                </div>
                <div className="flex flex-col mt-4 sm:mt-0">
                    <div className="flex items-center justify-end sm:justify-start lg:justify-end">
                    <button className="text-blue-700 p-1" onClick={onClickMinus}>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" src={'/icon/Group 258.svg'} alt="minus"/>
                    </button>
                    <p className="text-xl sm:text-2xl w-12 sm:w-16 text-center">{count}</p>
                    <button className="text-blue-700 p-1" onClick={onClickPlus}>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rotate-180" src={'/icon/Group 258.svg'} alt="plus"/>
                    </button>
                    </div>
                    <p className="text-end sm:text-start lg:text-end text-2xl sm:text-3xl lg:text-4xl font-black mt-4 sm:mt-7">
                    {mainProduct!==undefined ? mainProduct?.price*count : ''} BYN
                    </p>
                </div>
                </div>
            </div>

            <p className="text-2xl sm:text-3xl font-bold mt-8 sm:mt-11 mb-6 sm:mb-8">сумма заказа</p>
            <div className="flex items-end">
                <p className="text-base sm:text-lg lg:text-xl">стоимость продуктов</p>
                <div className="flex-1 border-dotted border-b-2 border-black mx-2 sm:mx-4"></div>
                <p className="text-end font-bold text-base sm:text-lg lg:text-xl">
                {mainProduct!==undefined ? mainProduct?.price*count : ''} BYN
                </p>
            </div>
            <div className="text-secondary flex items-end mt-3 sm:mt-5">
                <p className="text-base sm:text-lg lg:text-xl">скидка</p>
                <div className="flex-1 border-dotted border-b-2 border-secondary mx-2 sm:mx-4"></div>
                <p className="text-end font-bold text-base sm:text-lg lg:text-xl">0 BYN</p>
            </div>
            
            <div className="flex items-center justify-between font-bold mt-8 sm:mt-11">
                <p className="text-lg sm:text-xl">ИТОГО</p>
                <p className="text-2xl sm:text-3xl lg:text-4xl">
                {mainProduct!==undefined ? mainProduct?.price*count : ''} BYN
                </p>
            </div>
            
            <button 
                className="flex mt-8 sm:mt-14 justify-center w-full bg-blue-700 items-center py-2 sm:py-3 text-lg sm:text-xl font-bold text-white" 
                onClick={handleMakeOrder}
            >
                ОФОРМИТЬ ЗАКАЗ
            </button>

            <p className="mt-12 sm:mt-20 mb-8 sm:mb-12 font-nauryzRedKeds text-2xl sm:text-3xl lg:text-4xl text-blue-700">
                добавте пряностей
            </p>
            <Recomendations list={list1.slice(0,3)}/>
        </div>
    )

}
