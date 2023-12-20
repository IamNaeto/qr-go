import Image from "next/image";
import Link from "next/link";
import GetStartedBtn from "./GetStartedBtn";

const TryQR = () => {
    return (
        <main className="w-full px-[5%] relative top-[100px] py-20">
            <section className="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center place-items-center">
                <section className="grid gap-6 items-center justify-center place-items-center md:place-items-start md:justify-start">
                    <h1 className="w-full lg:w-[80%] text-[28px] md:text-[36px] lg:text-[40px] text-dark font-semibold text-center md:text-left">Try QR Go Today!</h1>

                    <p className="w-full lg:w-[70%] text-[14px] md:text-[16px] text-dark font-medium text-center md:text-left">Get started for free. Generate codes
                    for anything you want. Have all digital information
                    saved in a QR code. Sign in to create your own QR code now!</p>

                    <GetStartedBtn />
                </section>

                <section className="mt-12 md:mt-0">
                    <Image src="/img/qr-go.png" width={250} height={250} alt="hero-img" loading="lazy"/>
                </section>
            </section>
        </main>
    );
}

export default TryQR;