import {ChangeSection} from "@/components/profile/sections/types";

export type Props = ChangeSection & {
    onChangeOrderView: (orderId: string) => void;
}