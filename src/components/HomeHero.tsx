import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";

const HomeHero = () => {
    return (
        <main className="w-full px-[5%] relative top-[80px] py-10">
            <section className="w-full grid grid-cols-2 items-center justify-center place-items-center">
                <section className="grid gap-4">
                    <h1 className="max-w-[80%] text-[42px] text-dark font-semibold"><span className="text-blue">QR code</span> generator
that makes all the <span className="text-blue"> difference.</span></h1>

                    <p className="max-w-[60%] text-[18px] text-dark font-medium">Monitor, share, download
                        and generate your Qr Codes all in
                        one place.</p>

                    <div className="flex items-center gap-4">
                        <button className="text-[16px] px-5 py-2 bg-blue text-white font-semibold rounded-md">Get Started</button>
                        <Link href="/home" className="text-[16px] px-5 py-2 bg-white text-blue border-2 border-blue font-semibold rounded-md">Learn More</Link>
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