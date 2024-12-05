"use client"

import { useGetNoticiaBySlug } from "@/api/getNoticiaBySlug"
import { NoticiaType } from "@/types/noticia";
import { ResponseType } from "@/types/response"
import { useParams } from "next/navigation"

export default function Page() {
    const params = useParams();
    const { noticiasSlug } = params;
    const { result }: ResponseType = useGetNoticiaBySlug(noticiasSlug)
    console.log(result)
    return (

        <>
            <img className="w-full mx-auto" src="https://ipvtuc.gob.ar/web/wp-content/uploads/2023/12/pagina-WEB-fotoencabezado-noticias.png" alt="" />
            {result != null && result.map((noticia: NoticiaType) => {
                const { titulo, fecha, imagenPrincipal, contenido, category, descripcion } = noticia;
                return (
                    <>
                        <div className="max-w-screen-xl flex-wrap items-end justify-between mx-auto mt-32 mb-20 p-4">
                            <h5 className="mb-10 text-5xl font-bold tracking-tight text-gray-900">{titulo}</h5>
                            <div className="max-w-full md:max-h-dvh md:flex bg-gray-300">
                                <img className=" md:w-2/3" src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${result !== null && (imagenPrincipal.url)}`} alt="" />
                                <div className="md:w-80 pb-8 md:pb-0">
                                    <div>
                                        <h2 className="ml-12 mt-5  font-semibold">Noticia principal</h2>
                                        <h2 className="ml-12 mt-5 md:mb-28 mb-5 font-light">{fecha}</h2>
                                    </div>
                                    <div className="flex">
                                        <img className="w-5 h-5 md:w-6 md:h-6 ml-12" src="https://res.cloudinary.com/dncvxpgj1/image/upload/w_200/v1714390010/IPV/ayblnmi0v8xb8dfidajz.png" alt="" />

                                        <img className="w-5 h-5 md:w-6 md:h-6 ml-2" src="https://res.cloudinary.com/dncvxpgj1/image/upload/w_200/v1714390010/IPV/cudtnnibjvxzi1nppoed.png" alt="" />

                                    </div>
                                    <h2 className="ml-12 mt-5 mb-5 text-4xl font-bold">{category.name}</h2>
                                    <p className="ml-12 text-xl mr-5 md:mr-0 whitespace-pre-wrap">{descripcion}</p>
                                </div>
                            </div>


                        </div>

                        <section className="">
                            <div className="bg-[#FFB81A] md:flex pt-24">
                                <div className="md:ml-80 ml-5 mr-5 md:mr-0">
                                    <p className=" font-medium max-w-4xl text-xl whitespace-pre-wrap">{contenido}</p>

                                    <h2 className="mt-32 mb-8 font-bold text-7xl">Galería</h2>
                                    <div className="flex mb-14 font-bold text-xl">
                                        <a className="mr-20 hover:underline active:underline underline-offset-[17px] mb-10 md:mb-0 cursor-pointer" id="botonFotos">Fotografías</a>
                                        <a className="hover:underline active:underline underline-offset-[17px] cursor-pointer" id="botonVideos">Videos</a>
                                    </div>
                                </div>
                                <div className="hidden md:block text-white ml-32 font-bold">
                                    <p className="text-3xl mb-5">Total de viviendas</p>
                                    <p className="text-7xl mb-12">140</p>
                                    <p className="text-3xl mb-5">Entregadas</p>
                                    <p className="text-7xl">40</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-5 grid-cols-2 mb-28" id="contenedorFotos">

                                <div className="image">
                                    <img src="" alt="" className="md:h-96 w-96 object-cover cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out" />
                                </div>

                            </div>
                            <div className="aspect-video mt-8 hidden" id="contenedorVideos">

                                <h2 className="md:mt-24 md:ml-24 font-bold md:text-6xl">Aun no se han cargado videos en esta noticia...</h2>


                            </div>

                        </section>

                    </>
                );
            })}



        </>
    )
}
