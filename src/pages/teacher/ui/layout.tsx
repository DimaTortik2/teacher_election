import { ReactNode, forwardRef } from 'react'

export const Layout = forwardRef<
	HTMLDivElement,
	{
		headers: ReactNode[]
		list: ReactNode
		form: ReactNode
	}
>(({ headers, list, form }, ref) => {
	return (
		<div
			className='w-screen max-w-[1000px] h-screen justify-start  bg-zinc-700 cdark-colors-crollbar overflow-y-auto'
			ref={ref}
		>
			<div className='w-full h-full flex flex-col gap-4 items-center justify-start sm:rounded-xl relative'>
				<div className='w-full flex flex-col items-center justify-start'>
					{...headers}
					{list}
				</div>
			</div>
			{form}
		</div>
	)
})
