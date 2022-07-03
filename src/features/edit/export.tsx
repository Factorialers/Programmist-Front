import ReactMarkdown from 'react-markdown';
import type { CodeComponent, ReactMarkdownNames,HeadingComponent } from 'react-markdown/lib/ast-to-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import remarkGfm from 'remark-gfm';

export type Props = {
  str: string;
};

 /* eslint-disable*/
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

const H1: HeadingComponent  | ReactMarkdownNames = ({ node, ...props }) =>(
  <div className="text-2xl border-b-2 border-gray-300 mb-3 py-2">{props.children}</div>
)

const Export = (props: Props) => {
  const components = {
    code: CodeBlock,
    h1:H1
  };
  const { str } = props;
  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {str}
      </ReactMarkdown>
    </div>
  );
};


export default Export;
