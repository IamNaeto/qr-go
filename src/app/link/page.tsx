"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LinkQR from "@/components/LinkQR";
import PrivateRoute from "@/components/PrivateRoute";

const Link = () => {
    return ( 
        <main>
            <PrivateRoute>
                <Header />
                <LinkQR />
                <Footer />
            </PrivateRoute>
        </main>
     );
}
 
export default Link;