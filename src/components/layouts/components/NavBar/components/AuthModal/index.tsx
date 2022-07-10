/* eslint-disable tailwindcss/no-custom-classname */
import type { FC } from 'react';
import useModal from '../../hooks/useModal';
import PopWindow from './PopWindow';

const AuthModal: FC = () => {
  const { isModalOpen, openModal } = useModal();

  return (
    <div>
      <button
        type="button"
        className="rounded bg-primary py-3 px-5 font-bold text-accent shadow-lg outline-none transition-all duration-150 ease-out focus:outline-none active:scale-90"
        onClick={(event) => openModal(event)}
      >
        Sign In
      </button>
      {isModalOpen ? <PopWindow /> : ''}
    </div>
  );
};

export default AuthModal;
