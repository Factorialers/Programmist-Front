import type { FC } from 'react';
import { useSetRecoilState } from 'recoil';
import DropZone from '../../../../components/elements/DropZone';
import sourceCodeState from '../../../../libs/recoil/sourceCodeState';

const GetSourceCode: FC = () => {
  const setSourceCode = useSetRecoilState(sourceCodeState);

  return (
    <div className="flex justify-center">
      <DropZone
        onDrop={(acceptedFiles) => {
          setSourceCode(acceptedFiles);
        }}
      />
    </div>
  );
};

export default GetSourceCode;
