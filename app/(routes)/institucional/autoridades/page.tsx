import Layout from "../components/layout";

export default function Page() {
    return (

        <>
            <Layout />
            <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
                <div className="mb-14">
                    <h2 className="md:mt-20 mb-8 font-bold text-5xl md:text-7x1">Autoridades</h2>
                    <div className="md:flex justify-between mb-24">
                        <div>
                            <div className="flex mb-5">
                                <img src="https://res.cloudinary.com/dncvxpgj1/image/upload/v1714050217/IPV/nzce7ilwvxwc5u1mcmu0.png"
                                    className=" mr-2" alt="barra titulo ipv" />
                                <div>
                                    <h3 className="text-4xl font-medium mb-1">Nora Elvira Belloni</h3>
                                    <h3 className="text-3xl font-bold mb-1 ">Interventora</h3>
                                </div>
                            </div>
                            <div className="ml-4">
                                <p className=" font-medium text-xl ">Profesión</p>
                                <p className=" font-medium mb-5">Arquitecta - Universidad Nacional de Tucumán</p>

                                <p className=" font-medium text-xl ">Cargo</p>
                                <p className=" font-medium">Interventora del Instituto Provincial de Vivienda y Desarrollo Urbano de la
                                    Provincia de Tucumán</p>
                            </div>
                        </div>
                        <div className="flex md:block place-content-around">
                            <img className="h-56 md:ml-12 mb-14 md:mb-0 items-center"
                                src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/mposfjau3shbasj41sk4.jpg" alt="interventora ipv" />
                        </div>
                    </div>
                    <div className="md:flex justify-between">
                        <div>
                            <div className="flex mb-5">
                                <img src="https://res.cloudinary.com/dncvxpgj1/image/upload/v1714050217/IPV/nzce7ilwvxwc5u1mcmu0.png"
                                    className=" mr-2" alt="barra titulo ipv" />
                                <div>
                                    <h3 className="text-4xl font-medium mb-1">Emilse Giandominco</h3>
                                    <h3 className="text-3xl font-bold mb-1 ">Sub Interventora</h3>
                                </div>
                            </div>
                            <div className="ml-4">
                                <p className=" font-medium text-xl ">Profesión</p>
                                <p className=" font-medium mb-5">Abogada - Universidad Nacional de Tucumán</p>

                                <p className=" font-medium text-xl ">Cargo</p>
                                <p className=" font-medium ">Sub Interventora del Instituto Provincial de Vivienda y Desarrollo Urbano de la
                                    Provincia de Tucumán</p>
                            </div>
                        </div>
                        <div className="flex md:block place-content-around">
                            <img className="h-56 md:ml-12 mb-14 md:mb-0 items-center"
                                src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/wufty3bp4eipn1ql7v5m.jpg" alt="sub interventora ipv" />
                        </div>

                    </div>
                </div>


                <script src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.min.js"
                    defer></script>
                <link href="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/css/swiffy-slider.min.css" rel="stylesheet"
                />

                <div className="swiffy-slider mb-28">
                    <ul className="slider-container">
                        <li><img src="https://res.cloudinary.com/dncvxpgj1/image/upload/v1715180644/IPV/qmxv1kkj7t2iceisbflt.png"
                            className="max-w-full h-auto" alt="slider institucional ipv" /></li>
                        <li><img src="https://res.cloudinary.com/dncvxpgj1/image/upload/v1715180645/IPV/bdbg7nl5vggntdwn1pnt.png"
                            className="max-w-full h-auto" alt="slider institucional ipv" /></li>
                    </ul>

                    <button type="button" className="slider-nav"></button>
                    <button type="button" className="slider-nav slider-nav-next"></button>

                    <div className="slider-indicators">
                        <button className="active"></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
        </>
    )
}
