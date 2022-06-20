import React from 'react';
import ReactMarkdown from 'react-markdown';
import type { Props } from './type';

/* eslint-disable*/
/*@ts-expect-error*/
const H2 = ({ node, ...props }) =>(
	<h2 id={node.position?.start.line.toString()}>{props.children}</h2>
)
/* eslint-disable*/

const Left = (props: Props) => {
  const { str } = props;
  return (
    <div className="mt-10 text-left bg-white">
      <ReactMarkdown  allowedElements={["h2"]} components={{h2:H2}}>{str}</ReactMarkdown>
    </div>
  );
};
export default Left;
