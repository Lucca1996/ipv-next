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
                <h2 className=" text-5xl font-bold tracking-tight text-gray-900">Obras</h2>

            </div>
        </>
    )
}
