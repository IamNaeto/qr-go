"use client"
import CreateQR from "@/components/CreateQR";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PrivateRoute from "@/components/PrivateRoute";

const Create = () => {
    return ( 
        <main>
            <PrivateRoute>
                <Header />
                <CreateQR />
                <Footer />
            </PrivateRoute>
        </main>
     );
}
 
export default Create;