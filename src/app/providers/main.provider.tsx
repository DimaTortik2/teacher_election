import clsx from 'clsx'
import { Outlet } from 'react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useGetBgPath } from '../../features/settings/theme'

export function MainProvider() {
	const queryClient = new QueryClient()

	const bgPath = useGetBgPath()
	return (
		<QueryClientProvider client={queryClient}>
			<div
				style={{ backgroundImage: `url(${bgPath})` }}
				className={clsx(
					'flex items-center justify-center',
					'bg-zinc-900 h-screen w-screen text-white',
					`bg-no-repeat bg-center`,
					'bg-cover overflow-hidden'
				)}
			>
				<Outlet />
			</div>
		</QueryClientProvider>
	)
}
