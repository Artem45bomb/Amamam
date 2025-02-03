
type Stylable = {
    className?:string
}

type Clickable<T = never,R= never> = {
    onClick?: (arg:T) => R
}

type SliderId = {
    id:string,
}