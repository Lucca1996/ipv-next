"use client"
import { useGetCategory } from "@/api/getCategory"
import { ResponseType } from "@/types/response"
import { useParams, useRouter } from "next/navigation"
import { FiltersControlsCategory } from "./components/filters-controls-category"

export default function Page() {
    const { result, loading }: ResponseType = useGetCategory('entregas')
    const router = useRouter()
    console.log(result)
    return (

        <>
            <img className="w-full mx-auto" src="https://ipvtuc.gob.ar/web/wp-content/uploads/2024/02/pagina-WEB-noticias.png" alt="" />
            <div className="max-w-screen-xl flex-wrap items-end justify-between mx-auto mt-20 mb-20 p-4">
                <h1 className="hidden md:block font-extrabold text-5xl mb-20" >Categorías</h1>

                <div className="flex">
                    <div className="md:block hidden">
                        <div className="flex mb-0">
                            <img src="https://res.cloudinary.com/dncvxpgj1/image/upload/v1714050217/IPV/nzce7ilwvxwc5u1mcmu0.png" className="h-7 mr-2" alt="" />
                            <h3 className="text-lg w-64 mb-5" >Información de interes</h3>
                        </div>
                        {result !== null && !loading && (
                            <h4 className="font-extrabold mb-5">{result.length > 0 ? result[0].category.name : 'No hay categorías disponibles'}</h4>
                        )}
                        <ul className="mb-5">
                            <FiltersControlsCategory />
                        </ul>
                        <h4 className="font-extrabold mb-5">Institucionales</h4>
                        <ul className="mb-5">

                        </ul>
                        <h4 className="font-extrabold mb-5">Actos Públicos</h4>
                        <ul>

                        </ul>
                    </div>
                    <div className="md:flex md:flex-col-reverse">
                        <div className="  overflow-hidden mb-5">
                            <div className="md:flex md:flex-row-reverse">
                                <div className="max-w-xs md:h-56 h-auto ml-9 mb-5 md:mb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <img className="rounded-t-lg " src="" alt="" />
                                </div>
                                <div className=" max-w-xs md:max-w-5xl md:p-4 ml-9 md:ml-0">
                                    <h5 className="text-xl  font-black mb-2"></h5>
                                    <p className="text-gray-700 mb-4">
                                    </p>
                                    <p className="text-sm text-gray-500"></p>
                                    <div className="flex md:block place-content-around">
                                        <a href="/noticias/<%= noticia._id %>" className="inline-flex font-black items-center px-3 py-2 mt-8 bg-[#FFB81A]  hover:bg-[#ff891a]">
                                            Visitar Noticia
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
