import Link from 'next/link';
import type { FC } from 'react';
import { NavLinks, Logo } from './NavLinks';

const Navigation: FC = () => {
  const navList = NavLinks.map((navLink) => (
    <li key={navLink.id}>
      <Link href={navLink.link}>
        <a className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-300">{navLink.node}</a>
      </Link>
    </li>
  ));

  navList.splice(navList.length / 2, 0, Logo);

  return (
    <nav>
      <ul className="flex items-center space-x-8">{navList}</ul>
    </nav>
  );
};

export default Navigation;
