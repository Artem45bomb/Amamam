import Image from "next/image";



export default function PaymentAndDeliveryPage() {
    return (<div className={"w-full pt-9 pb-24 flex flex-col items-center gap-20 px-20 text-grey"}>
        <p className={"font-gilroy text-sm font-normal mr-auto text-grey"} >Главная / О нас</p>
        <h1 className={"font-bold text-5xl font-nauryzRedKeds text-blue-700"}>ОПЛАТА И ДОСТАВКА</h1>
        <div className={"flex w-full aspect-[2/1] border border-blue-700"} >
            <div className={"flex-1 h-full relative border-l-0 border-blue-700"}>
                <Image className={"bg-cover"} src={"/delivery.jpg"} fill alt="text"/>
            </div>
            <div className={"flex-1 h-full font-giroy text-[1.1rem] font-normal text-secondary p-[6%]  flex flex-col gap-10"}>
                <div className={"flex-1 flex-col flex gap-6 relative"}>
                    <h2 className={"font-nauryzRedKeds font-bold text-2xl text-blue-700"}>ДОСТАВКА ПО МИНСКУ</h2>
                    <ul className={"flex flex-col gap-1"}>
                        <li>Стоимость доставки по Минску 10 BYN.</li>
                        <li>Экспресс-доставка – привезем ваш заказ в течение 1-2 часов после оформления, стоимость 25 BYN независимо от суммы заказа</li>
                        <li>Доставка к определенному времени (интервал         30 минут), стоимость услуги 20 BYN независимо от суммы заказа.</li>
                    </ul>
                </div>
                <div className={"flex-1 flex-col flex gap-6"}>
                    <h2 className={"font-nauryzRedKeds font-bold text-2xl text-blue-700"}>САМОВЫВОЗ</h2>
                    <p>Вы можете самостоятельно забрать заказ в магазинах Present Simple по адресу Минск, ул. Кальварийская, 21 и Ратомская, 7.</p>
                    <p className={"mt-6"}>В будние и выходные с 8:00 до 21:00.</p>
                </div>
            </div>
        </div>
        <div className={"w-3/5 flex items-center flex-col gap-7"} >
            <h2 className={"text-blue-700 text-2xl font-bold font-nauryzRedKeds"}>оплата</h2>
            <p>Оплатить заказ можно наличными курьеру, банковской картой в пункте самовывоза, через систему “Расчёт” или банковской картой онлайн через систему WEBPAY. Безопасный сервер WEBPAY устанавливает шифрованное соединение по защищенному протоколу TLS и конфиденциально принимает от клиента данные его платёжной карты (номер карты, имя держателя, дату окончания действия, и контрольный номер банковской карточки CVC/CVC2). После проведения платежа на ваш электронный адрес придет подтверждение оплаты.
                Оплатить заказ через систему «Расчет» ЕРИП можно с помощью интернет-банкинга, мобильного банкинга, инфокиоска, банкомата, кассы и т.д.
                Для проведения платежа необходимо выбрать: пункт «Система «Расчет» (ЕРИП) -{">"} Интернет-магазины/сервисы -{">"} ​A-Z Латинские домены -{">"} ​P -{">"} present-simple.by. Далее в​ведите ​номер заказа,​ сумму платежа (если не указана), проверьте корректность информации и совершите платеж.
                Если вы не получили заказ, свяжитесь с нами по телефону +375 44 511 97 67 или по email hello@present-simple.by.
                Отмена заказа, возврат и обмен товара производится согласно закону о защите прав потребителей. При оплате банковской платежной картой возврат денежных средств осуществляется на ту же карточку, с которой была произведена оплата.</p>
        </div>
    </div>)
}