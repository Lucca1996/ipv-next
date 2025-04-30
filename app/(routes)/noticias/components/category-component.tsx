"use client"
import { useGetCategoryName } from "@/api/getCategoryName"
import { ResponseType } from "@/types/response"
import { FiltersControlsCategory } from "./filters-controls-category"
import { SkeletonSchema } from "@/components/skeletonSchema"
import Image from 'next/image'

export const CategoryBoard = () => {
    const { result, loading }: ResponseType = useGetCategoryName()
    const entregas = result !== null && !loading && (result[0].name);
    const institucionales = result !== null && !loading && (result[1].name);
    const actosPublicos = result !== null && !loading && (result[2].name);
    return (
        <div className="md:block hidden">

            <div className="flex mb-0">
                <Image 
                    src="https://res.cloudinary.com/dncvxpgj1/image/upload/v1714050217/IPV/nzce7ilwvxwc5u1mcmu0.png" 
                    className="h-7 mr-2" 
                    alt="Información de interés" 
                    width={28}
                    height={28}
                />
                <h3 className="text-lg w-64 mb-5" >Información de interes</h3>
            </div>
            {loading && (
                <SkeletonSchema grid={3} />
            )}
            <h4 className="font-extrabold mb-5">{entregas}</h4>
            <FiltersControlsCategory category="entregas" />
            {result !== null && !loading && (
                <h4 className="font-extrabold mb-5">{institucionales}</h4>
            )}
            <ul className="mb-5">
                <FiltersControlsCategory category="institucionales" />
            </ul>
            {result !== null && !loading && (
                <h4 className="font-extrabold mb-5">{actosPublicos}</h4>
            )}
            <ul>
                <FiltersControlsCategory category="actosPublicos" />
            </ul>
        </div>
    )
}
