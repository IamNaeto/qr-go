"use client"
import CreateQR from "@/components/CreateQR";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";

const Create = () => {
    const [user] = useAuthState(auth)
    const router = useRouter()
    // console.log(user)
    
    if(!user){
        router.push('/auth')
    }

    return ( 
        <main>
            <Header />
            <CreateQR />
            <Footer />
        </main>
     );
}
 
export default (Create);