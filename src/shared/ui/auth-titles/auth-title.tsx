import clsx from "clsx"

interface IProps {
	children: string
	className?: string
}

export function AuthTitle({ children, className }: IProps) {
	return (
		<div
			className={clsx(className,
				'px-8 py-8 text-xl bg-zinc-800 rounded-br-xl sm:rounded-tl-xl '
			)}
		>
			<h2>{children}</h2>
		</div>
	)
}
