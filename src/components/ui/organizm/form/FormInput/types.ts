import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {TextInput} from "./TextInput"
import * as PhoneInput from "./PhoneInput"

export type Props = PhoneInput.Props & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    input?:Input;
}

export type Input = "text" | "phone" | "date"
export type InputsType = typeof TextInput | typeof PhoneInput.PhoneInput;

export const Inputs:Record<Input, InputsType> = {
    text:TextInput,
    phone: PhoneInput.PhoneInput,
    date: TextInput,
}