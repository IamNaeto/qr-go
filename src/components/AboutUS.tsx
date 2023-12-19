import Image from "next/image";

const AboutUs = () => {
    return ( 
        <main className="relative top-[60px] grid grid-cols-2 items-center justify-center">
            <section className="bg-liteskyblue flex items-center justify-center py-20 h-full">
                <Image src="/img/about.png" width={400} height={400} alt="aboutus-img" loading="lazy"/>
            </section>

            <section className="py-20 px-[10%]">
                <h1 className="text-[40px] text-dark font-semibold text-center">About Us</h1>

                <div className="grid gap-8">
                    <p className="text-[16px] text-dark text-center">QR Go is the easiest way to generate QR codes for websites and file downloads. Simply enter the URL or select the file, and QR Go will generate a QR code that can be scanned by any QR code reader.</p>

                    <p className="text-[16px] text-dark text-center">QR Go was created by a team of developers and designers who saw the potential for QR codes to revolutionize the way people access information. Since then, QR Go has been used by businesses of all sizes to generate QR codes for everything from product pages to downloadables.</p>

                    <p className="text-[16px] text-dark text-center">QR Go is constantly evolving to make it even easier for businesses to use QR codes. Our latest features include custom branding, tracking, and analytics so businesses can see how their QR codes are being used and make changes accordingly.</p>
                </div>
            </section>
        </main>
     );
}
 
export default AboutUs;