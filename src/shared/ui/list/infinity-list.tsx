import { COLORS } from '@/app/model/style-constants'
import { useInfiniteScroll } from '@/shared/model/hooks/infinity-scroll/use-infinity-scroll'
import { IFetchNextPage } from '@/shared/model/interfaces/interfaces'

import { ReactNode } from 'react'

import { SyncLoader } from 'react-spinners'

export function InfinityList<T>({
	isLoading,
	items,
	renderItem,
	isFetchingNextPage,
	hasNextPage,
	fetchNextPage,
	className = 'w-full flex flex-col justify-start gap-6 p-2',
	loadingMt = 12,
	fetchingMt = 0,
	loaderSize,
}: {
	isLoading: boolean
	items?: T[]
	renderItem: (item: T) => ReactNode

	isFetchingNextPage: boolean
	hasNextPage: boolean
	fetchNextPage: IFetchNextPage<T>
	className?: string
	loadingMt?: number
	fetchingMt?: number
	loaderSize?: number
}) {
	const ref = useInfiniteScroll({ hasNextPage, fetchNextPage })

	return (
		<div className={className}>
			{isLoading ? (
				<div
					className='w-full flex justify-center'
					style={{ marginTop: loadingMt }}
				>
					<SyncLoader color={COLORS.gray500} />
				</div>
			) : (
				items?.map(item => renderItem(item))
			)}

			{isFetchingNextPage && (
				<div
					className='w-full flex justify-center'
					style={{ marginTop: fetchingMt }}
				>
					<SyncLoader color={COLORS.gray500} size={loaderSize || 15} />
				</div>
			)}

			<li ref={ref}>⠀</li>
		</div>
	)
}
