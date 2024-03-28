"use client"
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

const GetStartedBtn = () => {
    const [user] = useAuthState(auth)

    let userLoggedIn;

    console.log(userLoggedIn)

    if (typeof window !== 'undefined') {
        userLoggedIn = localStorage.getItem('user');
    }

    if(!user && userLoggedIn != undefined)
    
    return ( 
        <main>
            <Link href="/auth" className="text[14px] md:text-[16px] px-3 md:px-5 py-2.5 md:py-3 bg-blue text-white font-semibold rounded-md hover:shadow-lg transition-all delay-150">Get Started</Link>
        </main>
     );
}
 
export default GetStartedBtn;