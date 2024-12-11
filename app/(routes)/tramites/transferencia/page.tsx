import { Mantenimiento } from "../../components/mantenimiento";

export default function Page() {
    return (

        <>
            <img className="w-full mx-auto" src="https://ipvtuc.gob.ar/web/wp-content/uploads/2024/02/pagina-WEB-foto-encabezado-institucional-1024x397.png" alt="" />

            <div className=" md:flex pt-24">
                <div className="md:ml-20 px-5 md:px-0">
                    <h2 className="mb-8 font-bold md:text-7xl text-5xl">Tramites</h2>
                    <h2 className="mb-8 font-bold md:text-7xl text-5xl">Transferencia de una vivienda</h2>
                    <h2 className="mt-32 mb-8 font-bold text-5xl">Requisitos:</h2>

                    <ul className="space-y-4 text-left ">
                        <li className="flex items-center space-x-3 rtl:space-x-reverse">
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>La vivienda a transferir debe cumplir con el plazo de tres años de ocupación obligatoria por
                                parte del adjudicatario.</span>
                        </li>
                        <li className="flex items-center space-x-3 rtl:space-x-reverse">
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>La presentación de la transferencia deberá ser dentro de los 60 días corridos a partir de
                                efectuada la compra de la vivienda.</span>
                        </li>
                    </ul>

                    <h2 className="mt-14 mb-8 font-bold text-5xl">Documentación a presentar:</h2>
                    <p className=" font-medium mb-8 text-xl whitespace-pre-wrap">Nota dirigida a la Sra. Interventora del Instituto
                        de la Vivienda –
                        Arq. NORA BELLONI, solicitando autorización de TRANSFERENCIA Y
                        CANCELACIÓN O CAMBIO DE TITULAR. Para cancelación presentar fotocopia de
                        BOLETA DE PAGO ESPECIAL.

                        Acta de Tenencia Precaria, Boleto de Compra Venta o Escritura
                        otorgada por el IPV y DU a los adjudicatarios originales.

                        Boleto de Compra Venta y/o Escritura entre las partes (con
                        Certificación de Firmas, sellado en la D.G.R de la Provincia).
                        FOTOCOPIA AUTENTICADA POR ESCRIBANIA.

                        Arancel por Transferencia de Vivienda ($6.450) – por Transferencia
                        de Lotes ($3.150) CUENTA N° 360000200980735 (IPV y DU) – BANCO MACRO.
                        ORIGINAL.

                        TRANSFERENCIA A CBU: 2850600130002009807355 ALIAS: CENTRO.COMETA.SIGNO-

                        Acta de Matrimonio (ACTUALIZADA) – Fotocopia DNI (adquirente/s)
                        (AUTENTICADOS POR ESCRIBANIA O POLICIA) – Acta de Nacimiento de los
                        hijos (ACTUALIZADAS).

                        Certificado de Convivencia de la Policía.
                        Certificado de Trabajo (ORIGINAL), Último Recibo de Sueldo
                        (AUTENTICADO)- Últimos tres pagos MONOTRIBUTO.

                        Para el caso de trabajadores independientes, certificación de ingresos
                        ante C.P.N, avalada por el Colegio de Graduados en Ciencias Económicas.

                        Libre deuda de Expensas.
                        Informe del REGISTRO INMOBILIARIO de No poseer Vivienda.
                        La Documentación antes mencionada debe presentarse en ORIGINALES
                        FOTOCOPIAS.

                        LA PRESENTACION DE LA TRANSFERENCIA DEBERA SER DENTRO DE LOS 30 DIAS (CORRIDOS) A PARTIR DE EFECTUADA LA
                        COMPRA DE LA VIVIENDA.</p>
                </div>
            </div>
        </>
    )
}
