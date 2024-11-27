import React from 'react'
import { CarouselDef } from './carousel-def'

export const MainPage = () => {

    return (
        <>
            <img className="w-full mx-auto" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/qrv2t1en7vylcvlvfmqh.jpg" alt="imagen portada ipv tucuman instituto provincial de vivienda" />
            <div className="max-w-screen-xl flex-wrap justify-between mx-auto mt-32 mb-20 p-4">
                <h2 className="font-extrabold text-5xl mb-20 text-center">Trámites y Servicios</h2>
                <div className="container flex justify-center space-x-20">
                    <a href="http://119.8.76.209:8080/Boletas/com.boleta.homeipv">
                        <div className=" image-container text-center">
                            <img src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/vnncweww0rltgxs85f9k.jpg" alt="Imagen impresora ipv original" className="original-image mx-auto w-16 mb-3" />
                            <img src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/wlhh0wgv16ymup71m3xe.jpg" alt="Imagen impresora ipv al hacer hover" className="hover-image mx-auto w-16 mb-3 hidden" />
                            <h3 className="font-extrabold text-2xl mb-3 text-center">Imprimir Boleta </h3>
                            <p className="hidden md:block">Descargue e Imprima<br />
                                su Boleta mensual</p>
                        </div>
                    </a>
                    <a href="https://ipvtuc.gob.ar/inscripcion/registracion.php">
                        <div className=" image-container text-center">
                            <img src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/slvuu9ssn5bivlpyhlqb.jpg" alt="Imagen nota ipv original" className="original-image mx-auto w-16 mb-3" />
                            <img src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/cbcgbzwg2u7y8tm6ujpe.jpg" alt="Imagen nota ipv al hacer hover" className="hover-image mx-auto w-16 mb-3 hidden" />
                            <h3 className="font-extrabold text-2xl mb-3 text-center">Inscripción</h3>
                            <p className="hidden md:block">Inscripción y Actualización<br />
                                de Datos</p>
                        </div>
                    </a>
                </div>
                <h2 className=" text-5xl font-bold tracking-tight mt-32 text-gray-900">Noticias</h2>
                <div className='flex justify-center'>
                    <CarouselDef />
                </div>
                <h2 className="mb-10 text-5xl font-bold tracking-tight text-gray-900">Programas Especiales</h2>
                <h2 className=" text-5xl font-bold tracking-tight text-gray-900">Obras</h2>

            </div>
        </>
    )
}
