import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import GetStartedBtn from "./GetStartedBtn";

const HomeHero = () => {
    return (
        <main className="w-full px-[5%] relative top-[80px] py-10">
            <section className="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center place-items-center">
                <section className="grid gap-4">
                    <h1 className="w-full lg:w-[80%] text-[35px] md:text-[38px] lg:text-[42px] text-dark font-semibold text-center md:text-left"><span className="text-blue">QR code</span> generator that makes all the <span className="text-blue"> difference.</span></h1>

                    <p className="w-full lg:w-[60%] text-[15px] md:text-[18px] text-dark font-medium text-center md:text-left">Monitor, share, download
                        and generate your Qr Codes all in
                        one place.</p>

                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <GetStartedBtn />
                        <Link href="/home" className="text-[15px] md:text-[16px] px-5 py-2 bg-white text-blue border-2 border-blue font-semibold rounded-md">Learn More</Link>
                    </div>
                </section>

                <section>
                    <Image src="/img/homehero.png" width={600} height={600} alt="hero-img" loading="lazy"/>
                </section>
            </section>
        </main>
    );
}

export default HomeHero;