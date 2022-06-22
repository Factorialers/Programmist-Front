import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import app from './index';

const auth = getAuth(app);

export default auth;

const loginWithGoogle = async () => {
  await signInWithPopup(auth, new GoogleAuthProvider());
};

const loginWithGitHub = async () => {
  await signInWithPopup(auth, new GithubAuthProvider());
};

export { loginWithGoogle, loginWithGitHub };
