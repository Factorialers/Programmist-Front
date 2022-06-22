import { MouseEvent, useState, useEffect, useCallback } from 'react';

const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    document.removeEventListener('click', closeModal);
  }, []);

  useEffect(() => {
    document.removeEventListener('click', closeModal);
  }, [closeModal]);

  const openModal = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    setModalOpen(true);
    document.addEventListener('click', closeModal);
    event.stopPropagation();
  };

  return { isModalOpen, setModalOpen, openModal };
};

export default useModal;
