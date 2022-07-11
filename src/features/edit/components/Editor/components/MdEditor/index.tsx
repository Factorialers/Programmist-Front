import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { useRecoilState } from 'recoil';
import markdownState from '../../../../../../libs/recoil/markdownState';
import onImagePasted from '../../utils/onImagePasted';

const MdEditor = () => {
  const [markdownGlobal, setMarkdownGlobal] = useRecoilState(markdownState);
  const [markdown, setMarkdown] = useState<string | undefined>(markdownGlobal);

  return (
    <div data-color-mode="light">
      <MDEditor
        value={markdown}
        onChange={(value) => {
          setMarkdownGlobal(value);
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

export default MdEditor;
