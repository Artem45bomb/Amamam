

type Order = {
    id: string;
    completed: boolean;
    dateAccepted: string;
    dateCompleted?: string;
    products:Product[];
    discount:{
        price?:number;
        date?:number;
        type:DiscountType;
    }
    delivery:0;
    address:string;
}

type Product = {
    id: string;
    image: string;
    price: number;
    count: number;
    weight:number;
    name: string;
    priceOriginal?: number;
}

type DiscountType = "COURIER" | "PICKUP"