import Link from 'next/link';
import React, { FC, MouseEventHandler } from 'react';
import { FaBackward } from 'react-icons/fa6';

interface SignUpProps {
  onSwitch: MouseEventHandler<HTMLSpanElement>;
}

const SignUp: FC<SignUpProps> = ({ onSwitch }) => {
    return ( 
        <main className="w-full grid gap-4 px-[5%] md:px-[10%]">
            <div className="hidden md:grid gap-2">
                <h1 className="text-[28px] md:text-[36px] lg:text-[40px] text-dark text-center font-semibold">Generate a <span className="text-blue">QR code</span></h1>
                <p className="text-[14px] md:text-[16px] text-dark text-center">Get started and generate a Qr code on the go</p>
            </div>

            <form action="" className="grid gap-4 text-[14px] md:text-[16px] text-dark">
                <label htmlFor="fname">First Name
                    <input type="text" name='fname' id='fname' placeholder="Enter your first name" className="input" required/>
                </label>
                <label htmlFor="lname">Last Name
                    <input type="text" name='lname' id='lname' placeholder="Enter your last name" className="input" required/>
                </label>
                <label htmlFor="email">Email
                    <input type="email" name='email' id='email' placeholder="Enter your email" className="input" required/>
                </label>
                <label htmlFor="pword">Password
                    <input type="password" name='pword' id='pword' placeholder="Enter your password" className="input" required/>
                </label>
                <label htmlFor="cpword">Confirm Password
                    <input type="password" name='cpword' id='cpword' placeholder="Comfirm your password" className="input" required/>
                </label>

                <button className="bg-blue px-10 py-2 rounded-md text-[15px] md:text-[16px] text-center text-white font-semibold">Create account</button>

                <p className="text-[13px] md:text-[14px] text-dark text-center">Already have an account? <span className="text-darkblue cursor-pointer" onClick={onSwitch}>Login</span></p> 
            </form>
            
            <Link href="/home" className='flex items-center gap-2 text-dark font-semibold text-md'>
                <FaBackward className="text-blue"/>  Back To Home
            </Link>
        </main>
     );
}
 
export default SignUp;