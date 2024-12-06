import { useGetNoticiaBySlug } from "@/api/getNoticiaBySlug";
import { NoticiaType } from "@/types/noticia";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";

export const NoticiaGallery = () => {
    const params = useParams();
    const { noticiasSlug } = params;
    const { result }: ResponseType = useGetNoticiaBySlug(noticiasSlug);

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
                            <div className="image" key={imgIndex}>
                                <img
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imagen.url}`}
                                    alt={`Imagen ${imgIndex + 1} de la noticia ${id}`}
                                    className="md:h-96 w-96 object-cover cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
                                />
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};
