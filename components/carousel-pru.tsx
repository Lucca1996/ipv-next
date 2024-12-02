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
import { useRouter } from "next/navigation"

export function CarouselPru() {

    const { loading, result }: ResponseType = useGetFeatured();
    const router = useRouter();

    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 3000,
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
                        const { imagenes, id, titulo, subtitulo, fecha, slug } = noticia
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
                                                <a className="inline-flex font-black text-xl cursor-pointer mt-8 items-center md:px-20 px-10 whitespace-nowrap py-5 mb-8 md:ml-12 bg-[#FFB81A]  hover:bg-[#ff891a]"
                                                    onClick={() => router.push(`noticias/${slug}`)}>
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
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
