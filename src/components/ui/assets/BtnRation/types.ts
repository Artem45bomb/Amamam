import {ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren} from "react";

export type Props =PropsWithChildren & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {active: boolean},"children">;