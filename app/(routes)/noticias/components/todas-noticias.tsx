import { useGetProductField } from "@/api/getProductField"
import { ResponseType } from "@/types/response"

export const ListaNoticias = () => {
    const { result, loading }: ResponseType = useGetProductField()
    console.log(result)
    return (
        <div className="md:flex md:flex-col-reverse">
            <div className="  overflow-hidden mb-5">
                <div className="md:flex md:flex-row-reverse">
                    <div className="max-w-xs md:h-56 h-auto ml-9 mb-5 md:mb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg " src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${result !== null && !loading && (result[0].imagenPrincipal.url)}`} alt="" />
                    </div>
                    <div className=" max-w-xs md:max-w-5xl md:p-4 ml-9 md:ml-0">
                        <h5 className="text-xl  font-black mb-2"> {result !== null && !loading && (result[0].titulo)}</h5>
                        <p className="text-gray-700 mb-4">
                            {result !== null && !loading && (result[0].subtitulo)}
                        </p>
                        <p className="text-sm text-gray-500"> {result !== null && !loading && (result[0].fecha)}</p>
                        <div className="flex md:block place-content-around">
                            <a href="/noticias/<%= noticia._id %>" className="inline-flex font-black items-center px-3 py-2 mt-8 bg-[#FFB81A]  hover:bg-[#ff891a]">
                                Visitar Noticia
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
