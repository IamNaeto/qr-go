import React, { createContext, useState, useEffect } from 'react';
import { Auth, User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, DocumentSnapshot, getDoc } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
  
// Define your user data type from Firestore
  interface UserDataType {
    firstName: string;
    lastName: string;
    email: string;
    // Other user data properties
  }

// Update the UserContextState interface to match your user data type
export interface UserContextState {
  user: UserDataType | null;
}


export const UserContext = createContext<UserContextState>({
  user: null,
});

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserDataType | null>(null);

  useEffect(() => {
    const auth: Auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await fetchUser(currentUser.uid);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUser = async (userId: string) => {
    const docRef = doc(db, "users", userId);
    try {
      const docSnap: DocumentSnapshot = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data() as UserDataType;
        setUser(userData);
      } else {
        console.error("User document not found");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
