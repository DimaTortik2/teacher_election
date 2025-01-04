export interface InfinityResponse<T> {
	data: T[]
	nextCursor: number | null
} 