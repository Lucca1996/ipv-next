"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

//import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useGetFeatured } from "@/api/useGetFeatured"
import { ResponseType } from "@/types/response"
import { SkeletonSchema } from "./skeletonSchema"
import { NoticiaType } from "@/types/noticia"
//import { useRouter } from "next/router"

export function CarouselDef() {

    const { loading, result }: ResponseType = useGetFeatured();
    console.log(result)


    const dataCarousel = [
        {
            id: 1,
            title: 'Barrio 140 viviendas e infraestructura en Villa Mariano Moreno II',
            description: 'Entregamos las llaves a 40 nuevas propietarias y propietarios del Barrio',
            link: '/'
        },
        {
            id: 2,
            title: 'El gobernador otorga un beneficio de 50000 pesos',
            description: 'ponele que fuera cierto igual esto es puro texto de relleno para probar que sea solo un poco mas largo que el anterior',
            link: '/'
        },
        {
            id: 3,
            title: 'Payasos asesinos en lomas',
            description: 'Dos adolescentes intentan convencer a sus vecinos de que los payasos que han llegado al pueblo son extraterrestres. Telefe informo que el fin esta cerca y ya no queda esperanza',
            link: '/'
        },
    ]




    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2500,
                })
            ]}
            className="w-full max-w-6xl"
        >
            <CarouselContent>
                {loading && (
                    <SkeletonSchema grid={3} />
                )}
                {result != null && (
                    result.map((noticia: NoticiaType) => {
                        const { imagenes, id, titulo, subtitulo, fecha } = noticia
                        return (

                            <CarouselItem key={id}>

                                <div className="flex-wrap items-end  justify-between mx-auto mt-20 mb-28 ">
                                    <div className=" md:flex bg-gray-300">
                                        <img className=" md:w-2/3" src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imagenes[0].url}`} alt="image featured" />
                                        <div className="sm:w-80">
                                            <h2 className="hidden md:block ml-12 mt-5 font-semibold">Noticia principal</h2>
                                            <h2 className="ml-12 mt-5 md:mb-24 font-light">{fecha}</h2>
                                            <div className="flex">
                                                <img className="w-5 h-5 md:w-6 md:h-6 ml-12" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/zmdo4qdcpusm3om08ur4.jpg" alt="logo camara foto ipv" />

                                                <img className="w-5 h-5 md:w-6 md:h-6 ml-2" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/jlrnktzbuw5ubsveknyv.jpg" alt="logo video ipv" />

                                            </div>
                                            <h2 className="ml-12 mt-5 mb-5 text-2xl font-bold">{titulo}</h2>
                                            <p className="ml-12 text-xl whitespace-pre-wrap ">{subtitulo}</p>
                                            <div className="flex place-content-around">
                                                <a className="inline-flex font-black text-xl mt-8 items-center md:px-20 px-10 whitespace-nowrap py-5 mb-8 md:ml-12 bg-[#FFB81A]  hover:bg-[#ff891a]">
                                                    Visitar Noticia
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </CarouselItem>
                        )
                    })
                )

                }
            </CarouselContent>
            <CarouselContent>

                {dataCarousel.map(({ id, title, description }) => (
                    <CarouselItem key={id}>

                        <div className="flex-wrap items-end  justify-between mx-auto mt-20 mb-28 ">
                            <div className=" md:flex bg-gray-300">
                                <img className=" md:w-2/3" src="https://res.cloudinary.com/dncvxpgj1/image/upload/f_webp/v1715864793/IPV/ita0tdqkdl5u9wfogzxh.jpg" alt="imagen principal noticia ipv tucuman instituto provincial de vivienda" />
                                <div className="sm:w-80">
                                    <h2 className="hidden md:block ml-12 mt-5 font-semibold">Noticia principal</h2>
                                    <h2 className="ml-12 mt-5 md:mb-24 font-light">12/03/2024</h2>
                                    <div className="flex">
                                        <img className="w-5 h-5 md:w-6 md:h-6 ml-12" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/zmdo4qdcpusm3om08ur4.jpg" alt="logo camara foto ipv" />

                                        <img className="w-5 h-5 md:w-6 md:h-6 ml-2" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/jlrnktzbuw5ubsveknyv.jpg" alt="logo video ipv" />

                                    </div>
                                    <h2 className="ml-12 mt-5 mb-5 text-2xl font-bold">{title}</h2>
                                    <p className="ml-12 text-xl whitespace-pre-wrap ">{description}</p>
                                    <div className="flex place-content-around">
                                        <a className="inline-flex font-black text-xl mt-8 items-center md:px-20 px-10 whitespace-nowrap py-5 mb-8 md:ml-12 bg-[#FFB81A]  hover:bg-[#ff891a]">
                                            Visitar Noticia
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </CarouselItem>

                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
