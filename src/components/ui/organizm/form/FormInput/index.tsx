import {Props,Inputs} from "./types"
import {forwardRef, useMemo} from "react";




export const FormInput = forwardRef<HTMLInputElement, Props>(function Input({input = "text",...props}, ref){

    const ViewInput = useMemo(() =>Inputs[input],[input])

    return <ViewInput ref={ref} {...props}/>
})


