
 interface InfinityData<T> {
	data: T[]
	nextCursor: number | null
} 

export type InfinityResponse<T> = Promise<InfinityData<T>>