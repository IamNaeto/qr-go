import Image from "next/image";
import Link from "next/link";
const SideView = () => {
    return ( 
        <main className="h-full">
            <section className="bg-liteskyblue flex items-center justify-center py-5 md:py-20 h-full min-h-auto md:min-h-screen">
                <Link href={"/"}>
                    <Image src="/img/contactus.png" width={400} height={400} alt="aboutus-img" loading="lazy"/>
                </Link>
            </section>
        </main>
     );
}
 
export default SideView;