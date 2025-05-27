import { COLORS } from '@/app/model/style-constants'
import { InfinityData } from '@/shared/model/interfaces/interfaces'
import {
	FetchNextPageOptions,
	InfiniteData,
	InfiniteQueryObserverResult,
} from '@tanstack/react-query'
import { ComponentType, ReactNode, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { SyncLoader } from 'react-spinners'

type IFetchNextPage<T> = (
	options?: FetchNextPageOptions
) => Promise<
	InfiniteQueryObserverResult<InfiniteData<InfinityData<T>, unknown>, Error>
>

export function InfinityCardList<T>({
	isLoading,
	items,
	renderItem,
	SkeletonComponent,
	skeletonCount = 9,
	isFetchingNextPage,
	hasNextPage,
	fetchNextPage,
	fetchingMt = 12,
	className = 'max-w-[800px] flex flex-wrap gap-4 justify-center p-10',
}: {
	isLoading: boolean
	items?: T[]
	renderItem: (item: T) => ReactNode
	SkeletonComponent: ComponentType
	skeletonCount?: number
	isFetchingNextPage: boolean
	hasNextPage: boolean
	fetchNextPage: IFetchNextPage<T>
	fetchingMt?: number
	className?: string
}) {
	const [ref, inView] = useInView()

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage()
		}
	}, [inView, fetchNextPage, hasNextPage])

	return (
		<div className='w-full h-full custom-scrollbar unwrapped-scrollbar flex flex-col items-center'>
			<ul className={className}>
				{isLoading
					? Array.from({ length: skeletonCount }).map((_, i) => (
							<SkeletonComponent key={i} />
					  ))
					: items?.map(item => renderItem(item))}

				{isFetchingNextPage && (
					<div
						className='w-full flex justify-center '
						style={{ marginTop: fetchingMt }}
					>
						<SyncLoader color={COLORS.gray500} />
					</div>
				)}

				<li className='h-1 w-full' ref={ref}>
					⠀
				</li>
			</ul>
		</div>
	)
}
