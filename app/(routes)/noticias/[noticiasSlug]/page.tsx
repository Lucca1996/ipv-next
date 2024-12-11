"use client";

import { useGetNoticiaBySlug } from "@/api/getNoticiaBySlug";
import { NoticiaType } from "@/types/noticia";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import { NoticiaGallery } from "./components/gallery";
import { useState } from "react";
import DefaultPlayer from "next-video/player";
import { SkeletonBigSchema } from "@/components/skeletonBigSchema";


export default function Page() {
    const params = useParams();
    const { noticiasSlug } = params;
    const { result, loading }: ResponseType = useGetNoticiaBySlug(noticiasSlug);

    const [showGallery, setShowGallery] = useState(true);

    const handleShowGallery = () => setShowGallery(true);
    const handleShowVideos = () => setShowGallery(false);

    return (
        <>

            <img
                className="w-full mx-auto"
                src="https://ipvtuc.gob.ar/web/wp-content/uploads/2023/12/pagina-WEB-fotoencabezado-noticias.png"
                alt=""
            />
            <div className="max-w-screen-xl flex-wrap items-end justify-between mx-auto  mb-20 p-4">
                {
                    loading && (
                        <SkeletonBigSchema grid={5} />
                    )
                }
            </div>
            {result != null &&
                result.map((noticia: NoticiaType) => {
                    const {
                        titulo,
                        fecha,
                        imagenPrincipal,
                        contenido,
                        category,
                        descripcion,
                        videos,
                    } = noticia;

                    return (
                        <>

                            <div className="max-w-screen-xl flex-wrap items-end justify-between mx-auto mt-32 mb-20 p-4">
                                <h5 className="mb-10 text-5xl font-bold tracking-tight text-gray-900">
                                    {titulo}
                                </h5>
                                <div className="max-w-full md:max-h-dvh md:flex bg-gray-300">
                                    <img
                                        className="md:w-2/3"
                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${result !== null && imagenPrincipal.url}`}
                                        alt=""
                                    />
                                    <div className="md:w-80 pb-8 md:pb-0">
                                        <div>
                                            <h2 className="ml-12 mt-5 font-semibold">
                                                Noticia principal
                                            </h2>
                                            <h2 className="ml-12 mt-5 md:mb-28 mb-5 font-light">
                                                {fecha}
                                            </h2>
                                        </div>
                                        <div className="flex">
                                            <img
                                                className="w-5 h-5 md:w-6 md:h-6 ml-12"
                                                src="https://res.cloudinary.com/dncvxpgj1/image/upload/w_200/v1714390010/IPV/ayblnmi0v8xb8dfidajz.png"
                                                alt=""
                                            />
                                            <img
                                                className="w-5 h-5 md:w-6 md:h-6 ml-2"
                                                src="https://res.cloudinary.com/dncvxpgj1/image/upload/w_200/v1714390010/IPV/cudtnnibjvxzi1nppoed.png"
                                                alt=""
                                            />
                                        </div>
                                        <h2 className="ml-12 mt-5 mb-5 text-4xl font-bold">
                                            {category.name}
                                        </h2>
                                        <p className="ml-12 text-xl mr-5 md:mr-0 whitespace-pre-wrap">
                                            {descripcion}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <section>
                                <div className="bg-[#FFB81A] md:flex pt-24">
                                    <div className="md:ml-40 ml-5 mr-5 md:mr-0">
                                        <p className="font-medium max-w-4xl text-xl whitespace-pre-wrap">
                                            {contenido}
                                        </p>

                                        <h2 className="mt-32 mb-8 font-bold text-7xl">Galería</h2>
                                        <div className="flex mb-14 font-bold text-xl relative">
                                            <a
                                                className={`mr-20 cursor-pointer relative ${showGallery ? "text-black" : "text-gray-500"}`}
                                                id="botonFotos"
                                                onClick={handleShowGallery}
                                            >
                                                Fotografías
                                                <span
                                                    className={`absolute left-0 bottom-[-2px] h-[2px] w-full bg-black transform transition-transform duration-300 ${showGallery ? "scale-x-100" : "scale-x-0"}`}
                                                />
                                            </a>
                                            <a
                                                className={`cursor-pointer relative ${!showGallery ? "text-black" : "text-gray-500"}`}
                                                id="botonVideos"
                                                onClick={handleShowVideos}
                                            >
                                                Videos
                                                <span
                                                    className={`absolute left-0 bottom-[-2px] h-[2px] w-full bg-black transform transition-transform duration-300 ${!showGallery ? "scale-x-100" : "scale-x-0"}`}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="hidden md:block text-white ml-32 font-bold">
                                        <p className="text-3xl mb-5">Total de viviendas</p>
                                        <p className="text-7xl mb-12">140</p>
                                        <p className="text-3xl mb-5">Entregadas</p>
                                        <p className="text-7xl">40</p>
                                    </div>
                                </div>

                                {showGallery ? (
                                    <NoticiaGallery />
                                ) : (
                                    <div className="mt-8">
                                        {videos ? (
                                            videos.map((video) => (
                                                <DefaultPlayer
                                                    key={video.id}
                                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${video.url}`}
                                                    controls
                                                    loop
                                                    className="mt-5 mx-auto"
                                                />
                                            ))
                                        ) : (
                                            <h2 className="md:mt-24 md:mb-96 md:ml-24 font-bold md:text-6xl">
                                                Aun no se han cargado videos en esta noticia...
                                            </h2>
                                        )}
                                    </div>
                                )}
                            </section>
                        </>
                    );
                })}
        </>
    );
}
