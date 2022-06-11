import type { User } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import type { ReactNode } from 'react';
import React, { useState, useEffect } from 'react';
import auth from './firebase';


type FirebaseContextType = {
  user: User | null;
};
const FirebaseContext = React.createContext<FirebaseContextType>({
  user: null,
});
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseContextType>({ user: null });
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    onAuthStateChanged(auth, (ret_user) => {
		setUser({ user:ret_user })
		setLoading(false);
	});
  });
  if (loading) {
    return <>now loadin...</>;
  }
  return <FirebaseContext.Provider value={user}>{children}</FirebaseContext.Provider>;
};

export { FirebaseContext, AuthProvider };
