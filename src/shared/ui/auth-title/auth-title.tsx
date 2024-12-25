interface IProps {
	children: string
}

export function AuthTitle({ children }: IProps) {
	return (
		<div className='px-8 py-8 text-xl bg-zinc-800 rounded-br-xl sm:rounded-tl-xl absolute top-0 left-0'>
			<h2>{children}</h2>
		</div>
	)
}
