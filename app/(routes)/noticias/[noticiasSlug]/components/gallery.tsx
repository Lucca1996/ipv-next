"use client";

import { useGetNoticiaBySlug } from "@/api/getNoticiaBySlug";
import { NoticiaType } from "@/types/noticia";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import { useState } from "react";

export const NoticiaGallery = () => {
    const params = useParams();
    const { noticiasSlug } = params;
    const { result }: ResponseType = useGetNoticiaBySlug(noticiasSlug);
    const [selectedImg, setSelectedImg] = useState<number | null>(null); // Se utiliza null en lugar de 0 para no tener imagen seleccionada por defecto
    const [imgPop, setImgPop] = useState<boolean>(false);

    const handleImageClick = (imgIndex: number) => {
        setSelectedImg(imgIndex); // Establece el índice de la imagen seleccionada
        setImgPop(true); // Muestra el overlay de la imagen
    };

    const closeImagePop = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault(); // Previene la acción predeterminada del enlace
        setImgPop(false); // Cierra el overlay
        setSelectedImg(null); // Limpia la imagen seleccionada
    };

    const goToNextImage = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (selectedImg !== null) {
            setSelectedImg((prevIndex) => {
                const totalImages = result[0].imagenes.length;
                if (prevIndex !== null) {
                    event.preventDefault();
                    const nextIndex = (prevIndex + 1) % totalImages; // Para que vuelva al inicio si se llega al final
                    return nextIndex;
                }
                return prevIndex; // Si prevIndex es null, no se hace nada
            });
        }
    };

    const goToPreviousImage = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (selectedImg !== null) {
            setSelectedImg((prevIndex) => {
                const totalImages = result[0].imagenes.length;
                if (prevIndex !== null) {
                    event.preventDefault();
                    const prevIndexUpdated = (prevIndex - 1 + totalImages) % totalImages; // Para que vuelva al final si se llega al principio
                    return prevIndexUpdated;
                }
                return prevIndex; // Si prevIndex es null, no se hace nada
            });
        }
    };

    return (
        <div className="md:flex md:flex-col-reverse">
            {result?.map((noticia: NoticiaType) => {
                const { imagenes, id } = noticia;

                return (
                    <div
                        className="grid md:grid-cols-5 grid-cols-2 gap-4 mb-28"
                        id={`contenedorFotos-${id}`}
                        key={id}
                    >
                        {imagenes.map((imagen, imgIndex) => (
                            <div key={imgIndex} className="image" onClick={() => handleImageClick(imgIndex)}>
                                <img
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imagen.url}`}
                                    alt={`Imagen ${imgIndex + 1} de la noticia ${id}`}
                                    className="md:h-96 w-96 object-cover cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
                                />
                            </div>
                        ))}
                        {imgPop && selectedImg !== null && (
                            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-85 z-50 flex justify-center items-center gap-3">
                                <a href="#" className="absolute top-10 right-14" onClick={closeImagePop}>
                                    <img
                                        src="https://static-00.iconduck.com/assets.00/window-close-icon-256x256-zj9yhiet.png"
                                        alt="Cerrar"
                                        className="max-w-[30px] max-h-[10vh] object-contain"
                                    />
                                </a>
                                <a href="#" className="absolute right-28" onClick={goToNextImage}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/11181/11181468.png"
                                        alt="Next"
                                        className="max-w-[40px] max-h-[10vh] object-contain"
                                    />
                                </a>
                                <a href="#" className="absolute left-28 rotate-180" onClick={goToPreviousImage}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/11181/11181468.png"
                                        alt="Previous"
                                        className="max-w-[40px] max-h-[10vh] object-contain"
                                    />
                                </a>
                                <img
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imagenes[selectedImg].url}`}
                                    alt={`Imagen ${selectedImg + 1} de la noticia ${id}`}
                                    width={650}
                                    height={500}
                                    className="max-w-[650px] max-h-[80vh] object-contain"
                                />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
