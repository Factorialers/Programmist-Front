import type { FC } from 'react';
import { useSetRecoilState } from 'recoil';
import DropZone from '../../../../components/elements/DropZone';
import logoState from '../../../../libs/recoil/logoState';

const GetLogo: FC = () => {
  const setSourceCode = useSetRecoilState(logoState);

  return (
    <div className="flex justify-center">
      <DropZone
        onDrop={(acceptedFiles) => {
          setSourceCode(acceptedFiles[0]);
        }}
        zoneContent="Drag and Drop Image Here!"
        btnText="select image"
      />
    </div>
  );
};

export default GetLogo;
