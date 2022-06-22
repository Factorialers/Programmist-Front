/* eslint-disable tailwindcss/no-custom-classname */
import useModal from '../hooks/useModal';
import PopWindow from './PopWindow';

const Modal = () => {
  const { isModalOpen, openModal } = useModal();

  return (
    <div>
      <button
        type="button"
        className="py-3 px-5 font-bold text-accent bg-primary rounded outline-none focus:outline-none shadow-lg transition-all duration-150 ease-out active:scale-90"
        onClick={(event) => openModal(event)}
      >
        Signin
      </button>
      {isModalOpen ? <PopWindow /> : ''}
    </div>
  );
};

export default Modal;
