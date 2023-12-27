"use client"
import FileQR from "@/components/FileQR";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PrivateRoute from "@/components/PrivateRoute";

const File = () => {
    return ( 
        <main>
            <PrivateRoute>
                <Header />
                <FileQR />
                <Footer />
            </PrivateRoute>
        </main>
     );
}
 
export default File;