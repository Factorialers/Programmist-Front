import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import authState from '../recoil/authState';
import app from './index';

const auth = getAuth(app);

export default auth;

const loginWithGoogle = async () => {
  const credential = await signInWithPopup(auth, new GoogleAuthProvider());

  return credential.user;
};

const loginWithGitHub = async () => {
  const credential = await signInWithPopup(auth, new GithubAuthProvider());

  return credential.user;
};

const logout = async () => {
  await signOut(auth);
};

const useAuth = () => {
  const [user, setUser] = useRecoilState(authState);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((authUser) => setUser(authUser));

    return () => subscribe();
  }, [setUser]);

  return user;
};

export { loginWithGoogle, loginWithGitHub, logout, useAuth };
