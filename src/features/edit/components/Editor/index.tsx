import type { FC } from 'react';
import MdEditor from './components/MdEditor';
import TagsInput from './components/TagsInput';

const Editor: FC = () => (
  <div>
    <div className="m-5 flex justify-center">
      <input
        placeholder="Title"
        className="h-14 w-1/2 border-none bg-transparent text-center text-4xl font-semibold text-primary-content outline-none"
      />
    </div>
    <div className="m-5 flex justify-center">
      <TagsInput placeholder="tags" />
    </div>
    <MdEditor />
  </div>
);

export default Editor;
