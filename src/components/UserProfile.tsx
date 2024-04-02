import { motion } from "framer-motion";
import Image from "next/image";
import { auth } from "@/app/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const UserProfile = () => {
    const { user } = useContext(UserContext);
    
    // Logic to get date of account creation
    const [authUser] = useAuthState(auth);
    let creationDate: null | any;
    if (authUser && authUser.metadata) {
        creationDate = authUser.metadata.creationTime;
    }
    return (
        <main className="w-full h-full relative top-[90px] md:top-[95px] mb-10">
            <section className="bg-darkblue w-full h-[150px] mb-20 px-[5%] py-5">
                <motion.div
                    className="relative flex justify-between gap-5 w-full h-full"
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <div className="grid gap-2">
                        <h1 className="text-[24px] text-white font-semibold pt-3">Profile Information</h1>

                        <div className="absolute bottom-[-150px] left-[10px] flex flex-col items-center justify-center gap-4 z-10">
                            <div className="p-2 rounded-full bg-white shadow-lg w-[150px]">
                                <Image src="/img/user.png" width={100} height={100} alt="user" loading="lazy" className="w-full" />
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="text[14px] md:text-[16px] px-4 py-1 bg-blue text-white font-semibold rounded-md hover:shadow-lg transition-all delay-150 cursor-pointer">View</button>
                                <button className="text[14px] md:text-[16px] px-4 py-1 bg-white text-blue border border-blue font-semibold rounded-md hover:shadow-lg transition-all delay-150 cursor-pointer">Edit</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="text-[14px] md:text-[16px] px-3 md:px-5 py-2 md:py-3 bg-blue text-white font-semibold rounded-md hover:shadow-lg transition-all delay-150">Edit Profile</button>
                    </div>
                </motion.div>

                <motion.div
                    className="relative py-10 mt-32 md:mt-0"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-start md:items-end justify-start md:justify-end">
                        <div>
                            <h1 className="text-[18px] text-dark font-semi-bold font-semibold mb-3">Account Details</h1>
                            <div className="text-[16px] text-dark font-semibold flex items-center basis-60 flex-wrap gap-3 md:gap-8">
                                <h1>User ID: <span className="font-normal ml-3">{user?.qrgId.toLocaleUpperCase()}</span></h1>
                                <h1>Member Since: <span className="font-normal ml-3">{new Date(creationDate).toLocaleDateString()}</span></h1>
                                <h1>Account Type: <span className="font-normal ml-3">{user?.accountType}</span></h1>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="relative w-full h-full px-[5%] py-20 mt-[250px] md:mt-[50px]">
                <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-60 text-[14px] md:text-[16px] text-dark">
                    <motion.div
                        className="grid gap-2"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-[20px] text-dark font-bold">Profile Details</h1>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold">Email Address:</h1>
                            <input type="email" value="johndoe@xyzmail.com" readOnly className="profile-input" />
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold">Name:</h1>
                            <input type="name" value="John" readOnly className="profile-input" />
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold">Phone Number:</h1>
                            <input type="number" value="08031234567" readOnly className="profile-input" />
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold">Gender:</h1>
                            <input type="text" value="Male" readOnly className="profile-input" />
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold">Address:</h1>
                            <input type="text" value="Plot 4, Ola street, Oshodi" readOnly className="profile-input" />
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold">State:</h1>
                            <input type="text" value="Lagos" readOnly className="profile-input" />
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold">Postal Code:</h1>
                            <input type="number" value="100001" readOnly className="profile-input" />
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold">Country:</h1>
                            <input type="text" value="Nigeria" readOnly className="profile-input" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid gap-2"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-[20px] text-dark font-bold">Social Media Links and Websites</h1>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold">Facebook:</h1>
                            <input type="url" value="https://facebook.com/joe" readOnly className="profile-input" />
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold">Twitter:</h1>
                            <input type="url" value="https://twitter.com/joe" readOnly className="profile-input" />
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold">Instagram:</h1>
                            <input type="url" value="https://instagram.com/joe" readOnly className="profile-input" />
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold">Youtube:</h1>
                            <input type="url" value="https://youtube.com/joe" readOnly className="profile-input" />
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold">Linkedin:</h1>
                            <input type="url" value="https://pinterest.com/joe" readOnly className="profile-input" />
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold">Website:</h1>
                            <input type="url" value="www.spectralopt.com" readOnly className="profile-input" />
                        </div>
                    </motion.div>
                </form>
            </section>
        </main>
    );
}

export default UserProfile;