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
      className="daisy-btn daisy-btn-wide mx-5 mb-5 border-none bg-primary font-semibold normal-case text-neutral shadow-lg hover:bg-neutral hover:text-primary"
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
      className="daisy-btn daisy-btn-wide mx-5 mb-5 border-none bg-primary font-semibold normal-case text-neutral shadow-lg hover:bg-neutral hover:text-primary"
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
