/* eslint-disable */
import EasyMDE from 'easymde';
import React, { useCallback, useState, useMemo } from 'react';
import 'easymde/dist/easymde.min.css';
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import { SimpleMdeReact } from 'react-simplemde-editor';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import remarkGfm from 'remark-gfm';
import type { CodeComponent, ReactMarkdownNames, HeadingComponent } from 'react-markdown/lib/ast-to-react';

const CodeBlock: CodeComponent | ReactMarkdownNames = ({ inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter style={dark} language={match[1]} PreTag="div">
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};
const H1: HeadingComponent | ReactMarkdownNames = ({ node, ...props }) => (
  <div className="text-2xl border-b-2 border-gray-300 mb-3 py-2">{props.children}</div>
);
export const Editor = () => {
  const components = {
    code: CodeBlock,
    h1: H1,
  };
  const [value, setValue] = useState('Initial value');
  const [isSide, setSide] = useState<boolean>(false);
  const getInstance = (instance: EasyMDE) => {
    if (!instance) return;
    if (!isSide) {
      EasyMDE.toggleSideBySide(instance);
      setSide(true);
    }
  };
  const customOptions = useMemo(() => {
    return {
      syncSideBySidePreviewScroll: true,
      autofocus: true,
      spellChecker: false,
      setPreview: true,
      sideBySideFullscreen: false,
      toolbar: false,
      previewRender(markdownPlaintext: string) {
        return ReactDOMServer.renderToString(
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {markdownPlaintext}
          </ReactMarkdown>,
        );
      },
    };
  }, []);
  const onChange = useCallback((str: string) => {
    setValue(str);
  }, []);
  return (
    <div>
      <div className="mb-5">
        <input
          className="py-2 px-4 w-full leading-tight text-gray-700  focus:bg-white rounded border-2 border-gray-200 focus:border-blue-500 focus:outline-none "
          type="text"
        />
      </div>
      <div className="my-10">
        <SimpleMdeReact value={value} onChange={onChange} options={customOptions} getMdeInstance={getInstance} />
      </div>
    </div>
  );
};
