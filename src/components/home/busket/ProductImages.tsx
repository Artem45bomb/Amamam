// ProductImages.tsx
import { Icon } from "@/components/ui/assets/Icon/Icon"
import { useState } from "react"

interface ProductImagesProps {
    listPathes: string[]|undefined,
}

export default function ProductImages({listPathes}: ProductImagesProps) {
    const [numImage, setNumImage] = useState(1)

    const handleClickImageNext = () => {
        setNumImage(prev => prev === 3 ? 1 : prev + 1)
    }
    
    const handleClickImagePrevious = () => {
        setNumImage(prev => prev === 1 ? 3 : prev - 1)
    }

    return (
        <div 
            className="bg-cover bg-center px-4 sm:px-10 md:px-20 py-4 flex relative"
            style={{
                backgroundImage: `url(${listPathes?.[numImage-1] || ""})`, 
                height: "clamp(300px, 50vw, 582px)",
                flexGrow: 1
            }}
        >
            {/* Миниатюры для десктопа */}
            <div className="hidden md:flex flex-col items-center justify-center xl:justify-between mr-4">
                <button onClick={handleClickImagePrevious}>
                    <Icon className="size-6" src={'/icon/arrow-up.svg'} alt="arrow-up"/>
                </button>
                {[1, 2, 3].map((i) => (
                    <button 
                        key={i}
                        onClick={() => setNumImage(i)}
                        className={`size-[100px] xl:size-[136px] bg-cover bg-center my-1 ${
                            numImage === i ? "border-[3px]" : "border"
                        } border-blue-700`}
                        style={{backgroundImage: `url("${listPathes?.[i-1] || ""}")`}}
                    />
                ))}
                <button onClick={handleClickImageNext}>
                    <Icon className="size-6" src={'/icon/arrow-down.svg'} alt="arrow-down"/>
                </button>
            </div>

            {/* Стрелки для мобильных */}
            <div className="md:hidden flex justify-between w-full items-center px-2 absolute bottom-4 left-0">
                <button 
                    onClick={handleClickImagePrevious}
                    className="bg-white/80 p-2 rounded-full"
                >
                    <Icon className="size-6 rotate-90" src={'/icon/arrow-down.svg'} alt="arrow-up"/>
                </button>
                <button 
                    onClick={handleClickImageNext}
                    className="bg-white/80 p-2 rounded-full"
                >
                    <Icon className="size-6 -rotate-90" src={'/icon/arrow-down.svg'} alt="arrow-down"/>
                </button>
            </div>
        </div>
    )
}