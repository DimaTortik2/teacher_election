export interface InfinityData<T> {
	data: T[]
	nextCursor: number | null
} 

export interface PaginationData<T> {
	items: T[]
	count: number
	currentPage: number
}

export type PromiseInfinity<T> = Promise<InfinityData<T>>
export type PromisePagination<T> = Promise<PaginationData<T>>
