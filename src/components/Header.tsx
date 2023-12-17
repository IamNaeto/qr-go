import Image from "next/image";
const Header = () => {
    return ( 
        <main className="w-full fixed top-0 bg-white z-10">
            <header className="flex items-center justify-between bg-skyblue px-[5%] py-2">
                <div className="w-[60px]">
                    <Image src="/img/logo.png" width={70} height={70} alt="logo"  className="w-full" />
                </div>

                <nav className="w-[60%] flex items-center justify-between">
                    <div className="text-dark text-[16px] font-semibold  flex items-center justify-between gap-10">
                        <a href="">Home</a>
                        <a href="">AboutUs</a>
                        <a href="">ContactUs</a>
                    </div>

                    <button className="text-[16px] px-5 py-2 bg-blue text-white font-semibold  rounded-md">Get Started</button>
                </nav>
            </header>

            <hr className="h-3 bg-darkblue mt-1"/> 
        </main>
     );
}
 
export default Header;