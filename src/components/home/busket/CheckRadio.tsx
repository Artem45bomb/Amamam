
export enum InputType {
    Checkbox = 'checkbox',
    Radio = 'radio',

}

interface CheckRadioProps {
    type: InputType,
    id: string,
    label: string,
}

export default function CheckRadio({type, id, label}:CheckRadioProps){
    return(
        <div className={`flex items-center cursor-pointer p-2 rounded hover:bg-gray-100 focus-within:border-2 focus-within:border-blue-500`}>
            <input type={type} id={id} className={`opacity-0 absolute`}/>
            <label htmlFor={id} className="text-black">{label}</label>
        </div>
    )
}