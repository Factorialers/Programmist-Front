import Link from 'next/link';
import React from 'react';
import {AiTwotoneMail,AiOutlineBell } from 'react-icons/ai';

const Header: React.FC = () => (
  <div className="p-3 bg-gray-700 shadow-lg">
    <div className="inline text-xl text-white">Programist</div>
    <div className="inline">
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
        <AiTwotoneMail size={20}/>
      </div>
      <div className="inline float-right text-stone-50 hover:text-gray-500">
        <AiOutlineBell size={20}/>
      </div>
      <div className="inline float-right mr-5 ">
      <input type="search" id="site-search" name="q" className='bg-slate-500' />
      </div>
    </div>
  </div>
);
export default Header;
