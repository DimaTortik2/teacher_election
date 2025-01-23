
 interface InfinityData<T> {
	data: T[]
	nextCursor: number | null
} 

export type InfinityResponce<T> = Promise<InfinityData<T>>