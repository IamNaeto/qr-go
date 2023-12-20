"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GetStartedBtn from "./GetStartedBtn";
const Header = () => {
    const pathName = usePathname()
    return ( 
        <main className="w-full fixed top-0 bg-white z-10">
            <header className="flex items-center justify-between bg-skyblue px-[5%] py-2">
                <Link href="/" className="w-[60px]">
                    <Image src="/img/logo.png" width={70} height={70} alt="logo"  className="w-full" />
                </Link>

                <nav className="w-[60%] flex items-center justify-between">
                    <div className="text-dark text-[16px] font-semibold  flex items-center justify-between gap-10">
                        <Link href="/home" className={pathName === "/home" ? " visited:text-darkblue transition-colors delay-200" : "hover:text-gray-600 transition-colors delay-200"}>Home</Link>
                        <Link href="/about" className={pathName === "/about" ? " visited:text-darkblue transition-colors delay-200" : "hover:text-gray-600 transition-colors delay-200"}>AboutUs</Link>
                        <Link href="contact" className={pathName === "/contact" ? " visited:text-darkblue transition-colors delay-200" : "hover:text-gray-600 transition-colors delay-200"}>ContactUs</Link>
                    </div>

                    <GetStartedBtn />
                </nav>
            </header>

            <hr className="h-3 bg-darkblue mt-1"/> 
        </main>
     );
}
 
export default Header;