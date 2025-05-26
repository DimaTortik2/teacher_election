import clsx from 'clsx'
import { ReactNode } from 'react'

interface IProps {
	children: ReactNode
	text: string
	className?: string
}

export function Layout({ children, text, className }: IProps) {
	return (
		<div className='w-screen h-screen flex flex-col items-center'>
			<h1 className='flex content-center items-center h-[5vh] text-start text-2xl sm:text-[2.5rem] mb-2'>
				{text}
			</h1>
			<div
				className={clsx(
					'w-screen md:w-[80vw] h-[90vh] bg-zinc-600 flex flex-col items-center justify-start rounded-xl',
					className
				)}
			>
				{children}
			</div>
		</div>
	)
}
