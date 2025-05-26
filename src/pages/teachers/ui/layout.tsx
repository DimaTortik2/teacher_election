import { ReactNode } from 'react'

export function Layout({
	filter,
	menu,
	list,
}: {
	filter: ReactNode
	menu: ReactNode
	list?: ReactNode
}) {
	return (
		<div className='h-full w-full flex flex-col items-center justify-start'>
			<div className='w-full h-16 flex justify-between bg-zinc-800 py-2 relative'>
				{filter}
				{menu}
			</div>
			{list}
		</div>
	)
}
