

type Order = {
    id: string;
    completed: boolean;
    dateAccepted: string;
    dateCompleted?: string;
    products:Product[];
}

type Product = {
    id: string;
    image: string;
    price: number;
}