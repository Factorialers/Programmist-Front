import { useState } from 'react';
import type { FC } from 'react';

const Comment: FC = () => {
  const [tab, setTab] = useState<number>(1);
  const [sub, setSub] = useState<number>(1);
  return (
    <div>
      <div className="mx-auto  mt-40 bg-white">
        <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-b border-gray-200 ">
          <ul className="flex flex-wrap p-2 -mb-px">
            {tab === 1 && (
              <li className="pb-2 mr-3 text-blue-500 border-b-2 border-indigo-500">
                <button type="button" className="text-xl">
                  Comment
                </button>
              </li>
            )}
            {tab === 0 && (
              <li className="mr-3">
                <button type="button" className="text-xl" onClick={() => setTab(1)}>
                  Comment
                </button>
              </li>
            )}
            {tab === 1 && (
              <li className="mr-3">
                <button type="button" className="text-xl" onClick={() => setTab(0)}>
                  Preview
                </button>
              </li>
            )}
            {tab === 0 && (
              <li className="pb-2 mr-3 text-blue-500 border-b-2 border-indigo-500">
                <button type="button" className="text-xl">
                  Preview
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
      {tab === 0 && <div className="bg-white">Comment</div>}
      {tab === 1 && <div className="bg-white">Preview</div>}
      <div id="submit" className="py-2 px-5 my-5 bg-white">
        <div className="border border-gray-400">
          <ul className="flex flex-wrap p-2 -mb-px">
            {sub === 1 && (
              <li className="pb-2 mr-3 text-blue-500 border-b-2 border-indigo-500">
                <button type="button" className="text-sm">
                  Edit
                </button>
              </li>
            )}
            {sub === 0 && (
              <li className="mr-3">
                <button type="button" className="text-sm" onClick={() => setSub(1)}>
                  Edit
                </button>
              </li>
            )}
            {sub === 1 && (
              <li className="mr-3">
                <button type="button" className="text-sm" onClick={() => setSub(0)}>
                  Preview
                </button>
              </li>
            )}
            {sub === 0 && (
              <li className="pb-2 mr-3 text-blue-500 border-b-2 border-indigo-500">
                <button type="button" className="text-sm">
                  Preview
                </button>
              </li>
            )}
          </ul>
          {sub === 0 && <div>hoge</div>}
          {sub === 1 && <div>hoge</div>}
        </div>
      </div>
    </div>
  );
};
export default Comment;
