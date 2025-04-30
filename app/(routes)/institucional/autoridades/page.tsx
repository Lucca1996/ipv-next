import Layout from "../components/layout";
import { CarouselInst } from "../mision/components/carouselInst";
import Image from 'next/image';

export default function Page() {
    return (
        <>
            <Layout />
            <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
                <div className="w-full mb-14">
                    <h2 className="md:mt-10 mb-12 font-bold text-5xl md:text-7xl text-gray-900 relative inline-block">
                        Autoridades
                        <span className="absolute bottom-[-10px] left-0 w-1/3 h-1 bg-[#FFB81A] rounded-full"></span>
                    </h2>

                    {/* Primera autoridad */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16 transition-all duration-500 hover:shadow-xl transform hover:translate-y-[-5px]">
                        <div className="md:flex justify-between">
                            <div className="p-6 md:p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-2 h-16 bg-[#FFB81A] mr-4 rounded-full"></div>
                                    <div>
                                        <h3 className="text-4xl font-medium mb-1 text-gray-900">Nora Elvira Belloni</h3>
                                        <h3 className="text-3xl font-bold mb-1 text-[#FFB81A]">Interventora</h3>
                                    </div>
                                </div>
                                <div className="ml-6 space-y-4">
                                    <div>
                                        <p className="font-medium text-xl text-[#FFB81A]">Profesión</p>
                                        <p className="font-medium text-lg text-gray-700">Arquitecta - Universidad Nacional de Tucumán</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-xl text-[#FFB81A]">Cargo</p>
                                        <p className="font-medium text-lg text-gray-700">Interventora del Instituto Provincial de Vivienda y Desarrollo Urbano de la Provincia de Tucumán</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 md:p-8 flex items-center justify-center">
                                <div className="overflow-hidden rounded-xl shadow-md">
                                    <Image
                                        className="h-64 w-auto object-cover transition-transform duration-500 hover:scale-110"
                                        src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/mposfjau3shbasj41sk4.jpg"
                                        alt="Interventora IPV"
                                        width={300}
                                        height={256}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Segunda autoridad */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:translate-y-[-5px]">
                        <div className="md:flex justify-between">
                            <div className="p-6 md:p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-2 h-16 bg-[#FFB81A] mr-4 rounded-full"></div>
                                    <div>
                                        <h3 className="text-4xl font-medium mb-1 text-gray-900">Emilse Giandominco</h3>
                                        <h3 className="text-3xl font-bold mb-1 text-[#FFB81A]">Sub Interventora</h3>
                                    </div>
                                </div>
                                <div className="ml-6 space-y-4">
                                    <div>
                                        <p className="font-medium text-xl text-[#FFB81A]">Profesión</p>
                                        <p className="font-medium text-lg text-gray-700">Abogada - Universidad Nacional de Tucumán</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-xl text-[#FFB81A]">Cargo</p>
                                        <p className="font-medium text-lg text-gray-700">Sub Interventora del Instituto Provincial de Vivienda y Desarrollo Urbano de la Provincia de Tucumán</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 md:p-8 flex items-center justify-center">
                                <div className="overflow-hidden rounded-xl shadow-md">
                                    <Image
                                        className="h-64 w-auto object-cover transition-transform duration-500 hover:scale-110"
                                        src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/wufty3bp4eipn1ql7v5m.jpg"
                                        alt="Sub Interventora IPV"
                                        width={300}
                                        height={256}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CarouselInst />
        </>
    );
}

