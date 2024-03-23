import { motion } from "framer-motion";
import SideView from "./SideView";

const ContactUs = () => {
    return ( 
        <main className="relative top-[100px] md:top-[50px] grid grid-cols-1 md:grid-cols-2 items-center justify-center">
            <motion.div 
            className="flex flex-col items-center justify-center mb-5 md:hidden"
            initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
            >
                    <h1 className="text-[28px] md:text-[36px] lg:text-[40px] text-dark font-semibold text-center">How can we help?</h1>
                    <p className="text-[14px] md:text-[16px] text-dark text-center max-w-[70%]">We&rsquo;d love to hear from you. Leave a message
                        and we&rsquo;ll respond as soon as possible</p>
            </motion.div>

            <SideView />

            <section className="pt-8 pb-20 md:py-20 px-[5%] md:px-[10%]">
                <motion.div 
                className="md:flex flex-col items-center justify-center hidden"
                initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-[40px] text-dark font-semibold text-center">How can we help?</h1>
                    <p className="text-[16px] text-dark text-center max-w-[70%]">We&rsquo;d love to hear from you. Leave a message
                        and we&rsquo;ll respond as soon as possible</p>
                </motion.div>

                <motion.form 
                action="" 
                className="grid gap-4 text-[16px] text-dark"
                initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <label htmlFor="name">Name 
                        <input type="text" name="name" id="name" placeholder="Enter full name"className="input" required/>
                    </label>
                    <label htmlFor="email">Email 
                        <input type="email" name="email" id="email" placeholder="Enter email"className="input" required/>
                    </label>

                    <label htmlFor="msg">Message
                        <textarea name="msg" id="msg" cols={30} rows={10} className="input" required></textarea>   
                    </label>

                    <button className="px-10 py-2 rounded-lg bg-blue hover:shadow-xl delay-150 text-[16px] text-white font-semibold">Send</button>
                </motion.form>
            </section>
        </main>
     );
}
 
export default ContactUs;