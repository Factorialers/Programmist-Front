import React from 'react'
import ReactMarkdown from 'react-markdown'
import type { Props } from './type'

const Center=(props:Props)=>{
	const {str}=props
	return(
		<div className='mt-10 text-left bg-white'>
			<ReactMarkdown>
				{str}
			</ReactMarkdown>
		</div>
	)
}
export default Center