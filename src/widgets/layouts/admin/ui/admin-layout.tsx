import { ReactNode } from 'react'

interface IProps {
	children: ReactNode
	text: string
}

export function AdminLayout({ children, text }: IProps) {
	return (
		<div className='w-screen h-screen flex flex-col items-center'>
			<h1 className='flex content-center items-center h-[5vh] text-start text-2xl sm:text-[2.5rem] mb-2'>
				{text}
			</h1>
			{children}
		</div>
	)
}
