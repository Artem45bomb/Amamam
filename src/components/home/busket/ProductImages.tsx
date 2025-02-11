import { Icon } from "@/components/ui/assets/Icon/Icon"
import { useState } from "react"

interface ProductImagesProps{
    listPathes: string[]|undefined,
}

export default function ProductImages({listPathes}:ProductImagesProps) {
    const [numImage, setNumImage] = useState(1)

    const handleClickImageNext = () => {
        if (numImage != 3) {
          setNumImage(numImage + 1)
        }
        else {
          setNumImage(1)
        }
      }
    
      const handleClickImagePrevious = () => {
        if (numImage != 1) setNumImage(numImage - 1)
        else setNumImage(3)
      }

    return(
        <div className="bg-cover bg-center px-20 py-4 flex" style={{backgroundImage:`url(${listPathes!=undefined?listPathes[numImage-1]:""})`, height: 582, flexGrow:1}}>
            <div className="flex flex-col items-center justify-between">
                <button onClick={handleClickImagePrevious}><Icon className="size-6" src={'/icon/arrow-up.svg'} alt="arrow-up"/></button>
                <button onClick={()=>{setNumImage(1)}} className={`size-[136px] bg-cover bg-center ${numImage==1 ? "border-[3px]": "border"} border-blue-700`} style={{backgroundImage:`url("${listPathes!=undefined?listPathes[0]:""}")`}}></button>
                <button onClick={()=>{setNumImage(2)}} className={`size-[136px] bg-cover bg-center ${numImage==2 ? "border-[3px]": "border"} border-blue-700`} style={{backgroundImage:`url("${listPathes!=undefined?listPathes[1]:""}")`}}></button>
                <button onClick={()=>{setNumImage(3)}} className={`size-[136px] bg-cover bg-center ${numImage==3 ? "border-[3px]": "border"} border-blue-700`} style={{backgroundImage:`url("${listPathes!=undefined?listPathes[2]:""}")`}}></button>
                <button onClick={handleClickImageNext}><Icon className="size-6" src={'/icon/arrow-down.svg'} alt="arrow-down"/></button>
            </div>
        </div>
    )
}