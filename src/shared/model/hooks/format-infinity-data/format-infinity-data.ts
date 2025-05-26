import { InfinityData } from '@/shared/model/interfaces/interfaces'
import { InfiniteData } from '@tanstack/react-query'

export function formatInfinityData<T>(
	rawData: InfiniteData<InfinityData<T>, unknown> | undefined
) {
	return rawData?.pages?.flatMap(page => page.data) as T[] | undefined
}
