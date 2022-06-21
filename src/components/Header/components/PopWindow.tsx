/* eslint-disable tailwindcss/no-custom-classname */
import { FcGoogle } from 'react-icons/fc';
import { VscGithub } from 'react-icons/vsc';

const PopWindow = () => (
  <button
    id="pop_window"
    type="button"
    className="flex absolute inset-0 m-auto w-80 h-52 text-center bg-base rounded-lg shadow-xl animate-appear "
    onClick={(event) => {
      event.stopPropagation();
    }}
  >
    <div>
      <p className="m-3 font-bold">Login to Programmist</p>
      <button
        type="button"
        className="my-3 mx-5 font-semibold text-neutral hover:text-primary normal-case bg-primary hover:bg-neutral border-none shadow-lg daisy-btn daisy-btn-wide"
      >
        <div className="mr-3">
          <FcGoogle />
        </div>
        Login with Google
      </button>
      <button
        type="button"
        className="my-3 mx-5 font-semibold text-neutral hover:text-primary normal-case bg-primary hover:bg-neutral border-none shadow-lg daisy-btn daisy-btn-wide"
      >
        <div className="mr-3">
          <VscGithub />
        </div>
        Login with GitHub
      </button>
    </div>
  </button>
);

export default PopWindow;
