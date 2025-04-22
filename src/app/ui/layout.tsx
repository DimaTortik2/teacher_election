import clsx from 'clsx'
import { Outlet } from 'react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useGetBgPath } from '../../shared/lib/theme'
import { useEffect } from 'react'

export function Layout() {
	const queryClient = new QueryClient()

	const bgPath = useGetBgPath()

	useEffect(() => {
		const setHeight = () => {
			document.documentElement.style.setProperty(
				'--window-height',
				`${window.innerHeight}px`
			)
		}
		setHeight() // Устанавливаем высоту при загрузке
		window.addEventListener('resize', setHeight) // Обновляем при изменении размера окна
		return () => window.removeEventListener('resize', setHeight) // Очищаем слушатель
	}, [])

	return (
		<QueryClientProvider client={queryClient}>
			<div
				style={{ backgroundImage: `url(${bgPath})` }}
				className={clsx(
					'flex items-center justify-center',
					'bg-zinc-900 h-[var(--window-height)] w-screen text-white',
					`bg-no-repeat bg-center`,
					'bg-cover overflow-hidden'
				)}
			>
				<Outlet />
			</div>
		</QueryClientProvider>
	)
}
