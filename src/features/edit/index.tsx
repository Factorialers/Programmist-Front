import type { FC } from 'react';
import { useState, useCallback } from 'react';
import { BiChevronRight, BiChevronsRight, BiChevronLeft, BiChevronsLeft } from 'react-icons/bi';
import { TbPhoto } from 'react-icons/tb';
import Export from './export';

const EditMd: FC = () => {
  const [text, setText] = useState('');
  const [toggle, setToggle] = useState<number>(1);
  const upToggle = useCallback((x: number) => setToggle(toggle + x), [toggle]);
  const downToggle = useCallback((x: number) => setToggle(toggle - x), [toggle]);
  const TextChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setText(event.target.value);
  };
  return (
    <div>
      <div className="mt-4 mb-2 w-full">
        <input
          className="py-2 px-4 w-full font-bold leading-tight text-gray-700focus:bg-white rounded border-2 border-gray-200 focus:border-purple-500 focus:outline-none appearance-none"
          id="inline-full-name"
          type="text"
          placeholder="タイトル"
        />
      </div>
      <div className="grid grid-cols-2  mb-5">
        {toggle === 0 && (
          <div className="col-span-2">
            <div className="flex h-10 border border-gray-300 ">
              <BiChevronRight size={40} onClick={() => upToggle(1)} />
              <BiChevronsRight size={40} onClick={() => upToggle(2)} />
            </div>
            <textarea
              className="block py-1.5	px-3	m-0	w-full	h-128	text-gray-700 focus:text-gray-700	bg-clip-padding 	bg-white	border	border-gray-300	focus:border-blue-600	border-solid focus:outline-none"
              id="exampleFormControlTextarea1"
              rows={20}
              value={text}
              placeholder="your markdown"
              onChange={(e) => TextChange(e)}
            />
          </div>
        )}

        {toggle === 1 && (
          <div>
            <div className="h-10 border-t border-gray-300">
              <TbPhoto size={40} className="mr-3 ml-auto" />
            </div>
            <textarea
              className="block py-1.5	px-3	m-0	w-full	h-128	text-gray-700 focus:text-gray-700	bg-clip-padding 	bg-white	border	border-gray-300	focus:border-blue-600	border-solid focus:outline-none"
              id="exampleFormControlTextarea1"
              rows={20}
              value={text}
              placeholder="your markdown"
              onChange={(e) => TextChange(e)}
            />
          </div>
        )}
        {toggle === 1 && (
          <div className="border border-gray-300">
            <div className="flex h-10 border-b border-gray-300">
              <BiChevronLeft size={40} onClick={() => downToggle(1)} />
              <BiChevronRight size={40} onClick={() => upToggle(1)} />
            </div>
            <div className="overflow-x-hidden overflow-y-scroll py-1.5 px-3 h-128">
              <Export str={text} />
            </div>
          </div>
        )}

        {toggle === 2 && (
          <div className="col-span-2 py-1.5 px-3 border border-gray-300">
            <div className="flex h-10 border-b border-gray-300">
              <BiChevronLeft size={40} onClick={() => downToggle(1)} />
              <BiChevronsLeft size={40} onClick={() => downToggle(2)} />
            </div>
            <div className="overflow-x-hidden overflow-y-scroll py-1.5 px-3 h-128">
              <Export str={text} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default EditMd;
