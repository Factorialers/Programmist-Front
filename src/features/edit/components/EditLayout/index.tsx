/* eslint-disable tailwindcss/no-custom-classname */
import { ReactNode, FC, useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import Header from './components/Header';

type Props = {
  stepTitle: string;
  stepContent: ReactNode;
  setPrevEditState: () => void;
  setNextEditState: () => void;
  children: ReactNode;
};

const EditLayout: FC<Props> = ({ stepTitle, stepContent, setPrevEditState, setNextEditState, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header />
      <div className="m-8 text-center text-3xl font-semibold text-primary-content">
        <div className="flex justify-center">
          {stepTitle}
          <button type="button">
            <label htmlFor="arrow" className="daisy-swap daisy-swap-rotate mt-[2px]">
              <input
                id="arrow"
                type="checkbox"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              />
              <div className="daisy-swap-on">
                <IoIosArrowDown />
              </div>
              <div className="daisy-swap-off">
                <IoIosArrowUp />
              </div>
            </label>
          </button>
        </div>
        {isOpen ? <div className="m-3 inline-block w-5/12 animate-appear text-center text-lg">{stepContent} </div> : ''}
      </div>
      <div>{children}</div>
      <div className="m-10 grid grid-cols-10">
        <button
          type="button"
          onClick={() => {
            setPrevEditState();
            setIsOpen(false);
          }}
          className="daisy-btn daisy-btn-primary col-start-3 shadow-md"
        >
          <BsFillArrowLeftCircleFill className="mr-2" />
          prev
        </button>
        <button
          type="button"
          onClick={() => {
            setNextEditState();
            setIsOpen(false);
          }}
          className="daisy-btn daisy-btn-primary col-start-8 shadow-md"
        >
          next
          <BsFillArrowRightCircleFill className="ml-2" />
        </button>
      </div>
      <div className="h-px" />
    </div>
  );
};
export default EditLayout;
