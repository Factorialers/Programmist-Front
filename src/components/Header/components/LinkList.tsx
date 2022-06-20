import Link from 'next/link';
import type { FC } from 'react';
import { HeaderLinks, Logo } from './HeaderLink';

const LinkList: FC = () => {
  const linkList = HeaderLinks.map((headerLink) => (
    <li key={headerLink.id}>
      <Link href={headerLink.link}>
        <a className="font-medium tracking-wide text-gray-700 hover:text-gray-300 transition-colors duration-200">{headerLink.jsx}</a>
      </Link>
    </li>
  ));

  linkList.splice(linkList.length / 2, 0, Logo);

  return <ul className="flex items-center space-x-8">{linkList}</ul>;
};

export default LinkList;
