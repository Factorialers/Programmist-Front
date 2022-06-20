import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiTwotoneMail, AiOutlineBell, AiOutlineCloseSquare } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { Login } from '../../libs/firebase/firebase';

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div>
      {isOpen && (
        <div className="flex fixed top-0 left-0 w-full h-full bg-blue-500 bg-opacity-25">
          <div className="px-5 mx-auto mt-20 w-4/12 h-2/4 bg-white rounded-lg">
            <div>
              <span className="float-right">
                <button type="button">
                  <AiOutlineCloseSquare onClick={() => setOpen(false)} size={40} />
                </button>
              </span>
            </div>
            <div className="pb-3 mt-20 font-serif text-4xl text-center border-b-2 border-gray-400">Programist</div>
            <div className="flex justify-center mt-10 hover:opacity-60 duration-300">
              <Image
                src="/google_signin_buttons/web/2x/btn_google_signin_dark_focus_web@2x.png"
                alt="Picture of the author"
                width={200}
                height={50}
                onClick={Login}
              />
            </div>
          </div>
        </div>
      )}
      <div className="p-3 bg-gray-700 shadow-lg">
        <div className="inline text-xl text-white">Programist</div>
        <div className="inline ">
          <div className="inline pl-10 ml-1 text-stone-50 hover:text-gray-500 ">
            <Link href="/">ホーム</Link>
          </div>
          <div className="inline pl-5 text-stone-50 hover:text-gray-500">
            <Link href="timeline">タイムライン</Link>
          </div>
          <div className="inline pl-5 text-stone-50 hover:text-gray-500">
            <Link href="trend">トレンド</Link>
          </div>
          <div className="inline pl-5 text-stone-50 hover:text-gray-500">
            <Link href="ranking">ランキング</Link>
          </div>
          <div className="inline float-right  mx-5 text-stone-50 hover:text-gray-500">
            <BiLogIn size={20} onClick={() => setOpen(true)} />
          </div>
          <div className="inline float-right  ml-5 text-stone-50 hover:text-gray-500">
            <AiTwotoneMail size={20} />
          </div>
          <div className="inline float-right text-stone-50 hover:text-gray-500">
            <AiOutlineBell size={20} />
          </div>
          <div className="inline float-right mr-5 ">
            <input type="search" id="site-search" name="q" className="bg-slate-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
