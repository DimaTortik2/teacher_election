import clsx from 'clsx'
import { ReactNode } from 'react'

export function FormLayout({
	children,
}: {
	children: ReactNode
	isVisible: boolean
}) {
	return (
		<div
			className={clsx(
				'bg-zinc-700 text-white text-xl bottom-0 fixed w-full max-w-[1000px] z-50 flex items-start flex-col',
				' py-2 px-2 sm:px-5 ',
				'border-t-2 border-t-zinc-500 '
			)}
		>
			{children}
		</div>
	)
}
