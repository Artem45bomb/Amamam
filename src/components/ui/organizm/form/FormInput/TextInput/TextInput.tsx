import { forwardRef } from "react";
import { Props } from "./types";
import { cn } from "@/utils/style";

export const TextInput = forwardRef<HTMLInputElement, Props>(function Input({ className, ...props }, ref) {
    return (
        <input
            className={cn(
                "w-full bg-transparent py-[1.2rem] px-4 border-b placeholder:text-gray-400 text-black focus:outline-none focus:ring-[0.7px] focus:ring-blue-800 focus:ring-offset-0 focus:rounded-none border-b-black",
                className
            )}
            {...props}
            ref={ref}
        />
    );
});