"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
const Footer = () => {
    const pathName = usePathname()
    return ( 
        <main className="bg-darkblue px-[5%] py-10 relative top-[150px] grid gap-8">
            <section className="grid grid-cols-3 items-center justify-center">
                <Link href="/">
                    <Image src="/img/footer-logo.png" width={50} height={50} alt="footer-img"/>
                </Link>

                <div className="text-[16px] text-offwhite font-semibold flex items-center justify-between">
                    <Link href="/home" className={pathName === "/home" ? "visited:text-dark transition-all delay-200" : "hover:text-dark transition-all delay-200"}>Home</Link>
                    <Link href="/about" className={pathName === "/about" ? "visited:text-dark transition-all delay-200" : "hover:text-dark transition-all delay-200"}>About US</Link>
                    <Link href="/contact" className={pathName === "/contact" ? "visited:text-dark transition-all delay-200" : "hover:text-dark transition-all delay-200"}>Contact US</Link>
                </div>

                <div className="flex items-end justify-end gap-4">
                    <FaXTwitter className="text-dark text-3xl p-1.5 rounded-full bg-offwhite hover:bg-skyblue transition-all delay-200 cursor-pointer"/>
                    <FaFacebookF className="text-dark text-3xl p-1.5 rounded-full bg-offwhite hover:bg-skyblue transition-all delay-200 cursor-pointer"/>
                    <FaYoutube className="text-dark text-3xl p-1.5 rounded-full bg-offwhite hover:bg-skyblue transition-all delay-200 cursor-pointer"/>
                </div>
            </section>

            <hr className="w-full bg-offwhite"/>

            <p className="text-[16px] text-offwhite text-center">Copyright@2024 QR-Go. All Rights Reserved.</p>
            
        </main>
     );
}
 
export default Footer;