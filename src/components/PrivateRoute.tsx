import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
    children: React.ReactNode;
  }
  
const PrivateRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [user] = useAuthState(auth);
  const router = useRouter();


  if(!user){
    router.push('/auth')
    return <h1>Loading...</h1>
}

  return children;
};

export default PrivateRoute;
