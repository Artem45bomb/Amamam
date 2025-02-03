

export type SliderItem = SliderId & {
    srcImage:string
}

export type Props  = Stylable & {
    items: SliderItem[]
}