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
        className={`flex h-40 w-full justify-center rounded-2xl border-2 bg-base px-4 ${
          isDragActive ? 'border-secondary' : 'border-gray-300'
        } cursor-pointer border-dashed focus:outline-none`}
      >
        <div className="flex flex-col items-center justify-center">
          <span className="mt-5 text-center font-semibold">
            {zoneContent}
            <br />
            or ...
          </span>
          <button
            type="button"
            onClick={() => {
              document.getElementById('file_uploader')?.click();
            }}
            className="daisy-btn daisy-btn-primary mt-3 mb-5 shadow-md"
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
