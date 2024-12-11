import Layout from "../components/layout";
import { CarouselInst } from "./components/carouselInst";


export default function Page() {
    return (

        <>
            <Layout />
            <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
                <div className=" md:flex pt-8 mb-14">
                    <div className=" px-5 md:px-0 ">
                        <h2 className="md:mt-20 mb-8 font-bold text-5xl md:text-7x1">Misión</h2>
                        <p className=" font-medium text-xl whitespace-pre-wrap">El Instituto Provincial de Vivienda y Desarrollo Urbano esta facultado para elaborar la politica,
                            programación y ejecución de viviendas, ordenamiento y desarrollo de los centros urbanos,
                            conforme a las atribuciones otorgadas por la Ley Nº 3.619.
                            Instrumentar y armonizar los recursos disponibles y potenciales, así económicas como tecnológicas
                            a fin de que:
                            Las familias, especialmente las de menores recursos, radicadas en el territorio de la provincia, se
                            alojen dignamente.
                            Las familias encuentren en la vivienda, ya sea urbana o rural, un medio eficaz para el cumplimiento y
                            ejercicio de sus funciones.
                            La vivienda por su emplazamiento y equipamiento contribuya al bienestar de la comunidad.
                            Se logre a través del planeamiento físico. el mejor y mas racional uso de la tierra.
                            Se propenda a la formación, estabilidad y permanencia social del grupo familiar, integrándolo a la
                            comunidad mediante la promoción y educación relacionada con la vivienda.
                            Se procure la mejor amortización del sector vivienda con el resto de los sectores económicos y
                            sociales para que aquel que actúe como factor de desarrollo integral de la provincia.
                        </p>
                    </div>
                    <div className=" md:ml-32 font-bold px-5 md:px-0 mb-14 md:mb-0">
                        <p className="text-3xl mb-5">Total de viviendas</p>
                        <p className="text-7xl mb-12">650</p>
                        <p className="text-3xl mb-5">Entregadas</p>
                        <p className="text-7xl mb-12">34,160</p>
                        <p className="text-3xl mb-5">Total de viviendas</p>
                        <p className="text-7xl mb-12">2001</p>
                        <p className="text-3xl mb-5">Entregadas</p>
                        <p className="text-7xl">40</p>
                    </div>
                </div>

            </div>
            <CarouselInst />
        </>

    )
}