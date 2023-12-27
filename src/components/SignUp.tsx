import Link from 'next/link';
import React, { FC, MouseEventHandler, useState } from 'react';
import { FaBackward } from 'react-icons/fa6';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { TbLoader3 } from "react-icons/tb";

interface SignUpProps {
  onSwitch: MouseEventHandler<HTMLSpanElement>;
}

const SignUp: FC<SignUpProps> = ({ onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

  const handleSignUp = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
    try {
      // Basic form validation
      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        setError("All fields are required");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      // Simulate a loading process
    setIsLoading(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 3000);

      const res = await createUserWithEmailAndPassword(email, password)
      // console.log({res})
      
      // setEmail("")
      // setPassword("")
      // setConfirmPassword("")
      // setFirstName("")
      // setLastName("")
      // setError(null)

      // Handle successful signup (e.g., redirect to home page)
      console.log("User created successfully!");
    } catch (error: any) {
      console.error("Error signing up:", error.message);
      setError(error.message);
    }

  };

    return ( 
        <main className="w-full grid gap-4 px-[5%] md:px-[10%]">
            <div className="hidden md:grid gap-2">
                <h1 className="text-[28px] md:text-[36px] lg:text-[40px] text-dark text-center font-semibold">Generate a <span className="text-blue">QR code</span></h1>
                <p className="text-[14px] md:text-[16px] text-dark text-center">Get started and generate a Qr code on the go</p>
            </div>

            <form action="" className="grid gap-4 text-[14px] md:text-[16px] text-dark">
                <label htmlFor="fname">First Name
                    <input
                    onChange={(e) => setFirstName(e.target.value)} 
                    type="text" name='firstName' id='fname' placeholder="Enter your first name" className="input" required/>
                </label>
                <label htmlFor="lname">Last Name
                    <input
                    onChange={(e) => setLastName(e.target.value)}
                    type="text" name='lastName' id='lname' placeholder="Enter your last name" className="input" required/>
                </label>
                <label htmlFor="email">Email
                    <input
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" name='email' id='email' placeholder="Enter your email" className="input" required/>
                </label>
                <label htmlFor="pword">Password
                    <input
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" name='password' id='pword' placeholder="Enter your password" className="input" required/>
                </label>
                <label htmlFor="cpword">Confirm Password
                    <input
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    type="password" name='confirmPassword' id='cpword' placeholder="Comfirm your password" className="input" required/>
                </label>

                <button
                  onClick={handleSignUp}
                  className="flex items-center justify-center bg-blue px-10 py-2 rounded-md text-[15px] md:text-[16px] text-center text-white font-semibold"
                >
                  {isLoading ? (
                            <>
                                <TbLoader3 className="animate-spin text-white text-2xl text-center font-semibold cursor-not-allowed" />
                            </>
                        ) : (
                            'Create Account'
                        )}
                </button>

                {error && <p className="text-red-500">{error}</p>}

                <p className="text-[13px] md:text-[14px] text-dark text-center">Already have an account? <span className="text-darkblue cursor-pointer" onClick={onSwitch}>Login</span></p> 
            </form>
            
            <Link href="/home" className='flex items-center gap-2 text-dark font-semibold text-sm md:text-md'>
                <FaBackward className="text-blue"/>  Back To Home
            </Link>
        </main>
     );
}
 
export default SignUp;