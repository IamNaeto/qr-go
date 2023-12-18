import Image from "next/image";
const QRGuildlines = () => {
    return ( 
        <main className="relative top-[100px] bg-skyblue w-full px-[5%] py-20 grid gap-4 bg-background">
            <h1 className="text-[40px] text-dark font-semibold text-center">Create your Qr Code in matter of minutes.</h1>

            <section className="grid grid-cols-3 gap-8 mb-20">
                <div className="flex flex-col items-center justify-center text-center gap-2">
                    <Image src="/img/content.png" width={150} height={150} alt="content"/>
                    
                    <h1 className="text-[22px] text-dark font-semibold max-w-[60%]">Choose the content of your Qr Code.</h1>

                    <p className="text-[16px] text-dark max-w-[40%]">Select either Url or File Upload</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center gap-2">
                    <Image src="/img/design.png" width={150} height={150} alt="content"/>
                    
                    <h1 className="text-[22px] text-dark font-semibold max-w-[60%]">Customize and design</h1>

                    <p className="text-[16px] text-dark max-w-[70%]">Fill in all the information and use our QR generator to get a unique design</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center gap-2">
                    <Image src="/img/download.png" width={150} height={150} alt="content"/>
                    
                    <h1 className="text-[22px] text-dark font-semibold max-w-[70%]">Download your QR code.</h1>

                    <p className="text-[16px] text-dark max-w-[70%]">Get your QR code in jpeg or PNG format, print it or show in digital form and Voila!</p>
                </div>
            </section>
        </main>
     );
}
 
export default QRGuildlines;