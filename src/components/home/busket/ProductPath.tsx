interface productPathprops {
    path:string
}

export default function ProductPath({path}:productPathprops){
    return(
        <div className="mx-5 sm:mx-10 lg:mx-20">
            <p className="text-xs font-normal text-gray-400 font-gilroy mt-3 lg:mt-9 mb-2 lg:mb-14">{path}</p>
        </div>
    )
}