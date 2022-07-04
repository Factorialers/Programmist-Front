/* eslint-disable tailwindcss/no-custom-classname */
import Router from 'next/router';
import type { FC } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { VscGithub } from 'react-icons/vsc';
import { loginWithGoogle, loginWithGitHub } from '../../../../../../libs/firebase/auth';

const SignUp: FC = () => (
  <div>
    <button
      type="button"
      className="mx-5 mb-5 font-semibold text-neutral hover:text-primary normal-case bg-primary hover:bg-neutral border-none shadow-lg daisy-btn daisy-btn-wide"
      onClick={async () => {
        await loginWithGoogle();
        Router.push('/auth/is-new-user');
      }}
    >
      <div className="mr-3">
        <FcGoogle />
      </div>
      Sign up with Google
    </button>
    <button
      type="button"
      className="mx-5 mb-5 font-semibold text-neutral hover:text-primary normal-case bg-primary hover:bg-neutral border-none shadow-lg daisy-btn daisy-btn-wide"
      onClick={async () => {
        await loginWithGitHub();
        Router.push('/auth/is-new-user');
      }}
    >
      <div className="mr-3">
        <VscGithub />
      </div>
      Sign up with GitHub
    </button>
  </div>
);

export default SignUp;
