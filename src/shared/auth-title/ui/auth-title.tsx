interface IProps {
	children: string
}

export function AuthTitle({ children }: IProps) {
	return (
		<div className="px-8 py-8 text-xl bg-zinc-800 rounded-br-xl sm:rounded-tl-xl">
			<h2 >{children}</h2>
		</div>
	)
}
