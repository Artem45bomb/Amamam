export enum InputType {
    Checkbox = 'checkbox',
    Radio = 'radio',

}

export interface CheckRadioProps {
    type: InputType;
    id: string;
    label: string;
    name: string;
    onChange?: () => void; // Добавили onChange
}

export default function CheckRadio({ type, id, label, name, onChange }: CheckRadioProps) {
    return (
        <div className="flex text-secondary cursor-pointer">
            <input type={type} id={id} className="peer hidden" name={name} onChange={onChange} />
            <label htmlFor={id} className="cursor-pointer select-none px-7 py-3 border-2 font-gilroy text-sm font-medium border-secondary peer-checked:border-blue-700 peer-checked:text-blue-700">
                {label}
            </label>
        </div>
    );
}