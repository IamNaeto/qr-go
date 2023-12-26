import Link from 'next/link';
import React, { FC, MouseEventHandler, useState } from 'react';
import { FaBackward } from 'react-icons/fa6';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';

interface LoginProps {
  onSwitch: MouseEventHandler<HTMLSpanElement>;
}

const Login: FC<LoginProps> = ({ onSwitch }) => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter()

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      // Basic form validation
      if (!email || !password) {
        setError("Email and password are required");
        return;
      }

      const res = await signInWithEmailAndPassword(email, password)
      // console.log(res)
      setEmail("")
      setPassword("")
      setRemember(false)
      router.push('/create')

      // Additional logic after successful login
      console.log("User loggedIn successfully!");
    } catch (error:any) {
      console.error("Error logging in:", error.message);
      setError(error.message);
    }
  };

    return ( 
        <main className="w-full grid gap-4 px-[5%] md:px-[10%]">
        <div className="hidden md:grid gap-2">
            <h1 className="text-[28px] md:text-[36px] lg:text-[40px] text-dark text-center font-semibold">Welcome back to <span className="text-blue">QR code</span></h1>
            <p className="text-[14px] md:text-[16px] text-dark text-center">Login with your details you entered during registration.</p>
        </div>

        <form action="" className="grid gap-4 text-[14px] md:text-[16px] text-dark">
            <label htmlFor="email">Email
                <input
                onChange={(e) => setEmail(e.target.value)}  
                type="email" name='email' id='email' placeholder="Enter email" className="input" required/>
            </label>
            <label htmlFor="pword">Password
                <input
                onChange={(e) => setPassword(e.target.value)}  
                type="password" name="pword" id='pword' placeholder="Enter password" className="input" required/>
            </label>
           
            <label htmlFor="remember" className="text-[14px] flex items-center gap-2"> 
                <input type="checkbox" name='remember' id='remember' required/>
                Remember password
            </label>

            {/* Display error message if there's an error */}
            {error && <p className="text-red-500">{error}</p>}

            <button onClick={handleLogin} className="bg-blue px-10 py-2 rounded-md text-[15px] md:text-[16px] text-center text-white font-semibold">Login</button>

            <p className="text-[13px] md:text-[14px] text-dark text-center">New here? <span className="text-darkblue cursor-pointer" onClick={onSwitch}>Create an account</span></p> 
        </form>

        <Link href="/home" className='flex items-center gap-2 text-dark font-semibold text-sm md:text-md'>
          <FaBackward className="text-blue"/>  Back To Home
        </Link>
        
    </main>
     );
}
 
export default Login;