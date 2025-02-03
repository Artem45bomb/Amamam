

export type SliderItem = {
    id:string,
    srcImage:string;
    title:string;
    body:string;
}

export type Props = {
    items: SliderItem[];
} & Stylable;