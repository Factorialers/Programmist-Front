/* eslint-disable import/no-cycle */
import dynamic from 'next/dynamic';

const Editor = dynamic(() => {
	const promise = import("./index").then((r) => r.Editor);
	return promise;
  }, { ssr: false });
  
export default Editor