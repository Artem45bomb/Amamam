"use client";

export function cn(...arrayName:(string | unknown)[]){
    let str = "";
    arrayName.forEach(e => {
        if(typeof e == "string" )
            str+=" "+e
    })
    return str;
}