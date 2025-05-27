import {
	FetchNextPageOptions,
	InfiniteData,
	InfiniteQueryObserverResult,
} from '@tanstack/react-query'

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

export interface IErrorData {
	message: string
	statusCode: number
	error: string
}

export type IFetchNextPage<T> = (
	options?: FetchNextPageOptions
) => Promise<
	InfiniteQueryObserverResult<InfiniteData<InfinityData<T>, unknown>, Error>
>
