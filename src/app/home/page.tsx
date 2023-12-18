import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import QRGuildlines from "@/components/QRGuildlines";
import TryQR from "@/components/TryQR";

const Home = () => {
    return ( 
        <main>
            <Header />
            <HomeHero />
            <QRGuildlines />
            <TryQR />
            <FAQ />
        </main>
     );
}
 
export default Home;