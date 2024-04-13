import React, { createContext, useState, useEffect } from 'react';
import { Auth, getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, DocumentData, DocumentSnapshot, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import { TbLoader3 } from 'react-icons/tb';

// Definng user data type from Firestore
interface UserDataType {
  img: string;
  doc: any;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  qrgId: string;
  accountType: string;
  phoneNumber: string;
  gender: string;
  address: string;
  state: string;
  postalCode: string;
  country: string;
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
  linkedin: string;
  website: string;
}

// Updatng the UserContextState interface to match user data type
interface UserContextState {
  user: UserDataType | null;
  isLoading: boolean;
}



export const UserContext = createContext<UserContextState>({
  user: null,
  isLoading: true,
});

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserDataType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const auth: Auth = getAuth();
    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setIsLoading(true); // Set loading to true when starting data fetch
        await fetchUser(currentUser.uid);
        setIsLoading(false); // Set loading to false after data fetch

        // Listener for changes in Firestore user document
        const userDocRef = doc(db, 'users', currentUser.uid);
        const unsubscribeSnapshot = onSnapshot(userDocRef, (doc: DocumentSnapshot<DocumentData>) => {
          if (doc.exists()) {
            const updatedUserData = doc.data() as UserDataType;
            setUser(updatedUserData);
          }
        });
        return () => unsubscribeSnapshot();
      } else {
        setUser(null);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const fetchUser = async (userId: string) => {
    const userDocRef = doc(db, 'users', userId);
    try {
      const docSnap: DocumentSnapshot<DocumentData> = await getDoc(userDocRef);
      if (docSnap.exists()) {
        const userData = docSnap.data() as UserDataType;
        setUser(userData);
      } else {
        console.error('User document not found');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {isLoading ? ( // Render loading spinner if isLoading is true
        <div className="w-full h-screen flex items-center justify-center bg-white text-center">
          <TbLoader3
            className="animate-spin text-blue text-7xl font-semibold text-center"
          />
        </div>
      ) : (
        // Render children if isLoading is false (data has been fetched)
        children
      )}
    </UserContext.Provider>
  );
};