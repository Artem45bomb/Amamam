import {ImageProps} from "next/image";

export type Props = Omit<ImageProps,"fill"> & {
    classNameImage?: string
}