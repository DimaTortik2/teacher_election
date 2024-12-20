import clsx from 'clsx'

interface IText {
	children: string
	type: 'submit' | 'button'
	className: string
}

export function Button({ children, type, className = ' ' }: IText) {
	return (
		<button
			type={type}
			className={clsx(
				className,
				'h-14 bg-zinc-700 hover:bg-zinc-800 transition-colors text-white px-10 py-1 rounded-xl text-xl'
			)}
		>
			{children}
		</button>
	)
}
