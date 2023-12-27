"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PrivateRoute from "@/components/PrivateRoute";
import UserProfile from "@/components/UserProfile";

const Profile = () => {
    return ( 
        <main>
            <PrivateRoute>
                <Header />
                <UserProfile />
                <Footer />
            </PrivateRoute>
        </main>
     );
}
 
export default Profile;