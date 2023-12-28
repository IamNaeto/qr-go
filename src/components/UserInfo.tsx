import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { auth } from "@/app/firebase/config";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { TbLoader3 } from "react-icons/tb";

const UserInfo = () => {
    // Manage visibility of nav menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const [user] = useAuthState(auth);

    //Control nav hide and show
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSignOut = () =>{
        signOut(auth)        
    }

    return (
        <main className="w-full relative top-0">
            <section className="flex items-center justify-center cursor-pointer" onClick={toggleMenu}>
                <div>
                    <Image src="/img/user-active.png" width={40} height={40} alt="user" />
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                    <div className="text-[16px] text-dark font-bold flex items-center justify-center gap-2">
                        {isMenuOpen ? <IoIosArrowUp className="text-2xl text-dark" /> : <IoIosArrowDown className="text-2xl text-dark" />}
                        <h1>Jane Doe</h1>
                    </div>

                    <p className="text-[13px] text-dark">{user?.email}</p>
                </div>
            </section>

            {isMenuOpen &&
                <section className="absolute left-7 w-full px-10 py-8 text-[16px] text-dark font-medium text-center bg-skyblue shadow-lg rounded-md border border-darkblue grid items-center justify-center gap-2 animate-rotate-in">
                    <Link href="/create" className="hover:font-semibold hover-text-darkblue transition-all delay-150">Create</Link>
                    <Link href="profile" className="hover:font-semibold hover-text-darkblue transition-all delay-150">Profile</Link>
                    <p
                        onClick={handleSignOut}
                        className="hover:font-semibold hover-text-darkblue transition-all delay-150 cursor-pointer">Logout</p>
                </section>
            }
        </main>
    );
}

export default UserInfo;