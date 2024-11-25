"use client"
import { useRouter } from "next/navigation"
import { MenuList } from "./menu-list"

export const Navbar = () => {
    const router = useRouter()
    return (
        <>
            <nav className="bg-[#FFE3A7] dark:bg-[#FFE3A7]">

                <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-end">  <ul className="flex mt-0 space-x-3">
                    <li>
                        <a href="https://www.facebook.com/ipvtucuman">
                            <img className="w-5 h-5 md:w-6 md:h-6" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/abv4pbfsm4ah4fnaayyz.jpg" alt="faecbook ipv" aria-label="icono de facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ipvtucuman/">
                            <img className="h-5 md:h-6" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/php4y95kucyemzk28uhl.jpg" alt="instagram ipv" aria-label="icono de instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/ipvdutuc?lang=es">
                            <img className="w-5 h-5 md:w-6 md:h-6" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/j6851lz4ykzsxh2rnjdl.jpg" alt="twitter ipv" aria-label="icono de twitter" />
                        </a>
                    </li>
                </ul>
                </div>
            </nav>
            <nav className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
                <h1 className="text-3xl" onClick={() => router.push("/")}>Tarre<span className="font-bold">Dev</span></h1>
                <div className="items-center justify-between hidden sm:flex">
                    <MenuList />
                </div>
                <div className="flex sm:hidden">
                    <p>Items menu mobile
                    </p>
                </div>

            </nav>
        </>
    )
}
