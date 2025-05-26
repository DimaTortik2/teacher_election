import clsx from 'clsx'
import { ReactNode } from 'react'

export function ModalBottomButton({
	onClick,
	children,
	type = 'button',
	className,
}: {
	onClick?: () => void
	children: ReactNode
	type?: 'submit' | 'button'
	className?: string
}) {
	return (
		<button
			type={type}
			className={clsx(
				'mt-auto w-full py-2  rounded-b-2xl',
				className || 'bg-zinc-600 hover:bg-zinc-800'
			)}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
