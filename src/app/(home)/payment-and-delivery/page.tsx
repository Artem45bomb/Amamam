import Image from "next/image";
import Link from "next/link";   


export default function PaymentAndDeliveryPage() {
    return (<div className={"w-full pt-4 md:pt-6 lg:pt-9 pb-12 md:pb-16 lg:pb-24 flex flex-col items-center gap-10 md:gap-16 lg:gap-20 px-4 md:px-8 lg:px-20 text-grey"}>
        <p className={"font-gilroy text-xs md:text-sm font-normal mr-auto text-grey"} >Главная / О нас</p>
        <h1 className={"font-bold text-3xl md:text-4xl lg:text-5xl font-nauryzRedKeds text-blue-700 text-center"}>ОПЛАТА И ДОСТАВКА</h1>
        <div className={"flex flex-col md:flex-row w-full aspect-auto md:aspect-[2/1] border border-blue-700"} >
            <div className={"flex-1 h-48 md:h-full relative border-l-0 border-b md:border-b-0 border-blue-700"}>
                <Image className={"bg-cover object-cover"} src={"/delivery.jpg"} fill alt="text"/>
            </div>
            <div className={"flex-1 h-full font-giroy text-sm md:text-base lg:text-[1.1rem] font-normal text-secondary p-4 md:p-[6%] flex flex-col gap-6 md:gap-10"}>
                <div className={"flex-1 flex-col flex gap-4 md:gap-6 relative"}>
                    <h2 className={"font-nauryzRedKeds font-bold text-xl md:text-2xl text-blue-700"}>ДОСТАВКА</h2>
                    <ul className={"flex flex-col gap-1"}>
                        <li>Стоимость доставки по Минску 5 BYN.</li>
                        <li>При сумме заказа от 150 BYN, привезем ваш заказ бесплатно.</li>
                        <li>Возможна доставка за МКАД, стоимость +1 BYN за 1 км.</li>
                    </ul>
                </div>
                <div className={"flex-1 flex-col flex gap-4 md:gap-6"}>
                    <h2 className={"font-nauryzRedKeds font-bold text-xl md:text-2xl text-blue-700"}>САМОВЫВОЗ</h2>
                    <p>Вы можете самостоятельно забрать заказ в пункте самовывоза АмАмАм по адресу Минск, пр. Независимости, 88, 1 этаж, пом. 760.</p>
                    <p className={"mt-4 md:mt-6"}>Ежедневно с 9:00 до 21:00.</p>
                </div>
            </div>
        </div>
        <div className={"w-full md:w-4/5 lg:w-3/5 flex items-center flex-col gap-5 md:gap-7"} >
            <h2 className={"text-blue-700 text-xl md:text-2xl font-bold font-nauryzRedKeds text-center"}>Заказ и оплата</h2>
            <p className="text-sm md:text-base">Для заказа положите понравившиеся товары в корзину, нажмите кнопку «оформить заказ», 
                введите свои контактные данные, выберите способ доставки и оплаты на странице оформления заказа. 
                Нажмите кнопку &quot;<b>подтвердить заказ</b>&quot;.</p>
            
            <p className="text-sm md:text-base">Оплатить заказ можно курьеру, в пункте самовывоза, через систему &quot;<b>Расчёт</b>&quot; или банковской платежной картой через систему <Link href={"https://webpay.by/"}>WEBPAY</Link>. 
            Безопасный сервер WEBPAY устанавливает шифрованное соединение по защищенному протоколу TLS и конфиденциально принимает от клиента данные его платёжной карты (номер карты, имя держателя, дату окончания действия, и контрольный номер банковской карточки CVC/CVC2). 
            После совершения оплаты с использованием банковской карты необходимо сохранять полученные карт-чеки (подтверждения об оплате) для сверки с выпиской из карт-счёта (с целью подтверждения совершённых операций в случае возникновения спорных ситуаций).</p>
            
            <p className="text-sm md:text-base">Оплатить заказ через систему &quot;<b>Расчет</b>&quot; ЕРИП можно с помощью интернет-банкинга, мобильного банкинга, инфокиоска, банкомата, кассы и т.д.</p>
            <p className="text-sm md:text-base">Для проведения платежа необходимо выбрать: пункт <b>&quot;Система &quot;Расчет&quot; (ЕРИП) {'->'} Интернет-магазины/сервисы {'->'} A-Z Латинские домены {'->'} A {'->'} amamam.by&quot;</b>. Далее введите номер заказа, сумму платежа (если не указана), проверьте корректность информации и совершите платеж.</p>
            <p className="text-sm md:text-base">Если вы не получили заказ, свяжитесь с нами по телефону <Link href={"tel:+375447211420"}><b>+375 44 721 14 20</b></Link> или по email <Link href={"mailto:hello@amamam.by"}><b>hello@amamam.by</b></Link>, менеджеры вас проконсультируют. <b>Отмена заказа, возврат и обмен товара производится согласно закону о защите прав потребителей.</b></p>
            <p className="text-sm md:text-base">При оплате банковской платежной картой возврат денежных средств осуществляется на карточку, с которой была произведена оплата.</p>   
            <p className="text-sm md:text-base">При реализации потребителю товара, в том числе в Интернет-магазине, продавец обязан выдать ему кассовый (товарный) чек либо иной документ, подтверждающий оплату товара (п. 11 ст. 7 Закона о защите прав потребителей).</p> 
            <Image src={"/check.png"} alt="check" width={80} height={80} className="md:w-[100px] md:h-[100px]" />
        </div>
    </div>)
}