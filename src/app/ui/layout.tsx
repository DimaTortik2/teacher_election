import clsx from 'clsx'
import { Outlet } from 'react-router'

export function Layout() {
	return (
		<>
			<div
				className={clsx(
					'flex items-center justify-center',
					'bg-zinc-900 h-screen w-screen text-white',
					"bg-[url('/layout-bg2.jpg')] bg-no-repeat bg-center",
					'bg-cover overflow-hidden'
				)}
			>
				<Outlet />
			</div>
		</>
	)
}
