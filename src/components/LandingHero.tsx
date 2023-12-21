import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import GetStartedBtn from "./GetStartedBtn";

const LandingHero = () => {
    return (
        <main className="w-full px-[5%] relative top-[80px] py-10">
            <section className="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center place-items-center">
                <section className="grid gap-4">
                    <h1 className="w-full lg:w-[80%] text-[28px] md:text-[36px] lg:text-[40px] xl:text-[42px] text-dark font-semibold text-center md:text-left"><span className="text-blue">Create a QR code</span> to
                        both Safeguard your data
                        and <span className="text-blue">advertise</span> your <span>business</span> or
                        <span className="text-blue"> idea.</span></h1>

                    <p className="w-full lg:w-[80%] text-[14px] md:text-[16px] lg:text-[18px] text-dark font-medium text-center md:text-left">Our platform allows you to effortlessly generate QR codes,
                        keep track of them, and analyze their performance
                        through detailed statistics.</p>

                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <GetStartedBtn />
                        <Link href="/home" className="text-[16px] px-5 py-2 bg-white text-blue border-2 border-blue font-semibold rounded-md">Learn More</Link>
                    </div>
                </section>

                <section>
                    <Image src="/img/landing-img.png" width={580} height={580} alt="hero-img"  loading="lazy"/>
                </section>
            </section>

            <section className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-4">
                    <FaXTwitter className="text-dark text-3xl p-1.5 rounded-full bg-skyblue hover:bg-darkblue hover:text-white transition-all delay-200 cursor-pointer"/>
                    <FaFacebookF className="text-dark text-3xl p-1.5 rounded-full bg-skyblue hover:bg-darkblue hover:text-white transition-all delay-200 cursor-pointer"/>
                    <FaYoutube className="text-dark text-3xl p-1.5 rounded-full bg-skyblue hover:bg-darkblue hover:text-white transition-all delay-200 cursor-pointer"/>
                </div>

                <hr className="bg-darkblue h-1 w-full"/>
            </section>
        </main>
    );
}

export default LandingHero;