/* eslint-disable tailwindcss/no-custom-classname */
import Router from 'next/router';
import { FcGoogle } from 'react-icons/fc';
import { VscGithub } from 'react-icons/vsc';
import { loginWithGoogle, loginWithGitHub } from '../../../libs/firebase/auth';

const PopWindow = () => (
  <div
    id="pop_window"
    role="button"
    className="flex absolute inset-0 m-auto w-80 h-52 text-center bg-base rounded-lg shadow-xl drop-shadow animate-appear "
    onClick={(event) => {
      event.stopPropagation();
    }}
    onKeyDown={(event) => {
      event.stopPropagation();
    }}
    tabIndex={0}
  >
    <div>
      <p className="m-5 font-bold">Login to Programmist</p>
      <button
        type="button"
        className="mx-5 mb-5 font-semibold text-neutral hover:text-primary normal-case bg-primary hover:bg-neutral border-none shadow-lg daisy-btn daisy-btn-wide"
        onClick={async () => {
          await loginWithGoogle();
          Router.push('/');
        }}
      >
        <div className="mr-3">
          <FcGoogle />
        </div>
        Login with Google
      </button>
      <button
        type="button"
        className="mx-5 mb-5 font-semibold text-neutral hover:text-primary normal-case bg-primary hover:bg-neutral border-none shadow-lg daisy-btn daisy-btn-wide"
        onClick={async () => {
          await loginWithGitHub();
          Router.push('/');
        }}
      >
        <div className="mr-3">
          <VscGithub />
        </div>
        Login with GitHub
      </button>
    </div>
  </div>
);

export default PopWindow;
