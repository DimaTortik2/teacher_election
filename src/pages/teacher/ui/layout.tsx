import { ReactNode, forwardRef } from 'react'

export const Layout = forwardRef<
	HTMLDivElement,
	{
		header: ReactNode
		list: ReactNode
		form: ReactNode
	}
>(({ header, list, form }, ref) => {
	return (
		<div
			className='w-screen sm:w-[90vw] lg:w-[1000px] h-screen justify-start sm:rounded-xl bg-zinc-700 cdark-colors-crollbar overflow-y-auto'
			ref={ref}
		>
			<div className='w-full h-full flex flex-col gap-4 items-center justify-start sm:rounded-xl relative'>
				<div className='w-full flex flex-col items-center justify-start'>
					{header}
					{list}
				</div>
			</div>
			{form}
		</div>
	)
})
