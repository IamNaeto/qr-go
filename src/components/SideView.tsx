import Image from "next/image";
const SideView = () => {
    return ( 
        <main className="h-full">
            <section className="bg-liteskyblue flex items-center justify-center py-5 md:py-20 h-full min-h-auto md:min-h-screen">
                <Image src="/img/contactus.png" width={400} height={400} alt="aboutus-img" loading="lazy"/>
            </section>
        </main>
     );
}
 
export default SideView;