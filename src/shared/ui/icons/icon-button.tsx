import clsx from 'clsx'
import { ReactNode } from 'react'

export function IconButton({
	className,
	icon,
	onClick,
	type = 'button',
}: {
	className?: string
	icon: ReactNode
	onClick: () => void
	type?: 'submit' | 'button'
}) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={clsx(
				'm-2 p-1 rounded-full hover:bg-zinc-600 transition-colors',
				className
			)}
		>
			{icon}
		</button>
	)
}
