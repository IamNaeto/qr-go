import Image from "next/image";
const LinkQR = () => {
    return ( 
        <main className="relative top-[100px] w-full pt-5 md:pt-10 pb-20 px-[5%] grid grid-cols-1 md:grid-cols-2 items-center md:items-start gap-10 md:gap-52">
            <section className="grid gap-2">
                <h1 className="text-[28px] md:text-[32px] text-dark font-semibold text-center md:text-left">Enter URL</h1>

                <form action="" className="grid gap-4 text[14px] md:text-[16px] text-dark">
                <input type="url" placeholder="Enter your url here" className="input pl-11" required/>
                
                <button className="w-full text[14px] md:text-[16px] px-3 md:px-5 py-2.5 md:py-3 bg-blue text-white font-semibold rounded-md hover:shadow-lg transition-all delay-150">Generate</button>
                </form>
            </section>

            <section className="w-full grid place-items-center">
                <div className="w-full md:w-[80%] border-dashed border-[3px] p-8 rounded-xl grid grid-cols-1 items-center justify-center place-items-center gap-4">
                    <Image src="/img/qrcode.png" width={200} height={200} alt="qrcode"/>

                    <h1 className="text-[28px] text-dark text-center font-semibold">Download as</h1>

                <button className="w-full text[14px] md:text-[16px] px-3 md:px-5 py-2.5 md:py-3 bg-blue text-white font-semibold rounded-md hover:shadow-lg transition-all delay-150">JPG</button>

                <button className="w-full text[14px] md:text-[16px] px-3 md:px-5 py-2.5 md:py-3 bg-blue text-white font-semibold rounded-md hover:shadow-lg transition-all delay-150">PNG</button>

                </div>
            </section>
        </main>
     );
}
 
export default LinkQR;