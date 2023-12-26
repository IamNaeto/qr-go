"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GetStartedBtn from "./GetStartedBtn";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import UserInfo from "./UserInfo";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

const Header = () => {
    // Manage visibility of nav menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const [user] = useAuthState(auth)

    const pathName = usePathname()

    //Control nav hide and show
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return ( 
        <main className="w-full fixed top-0 bg-white z-30">
            <header className="flex items-center justify-between bg-skyblue px-[5%] py-2">
                <Link href="/" className="w-[60px]">
                    <Image src="/img/logo.png" width={70} height={70} alt="logo"  className="w-full" />
                </Link>

                <nav className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-[82px] md:top-auto left-0 md:left-auto md:relative w-full md:w-[70%] xl:w-[60%] md:flex flex-col md:flex-row items-center justify-between bg-skyblue md:bg-none py-2 md:p-auto`}>
                    <div className="text-dark text-[16px] font-semibold  flex flex-col md:flex-row items-center justify-between gap-10 mb-10 md:mb-0">
                        <Link href="/home" className={pathName === "/home" ? " visited:text-darkblue transition-colors delay-200" : "hover:text-gray-600 transition-colors delay-200"}>Home</Link>
                        <Link href="/about" className={pathName === "/about" ? " visited:text-darkblue transition-colors delay-200" : "hover:text-gray-600 transition-colors delay-200"}>AboutUs</Link>
                        <Link href="contact" className={pathName === "/contact" ? " visited:text-darkblue transition-colors delay-200" : "hover:text-gray-600 transition-colors delay-200"}>ContactUs</Link>
                    </div>
                    {!user ?
                    <GetStartedBtn />
                    :
                    <UserInfo />
                    }
                </nav>
                
                {isMenuOpen ?
                    <IoClose className="text-4xl text-darkblue block md:hidden cursor-pointer" onClick={toggleMenu}/>
                    :
                    <FaBars className="text-3xl text-darkblue block md:hidden cursor-pointer" onClick={toggleMenu}/>
                }

                
            </header>

            <hr className="h-3 bg-darkblue mt-1"/> 
        </main>
     );
}
 
export default Header;