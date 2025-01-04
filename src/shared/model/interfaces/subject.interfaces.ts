import { InfinityResponse } from './infinity.interface'

export interface ISubject {
	title: string
	id : string
	createdAt: string
}

export type ISubjects = ISubject[]

export type ISubjectsResponse = InfinityResponse<ISubject>
