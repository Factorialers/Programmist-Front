import type { FC } from 'react';
import { useRecoilState } from 'recoil';
import DropZone from '../../../../components/elements/DropZone';
import workState from '../../../../libs/recoil/edit/workState';

const GetLogo: FC = () => {
  const [work, setWork] = useRecoilState(workState);

  return (
    <div className="flex justify-center">
      <DropZone
        onDrop={(acceptedFiles) => {
          setWork({ ...work, logo: acceptedFiles[0] });
        }}
        zoneContent="Drag and Drop Image Here!"
        btnText="select image"
      />
    </div>
  );
};

export default GetLogo;
