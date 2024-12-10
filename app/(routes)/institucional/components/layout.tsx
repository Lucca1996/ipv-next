import Link from 'next/link';

export default function Layout() {
    return (
        <>
            <img className="w-full mx-auto" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/qrisgjgquw49wxcvqkgv.jpg" alt="" />

            <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <h2 className="hidden md:block mb-8 font-bold text-7xl">Institucional</h2>
                        <ul className="text-2xl font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link href="/institucional/mision" scroll={false} className="block py-2 px-3 hover:underline active:underline underline-offset-[17px] rounded md:bg-transparent md:p-0">
                                    Misión
                                </Link>
                            </li>
                            <li>
                                <Link href="/institucional/autoridades" scroll={false} className="block py-2 px-3 hover:underline active:underline underline-offset-[17px] rounded md:border-0 md:p-0">
                                    Autoridades
                                </Link>
                            </li>
                            <li>
                                <Link href="/institucional/organigrama" scroll={false} className="block py-2 px-3 hover:underline active:underline underline-offset-[17px] rounded md:border-0 md:p-0">
                                    Organigrama
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
