import {FC} from "react";
import {BtnAction} from "@/components/ui/assets/BtnAction";
import Image from "next/image";
import {Question} from "@/components/home/Questions/Question/Question";


export const Questions: FC = () => {
    return <div className={'px-8 sm:px-20 pt-28 pb-16 flex flex-col gap-24'}>
        <div className={'flex flex-col lg:flex-row w-full gap-x-32'}>
            <div className={'flex-[2] flex flex-col gap-14'}>
                <h2 className={'text-primary font-bold text-3xl'}>ВОПРОСЫ И ОТВЕТЫ</h2>
                <div className={'flex gap-7 sm:gap-14 w-full flex-col'}>
                    <Question
                        title={"Сколько стоит доставка?"}
                        text={"Точную стоимость доставки вы можете увидеть в корзине при оформлении заказа. При высоком спросе стоимость доставки может быть увеличена."}
                    />
                    <Question
                        title={"Есть ли бесплатная доставка?"}
                        text={"Точную стоимость доставки вы можете увидеть в корзине при оформлении заказа. При высоком спросе стоимость доставки может быть увеличена."}
                    />
                    <Question
                        title={"КАКАЯ МИНИМАЛЬНАЯ СУММА ЗАКАЗА ДЛЯ ДОСТАВКИ?"}
                        text={"Точную стоимость доставки вы можете увидеть в корзине при оформлении заказа. При высоком спросе стоимость доставки может быть увеличена."}
                    />
                    <Question
                        title={"ЗА КАКОЕ ВРЕМЯ ДОСТАВЛЯЕТЕ ЗАКАЗ?"}
                        text={"Точную стоимость доставки вы можете увидеть в корзине при оформлении заказа. При высоком спросе стоимость доставки может быть увеличена."}
                    />
                    <Question
                        title={"МНЕ НЕ ПРИВЕЗЛИ ТОВАР, ЧТО ДЕЛАТЬ?"}
                        text={"Точную стоимость доставки вы можете увидеть в корзине при оформлении заказа. При высоком спросе стоимость доставки может быть увеличена."}
                    />
                    <Question
                        title={"В КАКИХ ГОРОДАХ ДОСТУПНА ДОСТАВКА?"}
                        text={"Точную стоимость доставки вы можете увидеть в корзине при оформлении заказа. При высоком спросе стоимость доставки может быть увеличена."}
                    />
                </div>
            </div>
            <div className={'flex-1 pt-12 sm:pt-16 ml-auto'}>
                <div
                    className={'font-nauryzRedKeds border-2 border-blue-700 rounded-t-xl rounded-bl-xl w-full pl-9 pr-4 pb-5 flex flex-col items-start relative'}>
                    <i className={'border-blue-700 border-2 rounded-full h-6 w-6 flex justify-center items-center text-base text-blue-700 ml-auto mt-3 mb-2 '}>
                        !
                    </i>
                    <h2 className={'font-bold text-primary'}>НЕ СМОГЛИ НАЙТИ ОТВЕТ НА СВОЙ ВОПРОС?<br/>
                        НАПИШИТЕ В ЧАТ:</h2>
                    <button className={'text-secondary text-base font-normal font-gilroy mt-3'}>
                        Написать {">"}
                    </button>
                    <div
                        className={'w-0 h-0 border-t-[3.5rem] border-l-[3.5rem] border-t-blue-700 border-l-transparent absolute z-10 bottom-0 right-0 translate-x-[2px] translate-y-full'}>
                    </div>
                    <div
                        className={'w-0 h-0 border-t-[3.3rem] border-l-[3.3rem] border-t-background border-l-transparent absolute z-10 bottom-0 right-0 translate-y-[98%]'}>
                    </div>
                </div>
            </div>
        </div>
        <div className={'px-4 md:px-7 flex flex-col lg:flex-row gap-y-6 w-full items-center'}>
  {/* Левая часть с иконкой и текстом */}
            <div className={'flex-1 flex gap-6 items-start group'}>
                <div className={'w-10 aspect-square relative transition-transform duration-300 hover:scale-110'}>
                <Image fill src={"/icon/mail.svg"} alt="Иконка почты" className="drop-shadow-sm"/>
                </div>
                <div className={'flex flex-col font-gilroy text-primary gap-2'}>
                <h3 className={'font-bold text-2xl leading-6 transition-colors duration-300 group-hover:text-blue-700'}>
                    Новости
                </h3>
                <p className={'text-base font-normal transition-colors duration-300 group-hover:text-blue-600'}>
                    Получайте специальные предложения
                </p>
                </div>
            </div>

            {/* Правая часть с формой */}
            <div className={'h-12 flex md:w-96 xl:w-[580px] gap-3 flex-col md:flex-row w-full mb-6 md:mb-0'}>
                <input 
                className={
                    'flex-1 bg-gray-50 border border-gray-200 px-6 py-4 md:w-72 xl:w-[65%] ' +
                    'transition-all duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 ' +
                    'hover:border-gray-300 placeholder-gray-400'
                }
                placeholder={"Email"}
                />
                <BtnAction 
                className={
                    'h-full px-4 xl:w-[35%] flex-1 min-h-14 md:min-h-12 ' +
                    'transition-all duration-300 hover:shadow-md ' +
                    'active:scale-[0.98] font-medium'
                }
                >
                Зарегистрироваться
                </BtnAction>
            </div>
        </div>
    </div>
}