/* eslint-disable tailwindcss/no-custom-classname */
import type { FC } from 'react';
import { useDropzone } from 'react-dropzone';

const DropZone: FC<{ onDrop: (acceptedFiles: File[]) => void; zoneContent?: string; btnText?: string }> = ({ onDrop, zoneContent, btnText }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
  });

  return (
    <div className="w-96" {...getRootProps()}>
      <label
        htmlFor="file_uploader"
        className={`flex justify-center px-4 w-full h-40 bg-base rounded-2xl border-2 ${
          isDragActive ? 'border-secondary' : 'border-gray-300'
        } border-dashed focus:outline-none cursor-pointer`}
      >
        <div className="flex flex-col justify-center items-center">
          <span className="mt-5 font-semibold text-center">
            {zoneContent}
            <br />
            or ...
          </span>
          <button
            type="button"
            onClick={() => {
              document.getElementById('file_uploader')?.click();
            }}
            className="mt-3 mb-5 shadow-md daisy-btn daisy-btn-primary"
          >
            {btnText}
          </button>
          <input id="file_uploader" type="file" className="hidden" {...getInputProps()} />
        </div>
      </label>
    </div>
  );
};

DropZone.defaultProps = {
  zoneContent: 'Drag and Drop Files or Folders Here!',
  btnText: 'select files',
};

export default DropZone;
