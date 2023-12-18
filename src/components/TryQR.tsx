import Image from "next/image";

const TryQR = () => {
    return (
        <main className="w-full px-[5%] relative top-[100px] py-20">
            <section className="w-full grid grid-cols-2 items-center justify-center place-items-center">
                <section className="grid gap-4">
                    <h1 className="max-w-[80%] text-[40px] text-dark font-semibold">Try QR Go Today!</h1>

                    <p className="max-w-[70%] text-[16px] text-dark font-medium">Get started for free. Generate codes
                    for anything you want. Have all digital information
                    saved in a QR code. Sign in to create your own QR code now!</p>

                    <div>
                        <button className="text-[16px] px-5 py-2 bg-blue text-white font-semibold rounded-md">Get Started</button>
                    </div>
                </section>

                <section>
                    <Image src="/img/qr-go.png" width={250} height={250} alt="hero-img" />
                </section>
            </section>
        </main>
    );
}

export default TryQR;