import Image from 'next/image';
import type { FC } from 'react';
import { useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai'

const Popup: FC = () => {
  const [isToggle, setToggle] = useState<boolean>(false);
  const open = () => {
    setToggle(true);
  };
  const close = () => {
    setToggle(false);
  };
  if (isToggle) {
    return (
      <div className="flex fixed top-0 left-0 w-full h-full bg-blue-500 bg-opacity-25">
        <div className="mx-auto mt-20 w-4/12 h-2/4 bg-white rounded-lg">
          <div>
            <span className="float-right">
              <button onClick={close} type="button">
                <AiOutlineCloseSquare size={40}/>
              </button>
            </span>
          </div>
          <div className='mt-20 text-4xl text-center'>
            Programist
          </div>
          <div className="flex justify-center mt-10 hover:opacity-60 duration-300">
            <Image src="/google_signin_buttons/web/2x/btn_google_signin_dark_focus_web@2x.png" alt="Picture of the author" width={200} height={50} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <button type="button" onClick={open}>
        click
      </button>
    </div>
  );
};
export default Popup;
