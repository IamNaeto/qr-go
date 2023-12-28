"use client"
import Login from "@/components/Login";
import SideView from "@/components/SideView";
import SignUp from "@/components/SignUp";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { TbLoader3 } from "react-icons/tb";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false);

    const [user] = useAuthState(auth);
    const router = useRouter();


    useEffect(() => {
        if (user) {
            // router.push('/create');
            router.replace('/create')
            setIsLoading(true);
    
          // Simulate a loading process
          const timeoutId = setTimeout(() => {
            setIsLoading(false);
            
          }, 500);
    
          // Clear the timeout if the component unmounts or user logs out
          return () => clearTimeout(timeoutId);
        }
      }, [user, router]);
    
      // If user is loading, show a loader
      if (isLoading) {
        return <div className="w-full h-screen flex items-center justify-center">
            <TbLoader3 className="animate-spin text-darkblue text-7xl font-semibold cursor-not-allowed text-center" />;
        </div>
      }
    
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 items-center py-8 md:py-0">
            {isLogin ?
                <div className="grid gap-2 md:hidden mb-5 px-[5%]">
                    <h1 className="text-[28px] md:text-[36px] lg:text-[40px] text-dark text-center font-semibold">Welcome back to <br /> <span className="text-blue">QR-Go</span></h1>
                    <p className="text-[14px] md:text-[16px] text-dark text-center">Login with your details you entered during registration.</p>
                </div>
                :
                <div className="grid gap-2 md:hidden mb-5 px-[5%]">
                    <h1 className="text-[28px] md:text-[36px] lg:text-[40px] text-dark text-center font-semibold">Generate a <span className="text-blue">QR code</span></h1>
                    <p className="text-[14px] md:text-[16px] text-dark text-center">Get started and generate a Qr code on the go</p>
                </div>
            }

            <SideView />

            <section className="grid gap-4 pt-5 pb-5 md:py-10">
                <div className="flex items-center justify-center gap-10 text-[20px] md:text-[24px] xl:text-[26px] font-semibold bg-liteskyblue rounded-lg md:rounded-none mx-[5%] md:mx-0">
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
                    <SignUp onSwitch={() => setIsLogin(true)} />
                }
            </section>
        </main>
    );
}

export default Auth;