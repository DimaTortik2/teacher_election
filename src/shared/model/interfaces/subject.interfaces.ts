export interface ISubject {
	title: string
	id: string
	createdAt: string
}

export type ISubjects = ISubject[]

export interface ISubjectsResponse {
	data: ISubjects
	nextCursor: number | null
}
