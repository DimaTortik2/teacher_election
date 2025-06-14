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
	onClick?: () => void
	type?: 'submit' | 'button'
}) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={clsx(
				'mx-2 p-1 rounded-full hover:bg-zinc-600 transition-colors w-8 h-8 flex items-center justify-center',
				className
			)}
		>
			{icon}
		</button>
	)
}
