import { ReactNode } from 'react'

export function Layout({
	input,
	actionsRow,
	preview,
	onSubmit,
	errorsMessage,
	bottomButton,
}: {
	input: ReactNode
	actionsRow: ReactNode
	preview: ReactNode
	errorsMessage: ReactNode
	onSubmit: () => void
	bottomButton: ReactNode
}) {
	return (
		<form
			onSubmit={onSubmit}
			className='flex flex-col content-center items-center w-[90vw] max-w-xl gap-2'
		>
			<div className='py-4 bg-zinc-700 transition-colors text-white px-4 rounded-xl text-xl w-full flex items-start mb-4 flex-col'>
				<p>Имя учителя</p>
				{input}
				{errorsMessage}
			</div>

			{actionsRow}
			{preview}
			{bottomButton}
		</form>
	)
}
