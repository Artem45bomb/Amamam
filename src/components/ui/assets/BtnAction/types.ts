import {ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren} from "react";

export type Props = Stylable & Clickable & PropsWithChildren & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    black?: boolean;
}