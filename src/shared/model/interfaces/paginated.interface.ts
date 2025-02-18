interface PaginationData<T> {
	items: T[]
	count: number
	urrentPage: number
}

export type WithPagination<T> = Promise<PaginationData<T>>
