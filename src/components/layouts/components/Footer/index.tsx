/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import type { FC } from 'react';
import { BsTwitter, BsFacebook, BsGithub } from 'react-icons/bs';

const Footer: FC = () => (
  <footer className="daisy-footer daisy-footer-center bg-primary p-10 text-primary-content">
    <div>
      <Image src="/favicon.svg" width="300" height="300" alt="favicon" />
      <p className="mb-3 text-5xl font-bold">Programmist</p>
      <p className="font-bold">プログラムを「作品」として扱い、気軽に共有できるWebサービス</p>
      <p>Copyright &copy; 2022 - Factorialers all right reserved.</p>
    </div>
    <div className="grid grid-flow-col gap-4">
      <a>
        <BsTwitter size={20} />
      </a>
      <a>
        <BsFacebook size={20} />
      </a>
      <a>
        <BsGithub size={20} />
      </a>
    </div>
  </footer>
);
export default Footer;
