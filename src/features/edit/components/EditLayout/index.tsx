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
      <div className="m-8 text-3xl font-semibold text-center text-primary-content">
        <div className="flex justify-center">
          {stepTitle}
          <button type="button">
            <label htmlFor="arrow" className="mt-[2px] daisy-swap daisy-swap-rotate">
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
        {isOpen ? <div className="inline-block m-3 w-5/12 text-lg text-center animate-appear">{stepContent} </div> : ''}
      </div>
      <div>{children}</div>
      <div className="grid grid-cols-10 m-10">
        <button
          type="button"
          onClick={() => {
            setPrevEditState();
            setIsOpen(false);
          }}
          className="col-start-3 shadow-md daisy-btn daisy-btn-primary"
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
          className="col-start-8 shadow-md daisy-btn daisy-btn-primary"
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
