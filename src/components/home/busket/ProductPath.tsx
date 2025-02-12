interface productPathprops {
    path:string
}

export default function ProductPath({path}:productPathprops){
    return(
        <div className="mx-20">
            <p className="text-xs font-normal text-gray-400 font-gilroy mt-9 mb-14">{path}</p>
        </div>
    )
}