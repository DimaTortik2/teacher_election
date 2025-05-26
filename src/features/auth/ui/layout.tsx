import { ReactNode } from 'react'

export function Layout({
	inputs,
	header,
	backLink,
	buttons,
	onSubmit,
}: {
	inputs: ReactNode[]
	header: ReactNode
	backLink: ReactNode
	buttons: ReactNode[]
	onSubmit: () => void
}) {
	return (
		<form
			onSubmit={onSubmit}
			className='relative h-full w-full flex flex-col justify-center'
		>
			{header}
			<div className='relative flex flex-col flex-1 w-full justify-center'>
				<div className='w-full items-center flex flex-col gap-1'>
					{...inputs}
				</div>
				<div className='w-full flex justify-center'>
					<div className='h-px w-4/5 bg-cyan-100'></div>
				</div>

				<div className='w-full flex justify-center mt-2'>
					<div className='w-3/4 flex gap-3'>
						<span className='opacity-85 text-gray-100'>нет аккаунта?</span>
						{backLink}
					</div>
				</div>
			</div>
			{...buttons}
		</form>
	)
}
