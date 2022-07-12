import type { FC } from 'react';
import { useRecoilState } from 'recoil';
import workState from '../../../../libs/recoil/edit/workState';
import MdEditor from './components/MdEditor';
import TagsInput from './components/TagsInput';

const Editor: FC = () => {
  const [work, setWork] = useRecoilState(workState);

  return (
    <div>
      <div className="m-5 flex justify-center">
        <input
          placeholder="Title"
          value={work.title || ''}
          className="h-14 w-1/2 border-none bg-transparent text-center text-4xl font-semibold text-primary-content outline-none"
          onChange={(event) => {
            setWork({ ...work, title: event.target.value });
          }}
        />
      </div>
      <div className="m-5 flex justify-center">
        <TagsInput placeholder="tags" />
      </div>
      <MdEditor
        markdownRecoil={work.markdown}
        setMarkdownRecoil={(markdown) => {
          setWork({ ...work, markdown });
        }}
      />
    </div>
  );
};

export default Editor;
