/* eslint-disable tailwindcss/no-custom-classname */
import { FC, useState } from 'react';
import Toggle from '../../../../../elements/Toggle';
import SignIn from './SignIn';
import SignUp from './SignUp';

const PopWindow: FC = () => {
  const [signMode, setSignMode] = useState<'sign-in' | 'sign-up'>('sign-in');

  return (
    <div
      id="pop_window"
      role="button"
      className="absolute inset-0 m-auto flex h-64 w-80 animate-appear rounded-lg bg-base text-center shadow-xl drop-shadow "
      onClick={(event) => {
        event.stopPropagation();
      }}
      onKeyDown={(event) => {
        event.stopPropagation();
      }}
      tabIndex={0}
    >
      <div>
        <p className="mt-5 font-bold">Join Programmist</p>
        <div className="m-5">
          <div className="flex justify-center">
            <div className="my-auto mx-3 font-semibold">Sign In</div>
            <Toggle
              onClick={() => {
                if (signMode === 'sign-in') {
                  setSignMode('sign-up');
                } else {
                  setSignMode('sign-in');
                }
              }}
            />
            <div className="my-auto mx-3 font-semibold">Sign Up</div>
          </div>
        </div>
        {signMode === 'sign-in' ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default PopWindow;
