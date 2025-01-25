import clsx from 'clsx'
import { ReactNode } from 'react'

interface IText {
	children: ReactNode
	type?: 'submit' | 'button'
	className?: string
	onClick?: () => void
}

export function Button({ children, type, className = ' ', onClick }: IText) {
	return (
		<button
			type={type}
			className={clsx(
				'py-4 transition-colors text-white px-10 rounded-xl text-xl',
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
