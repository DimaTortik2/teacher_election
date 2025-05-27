export function SubjectItem({
	value,
	title,
}: {
	value: string
	title: string
}) {
	return (
		<li
			className='p-2 cursor-pointer hover:bg-theme-800 transition-colors my-wrap-text'
			value={value}
		>
			{title}
		</li>
	)
}
