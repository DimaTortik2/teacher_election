import clsx from 'clsx'
import { ReactNode } from 'react'

interface IProps {
	children: ReactNode
	className?: string
}
export function AuthHeader({ children, className }: IProps) {
	return (
		<div
			className={clsx('rounded-xl w-full py-2 text-2xl text-white text-center bg-cyan-500', className)}
		>
			{children}
		</div>
	)
}
