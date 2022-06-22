import Link from 'next/link';

export type HeaderLink = {
  id: string;
  jsx: JSX.Element;
  link: string;
};

const HeaderLinks: HeaderLink[] = [
  { id: 'product', jsx: <div>Product</div>, link: '/product' },
  { id: 'features', jsx: <div>Features</div>, link: '/features' },
  { id: 'about us', jsx: <div>About us</div>, link: '/about-us' },
  { id: 'trend', jsx: <div>Trend</div>, link: '/trend' },
];

const Logo = (
  <li key="logo">
    <Link href="/">
      <a className="inline-flex items-center">
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Programmist</span>
      </a>
    </Link>
  </li>
);

export { HeaderLinks, Logo };
