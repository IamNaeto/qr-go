import Image from "next/image";
const LandingHero = () => {
    return ( 
        <main className="w-full grid grid-cols-2 items-center justify-center px-[5%] relative top-[80px]">
            <section className="grid gap-4">
                <h1 className="max-w-[80%] text-[42px] text-dark font-semibold"><span className="text-blue">Create a QR code</span> to
                both Safeguard your data
                and <span className="text-blue">advertise</span> your <span>business</span> or 
                 <span className="text-blue"> idea.</span></h1>

                <p className="max-w-[80%] text-[18px] text-dark font-medium">Our platform allows you to effortlessly generate QR codes,
                keep track of them, and analyze their performance
                through detailed statistics.</p>

                <div className="flex items-center gap-4">
                    <button className="text-[16px] px-5 py-2 bg-blue text-white font-semibold rounded-md">Get Started</button>
                    <button className="text-[16px] px-5 py-2 bg-white text-blue border-2 border-blue font-semibold rounded-md">Learn More</button>
                </div>
            </section>

            <section>
                <Image src="/img/landing-img.png" width={600} height={600} alt="hero-img" />
            </section>
        </main>
     );
}
 
export default LandingHero;