import MDEditor from '@uiw/react-md-editor';
import { FC, useState } from 'react';
import onImagePasted from '../../utils/onImagePasted';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

type Props = {
  markdownRecoil?: string | null | undefined;
  setMarkdownRecoil?: (value: string | undefined) => void;
};

const MdEditor: FC<Props> = ({ markdownRecoil, setMarkdownRecoil }) => {
  const [markdown, setMarkdown] = useState<string | null | undefined>(markdownRecoil);

  return (
    <div data-color-mode="light">
      <MDEditor
        value={markdown || undefined}
        onChange={(value) => {
          if (setMarkdownRecoil) {
            setMarkdownRecoil(value);
          }
          setMarkdown(value);
        }}
        onPaste={async (event) => {
          await onImagePasted(event.clipboardData, setMarkdown);
        }}
        onDrop={async (event) => {
          await onImagePasted(event.dataTransfer, setMarkdown);
        }}
        height={440}
        textareaProps={{
          placeholder: 'Fill in your markdown for the coolest of the cool.',
        }}
        hideToolbar
      />
    </div>
  );
};

MdEditor.defaultProps = {
  markdownRecoil: undefined,
  setMarkdownRecoil: undefined,
};

export default MdEditor;
