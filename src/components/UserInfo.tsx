import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { RiAiGenerate } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { auth } from "@/app/firebase/config";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const UserInfo = () => {
    // Manage visibility of nav menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const [user] = useAuthState(auth);

    //Control nav hide and show
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Signout logics
    const router = useRouter()

    const handleSignOut = () => {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
            signOut(auth)
            // localStorage.removeItem('user')
            router.replace("/home");
        }, 2000);
    }

    return (
        <main className="w-full relative top-0 grid items-center justify-center place-items-center">
            <section className="flex items-center justify-center cursor-pointer" onClick={toggleMenu}>
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="text-[16px] text-dark font-bold flex items-center justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <Image src="/img/user-active.png" width={40} height={40} alt="user" />
                            <h1>Jane Doe</h1>
                        </div>
                        {isMenuOpen ? <IoIosArrowUp className="text-2xl text-dark" /> : <IoIosArrowDown className="text-2xl text-dark" />}
                    </div>

                    <p className="text-[13px] text-dark">{user?.email}</p>
                </div>
            </section>

            {isMenuOpen &&
                <motion.section
                    className="absolute top-14 min-w-[200px] px-4 py-8 text-[16px] text-dark font-medium text-center bg-skyblue shadow-lg rounded-md border border-darkblue grid items-center justify-center gap-2 animate-rotate-in"
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <Link href="/create" className="hover:font-semibold hover-text-darkblue transition-all delay-150 flex items-center gap-2"><RiAiGenerate className="text-2xl" /> Create</Link>
                    <Link href="profile" className="hover:font-semibold hover-text-darkblue transition-all delay-150 flex items-center gap-2"><FaRegUser className="text-2xl" /> Profile</Link>
                    <p
                        onClick={handleSignOut}
                        className="hover:font-semibold hover-text-darkblue transition-all delay-150 cursor-pointer flex items-center gap-2"><TbLogout className="text-2xl" />
                        {isLoading ? (
                            'Signing Out...'
                        ) : (
                            'Sign Out'
                        )}</p>
                </motion.section>
            }
        </main>
    );
}

export default UserInfo;