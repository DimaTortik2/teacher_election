import { ReactNode } from 'react'

export function Layout({
	isVisible,
	headerActions,
	list,
}: {
	isVisible: boolean
	headerActions: ReactNode[]
	list: ReactNode
}) {
	return isVisible ? (
		<div className='absolute w-full h-screen bg-zinc-800 rounded-b-2xl top-0 right-0 z-10 flex flex-col gap-3 pt-2'>
			<div className='w-full flex justify-end'>{...headerActions}</div>
			{list}
		</div>
	) : (
		<></>
	)
}
