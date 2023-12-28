import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TbLoader3 } from "react-icons/tb";

interface ProtectedRouteProps {
    children: React.ReactNode;
  }
  
const PrivateRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useAuthState(auth);
  const router = useRouter();


useEffect(() => {
    if (!user) {
        // router.push('/auth');
        router.replace('/auth')
        setIsLoading(true);

      // Simulate a loading process
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
        
      }, 5000);

      // Clear the timeout if the component unmounts or user logs out
      return () => clearTimeout(timeoutId);
    }
  }, [user, router]);

  // If user is loading, show a loader
  if (isLoading) {
    return <div className="w-full h-screen flex items-center justify-center">
        <TbLoader3 className="animate-spin text-darkblue text-7xl font-semibold cursor-not-allowed text-center" />;
    </div>
  }

  return children;
};

export default PrivateRoute;
