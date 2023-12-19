import Image from "next/image";

const FAQ = () => {
    return (
        <main className="relative top-[100px] w-full">
            <hr className="bg-darkblue h-3 w-full mb-2" />
            <section className=" relative w-full h-[150px] bg-darkblue flex items-center justify-center">
                <div className="bg-white p-10 shadow-xl absolute bottom-[-50px]">
                    <h1 className="text-[40px] text-center font-semibold text-dark">Frequently Asked Questions</h1>
                </div>
            </section>

            <section className="relative top-[50px] px-[5%] grid gap-8 py-20">
                <div className="grid grid-cols-2 items-center justify-center place-items-center">
                    <div>
                        <Image src="/img/faq1.png" width={300} height={300} alt="hero-img" loading="lazy"/>
                    </div>

                    <div className="grid gap-4">
                        <h1 className="text-[40px] text-dark font-semibold">What is QR Code?</h1>

                        <p className="text-[16px] text-dark font-medium">A  QR code (Quick Response Code) is a type of barcode
                            that stores information and can be read by a digital device,
                            such as a cell phone.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 items-center justify-center place-items-center">
                    <div className="flex flex-col items-end justify-end gap-4">
                        <h1 className="text-[40px] text-dark font-semibold text-right">Who uses QR Code?</h1>

                        <p className="text-[16px] text-dark font-medium text-right">QR Codes are used by virtually everyone.
                            It has documents, links to pages and websites attached to it,
                            With a QR Coode information can be stored safely
                            for easy access.</p>
                    </div>

                    <div>
                        <Image src="/img/faq2.png" width={300} height={300} alt="hero-img" loading="lazy"/>
                    </div>
                </div>

                <div className="grid grid-cols-2 items-center justify-center place-items-center">
                    <div>
                        <Image src="/img/faq3.png" width={300} height={300} alt="hero-img" loading="lazy"/>
                    </div>

                    <div className="grid gap-4">
                        <h1 className="text-[40px] text-dark font-semibold">What kind of information
                            can I store on a QR Code?</h1>

                        <p className="text-[16px] text-dark font-medium">QR Codes are so versatile, they are able to
                            store a variety of information depending on your needs.
                            It can store a URL to make it easier for you to open a page on the web
                            with just a scan. It can also store contact details so you don’t have to
                            manually type the name, phone number, and email address to save it
                            to your phone.</p>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default FAQ;