import Link from 'next/link';
import React from 'react'

const Header:React.FC = () => (
		<div className="p-3 bg-gray-700 hadow-lg">
			<div className="Title inline text-xl text-white">
				Programist
			</div>
			<div className='inline'>
				<div className="inline text-stone-50 ml-1 pl-10 hover:text-gray-500 ">
					<Link href='/'>
						ホーム
					</Link>
				</div>
				<div className="inline text-stone-50 pl-5 hover:text-gray-500">
					<Link href='timeline'>
						タイムライン
					</Link>
				</div>
				<div className="inline text-stone-50 pl-5 hover:text-gray-500">
					<Link href='trend'>
						トレンド
					</Link>
				</div>
				<div className="inline text-stone-50 pl-5 hover:text-gray-500">
					<Link href='ranking'>
						ランキング
					</Link>
				</div>
			</div>
		</div>
)
export default Header;