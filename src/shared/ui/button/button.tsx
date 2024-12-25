import clsx from 'clsx'
import { ReactNode } from 'react'

interface IText {
	children: ReactNode
	type?: 'submit'
	className?: string
	onClick?: () => void
}

export function Button({ children, type, className = ' ', onClick }: IText) {
	return (
		<button
			type={type}
			className={clsx(
				className,
				'py-4 bg-zinc-700 hover:bg-zinc-800 transition-colors text-white px-10  rounded-xl text-xl'
			)}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
