import Link from 'next/link';
import React, { FC, MouseEventHandler } from 'react';
import { FaBackward } from 'react-icons/fa6';

interface LoginProps {
  onSwitch: MouseEventHandler<HTMLSpanElement>;
}

const Login: FC<LoginProps> = ({ onSwitch }) => {
    return ( 
        <main className="w-full grid gap-4 px-[10%]">
        <div className="grid gap-2">
            <h1 className="text-[40px] text-dark text-center font-semibold">Welcome back to <span className="text-blue">QR code</span></h1>
            <p className="text-[16px] text-dark text-center">Login with your details you entered during registration.</p>
        </div>

        <form action="" className="grid gap-4 text-[16px] text-dark">
            <label htmlFor="email">Email
                <input type="email" name='email' id='email' placeholder="Enter email" className="input" required/>
            </label>
            <label htmlFor="pword">Password
                <input type="password" name="pword" id='pword' placeholder="Enter password" className="input" required/>
            </label>
           
            <label htmlFor="remember" className="text-[14px] flex items-center gap-2"> 
                <input type="checkbox" name='remember' id='remember' required/>
                Remember password
            </label>

            <button className="bg-blue px-10 py-2 rounded-md text-[16px] text-center text-white font-semibold">Login</button>

            <p className="text-[14px] text-dark text-center">New here? <span className="text-darkblue cursor-pointer" onClick={onSwitch}>Create an account</span></p> 
        </form>

        <Link href="/home" className='flex items-center gap-2 text-dark font-semibold text-md'>
          <FaBackward className="text-blue animate-heart-beat"/>  Back To Home
        </Link>
        
    </main>
     );
}
 
export default Login;