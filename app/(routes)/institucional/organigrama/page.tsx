import Layout from "../components/layout";
import { CarouselInst } from "../mision/components/carouselInst";

export default function Page() {
    return (

        <>
            <Layout />
            <div className="max-w-screen-xl mb-16 flex flex-wrap items-end justify-between mx-auto p-4">
                <div>
                    <div >
                        <h2 className="md:mt-20 mb-8 font-bold text-5xl md:text-7x1">Organigrama</h2>
                    </div>
                    <img className="mx-auto md:mb-3 mb-14 " src="https://ipvtuc.gob.ar/web/wp-content/uploads/2024/02/organigrama.jpg" alt="organigrama ipv instituto provincial de la vivienda tucuman" />
                </div>
            </div>
            <CarouselInst />
        </>
    )
}
