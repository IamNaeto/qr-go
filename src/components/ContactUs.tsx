import SideView from "./SideView";

const ContactUs = () => {
    return ( 
        <main className="relative top-[50px] grid grid-cols-2 items-center justify-center">
            <SideView />

            <section className="py-20 px-[10%]">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-[40px] text-dark font-semibold text-center">How can we help?</h1>
                    <p className="text-[16px] text-dark text-center max-w-[70%]">We’d love to hear from you. Leave a message
                        and we’ll respond as soon as possible</p>
                </div>

                <form action="" className="grid gap-4 text-[16px] text-dark">
                    <label htmlFor="">Name 
                        <input type="text" placeholder="Enter full name"className="input"/>
                    </label>
                    <label htmlFor="">Email 
                        <input type="email" placeholder="Enter email"className="input"/>
                    </label>

                    <label htmlFor="">Message
                        <textarea name="" id="" cols={30} rows={10} className="input"></textarea>   
                    </label>

                    <button className="px-10 py-2 rounded-lg bg-blue hover:shadow-xl delay-150 text-[16px] text-white font-semibold">Send</button>
                </form>
            </section>
        </main>
     );
}
 
export default ContactUs;