import Link from 'next/link';
import type { ReactNode } from 'react';

export type NavLink = {
  id: string;
  node: ReactNode;
  link: string;
};

const NavLinks: NavLink[] = [
  { id: 'product', node: 'Product', link: '/product' },
  { id: 'features', node: 'Features', link: '/features' },
  { id: 'about us', node: 'About us', link: '/about-us' },
  { id: 'trend', node: 'Trend', link: '/trend' },
];

const Logo = (
  <li key="logo">
    <Link href="/">
      <a className="inline-flex items-center">
        <span className="ml-2 text-xl font-bold uppercase tracking-wide text-gray-800">Programmist</span>
      </a>
    </Link>
  </li>
);

export { NavLinks, Logo };
