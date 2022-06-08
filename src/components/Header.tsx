import Link from 'next/link'
const Header = () => {
	return (
		<div className="Header p-3 bg-gray-700 hadow-lg">
			<div className="Title inline text-xl ">
				Programist
			</div>
			<div className='inline Links'>
				<div className="inline text-stone-50 ml-1 pl-10 hover:text-gray-500 ">
					<Link href='home'>
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
}
export default Header