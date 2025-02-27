
 interface InfinityData<T> {
	data: T[]
	nextCursor: number | null
} 


interface PaginationData<T> {
	items: T[]
	count: number
	urrentPage: number
}

export type InfinityResponse<T> = Promise<InfinityData<T>>
export type WithPagination<T> = Promise<PaginationData<T>>
