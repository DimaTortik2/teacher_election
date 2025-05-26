import { ReactNode } from 'react'
import { Link } from 'react-router'

interface IProps {
	children: ReactNode
	href: string
}

export function AdminLink({ children, href }: IProps) {
	return (
		<Link to={href}>
			<li className='bg-zinc-700 hover:bg-zinc-800 transition-colors text-white px-10 py-[calc((1vh_+_1vw)*1)] rounded-[40px] text-[calc((1vh_+_1vw)*1.4)] border-zinc-500 border-4 text-center'>
				{children}
			</li>
		</Link>
	)
}
