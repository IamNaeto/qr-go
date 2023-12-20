"use client"
import Login from "@/components/Login";
import SideView from "@/components/SideView";
import SignUp from "@/components/SignUp";
import { useState } from "react";
const Auth = () => {
   const [isLogin, setIsLogin] = useState(true)

    return ( 
        <main className="grid grid-cols-2 items-center">
            <SideView />

            <section className="grid gap-4 py-10">
                <div className="flex items-center justify-center gap-10 text-[26px] font-semibold bg-liteskyblue">
                    <h1 
                    className={isLogin ? "p-2 border-b-4 border-b-blue transition-all delay-150 cursor-pointer" : "p-2 hover:bg-blue hover:text-white transition-all delay-150 cursor-pointer"}
                    onClick={() => setIsLogin(true)}
                    >
                        Login
                    </h1>

                    <h1 
                    className={!isLogin ? "p-2 border-b-4 border-b-blue transition-all delay-150 cursor-pointer" : "p-2 hover:bg-blue hover:text-white transition-all delay-150 cursor-pointer"}
                    onClick={() => setIsLogin(false)}
                    >
                        Sign up
                    </h1>
                </div>

            {isLogin ?
                <Login onSwitch={() => setIsLogin(false)} />
                :
                <SignUp onSwitch={() => setIsLogin(true)}/>
            }
            </section>
        </main>
     );
}
 
export default Auth;