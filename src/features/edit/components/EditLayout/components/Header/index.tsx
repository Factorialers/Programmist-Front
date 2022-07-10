import Router from 'next/router';
import type { FC } from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';

const Header: FC = () => (
  <div className="bg-base p-4 shadow-md">
    <BsArrowLeftCircle
      role="button"
      size={20}
      onClick={() => {
        Router.push('/');
      }}
    />
  </div>
);

export default Header;
