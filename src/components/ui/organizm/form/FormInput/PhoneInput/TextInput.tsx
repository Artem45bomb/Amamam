import RPhoneInput, {CountryData} from 'react-phone-input-2';
import { Props } from './types';
import {ChangeEvent, FC, useState} from 'react';
import { cn } from "@/utils/style";
import 'react-phone-input-2/lib/material.css';

export const PhoneInput: FC<Props> = ({ options }) => {
    const [value,setValue] = useState(options?.phone?.value ?? '');

    const handleChange = (values:[value: string, data: object | CountryData, event: ChangeEvent<HTMLInputElement>, formattedValue: string]) => {
        if(options?.phone?.onChange) {
            options.phone.onChange(...values)
            return
        }
        setValue(values[0])
    }

    return (
        <RPhoneInput
            containerClass={cn("w-full")}
            country={'by'}
            value={options?.phone?.value ?? value}
            specialLabel={''}
            {...options?.phone}
            buttonStyle={{ paddingLeft: 0 }}
            inputStyle={{
                width: "100%",
                borderWidth: 0,
                borderBottomWidth: 1,
                borderRadius: 0,
                borderBottomColor: "black",
                outlineWidth: 10
            }}
            inputClass={cn("w-full pb-4 border-b border-b-black bg-none font-gilroy font-normal text-xl pt-1 rounded-0 placeholder:text-gray-400", options?.phone?.inputClass)}
            onChange={(...values) =>handleChange(values)}
        />
    );
};