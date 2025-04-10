import {FC, InputHTMLAttributes} from "react";
import {FormInput} from "./FormInput";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    name: string;
    defaultValue?: string;
}

export const FormDateInput: FC<Props> = ({placeholder, name, defaultValue, ...props}) => {
    const formatDate = (date: string | undefined) => {
        if (!date) return '';
        return new Date(date).toISOString().split('T')[0];
    };

    return (
        <FormInput
            type="date"
            placeholder={placeholder}
            name={name}
            defaultValue={formatDate(defaultValue)}
            {...props}
        />
    );
}; 