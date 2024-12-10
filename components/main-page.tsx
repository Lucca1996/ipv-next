import React from 'react'

import { CarouselPru } from './carousel-pru'
import { Tramites } from './tramites'

export const MainPage = () => {

    return (
        <>
            <img className="w-full mx-auto" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/qrv2t1en7vylcvlvfmqh.jpg" alt="imagen portada ipv tucuman instituto provincial de vivienda" />
            <div className="max-w-screen-xl flex-wrap justify-between mx-auto mt-32 mb-20 p-4">
                <h2 className="font-extrabold text-5xl mb-20 text-center">Trámites y Servicios</h2>
                <Tramites />
                <h2 className=" text-5xl font-bold tracking-tight mt-32 text-gray-900">Noticias</h2>

                <div className='flex justify-center'>
                    <CarouselPru />
                </div>
                <h2 className="mb-10 text-5xl font-bold tracking-tight text-gray-900">Programas Especiales</h2>
                <div className="md:flex mb-24">
                    <div className="md:w-1/2">
                        <img src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/qtlgv2mx4osmtyp2vvhi.jpg" alt="imagen promat ipv tucuman instituto provincial de vivienda" />
                        <div className="bg-[#ffce63] pt-5 pb-11 pr-14 ">
                            <h2 className="font-bold text-xl md:ml-52 ml-14">PROMAT</h2>
                            <p className="ml-52 mt-2">El martes 7 de noviembre se despidió quien venía siendo
                                hasta el momento la Sub-Interventora del Instituto.</p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/qtlgv2mx4osmtyp2vvhi.jpg" alt="imagen promeba ipv tucuman instituto provincial de vivienda" />
                        <div className="bg-[#FFB81A] pt-5 pb-11 pr-14 ">
                            <h2 className="font-bold text-xl md:ml-52 ml-14">PROMEBA</h2>
                            <p className="ml-52 mt-2">El martes 7 de noviembre se despidió quien venía siendo
                                hasta el momento la Sub-Interventora del Instituto.</p>
                        </div>
                    </div>
                </div>
                <h2 className=" text-5xl font-bold tracking-tight text-gray-900">Obras</h2>

                <div className=" md:mb-36 bg-[#FFB81A] md:h-2/4">
                    <div className="md:flex max-w-screen-xl justify-between mx-auto mt-32 px-4 py-10">

                        <img className="md:w-96" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/pdiayc2ihedrzpdq3dhx.jpg" alt="imagen obras ipv tucuman instituto provincial de vivienda" />
                        <img className="md:w-96" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/kfx5rtprkxlnawtsp76u.jpg" alt="imagen obras ipv tucuman instituto provincial de vivienda" />
                        <img className="md:w-96" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/qlz1vafk9see10db9rme.jpg" alt="imagen obras ipv tucuman instituto provincial de vivienda" />
                    </div>
                    <div className="bg-[#ffce63]">

                        <div className="flex  px-4  max-w-screen-xl mx-auto place-content-around md:place-content-end flex-row-reverse h-32 mb-20">
                            <a href="" className="inline-flex font-black text-xl mt-10 items-center px-12  mb-10  bg-white hover:bg-[#FFB81A]">
                                ENTRAR
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
