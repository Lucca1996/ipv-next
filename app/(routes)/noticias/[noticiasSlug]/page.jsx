export default function Page() {
    return (

        <>

            <img className="w-full mx-auto" src="https://ipvtuc.gob.ar/web/wp-content/uploads/2023/12/pagina-WEB-fotoencabezado-noticias.png" alt="" />

            <div className="max-w-screen-xl flex-wrap items-end justify-between mx-auto mt-32 mb-20 p-4">
                <h5 className="mb-10 text-5xl font-bold tracking-tight text-gray-900"></h5>
                <div className="max-w-full md:max-h-dvh md:flex bg-gray-300">
                    <img className=" md:w-2/3" src="<%= noticia.coverimage[0].url %>" alt="" />
                    <div className="md:w-80 pb-8 md:pb-0">
                        <div>
                            <h2 className="ml-12 mt-5  font-semibold">Noticia principal</h2>
                            <h2 className="ml-12 mt-5 md:mb-28 mb-5 font-light"></h2>
                        </div>
                        <div className="flex">
                            <img className="w-5 h-5 md:w-6 md:h-6 ml-12" src="https://res.cloudinary.com/dncvxpgj1/image/upload/w_200/v1714390010/IPV/ayblnmi0v8xb8dfidajz.png" alt="" />

                            <img className="w-5 h-5 md:w-6 md:h-6 ml-2" src="https://res.cloudinary.com/dncvxpgj1/image/upload/w_200/v1714390010/IPV/cudtnnibjvxzi1nppoed.png" alt="" />

                        </div>
                        <h2 className="ml-12 mt-5 mb-5 text-4xl font-bold"></h2>
                        <p className="ml-12 text-xl mr-5 md:mr-0 whitespace-pre-wrap"></p>
                    </div>
                </div>
                <div id="map" ></div>

            </div>

            <section className="">
                <div className="bg-[#FFB81A] md:flex pt-24">
                    <div className="md:ml-80 ml-5 mr-5 md:mr-0">
                        <p className=" font-medium max-w-4xl text-xl whitespace-pre-wrap"></p>

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

                    <iframe
                        className="md:w-3/5 md:h-3/5 mx-auto"
                        src="<%= noticia.videos %>"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>

            </section>

        </>
    )
}
