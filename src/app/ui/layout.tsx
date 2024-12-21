import clsx from 'clsx'
import { Outlet } from 'react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export function Layout() {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
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
		</QueryClientProvider>
	)
}
