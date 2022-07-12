import type { FC } from 'react';
import { useRecoilState } from 'recoil';
import DropZone from '../../../../components/elements/DropZone';
import workState from '../../../../libs/recoil/edit/workState';

const GetSourceCode: FC = () => {
  const [work, setWork] = useRecoilState(workState);

  return (
    <div className="flex justify-center">
      <DropZone
        onDrop={(acceptedFiles) => {
          setWork({ ...work, sourceCode: acceptedFiles });
        }}
      />
    </div>
  );
};

export default GetSourceCode;
