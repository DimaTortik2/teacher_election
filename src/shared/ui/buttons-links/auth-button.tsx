import clsx from 'clsx'
import { ReactNode } from 'react'

interface IProps {
	children: ReactNode
	className?: string
	onClick?: () => void
	isSubmit?: boolean
}

export function AuthButton({ children, className, onClick, isSubmit }: IProps) {
	return (
		<button
			className={clsx(
				'px-4 py-2 bg-cyan-600 hover:bg-cyan-800 rounded-xl transition-colors',
				className
			)}
			onClick={onClick}
			type={isSubmit ? 'submit' : 'button'}
		>
			{children}
		</button>
	)
}
