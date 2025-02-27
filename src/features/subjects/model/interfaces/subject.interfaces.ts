import { InfinityResponse } from "../../../../shared/model/interfaces/interfaces"

export interface ISubject {
	title: string
	id : string
	createdAt: string
}

export type ISubjects = ISubject[]

export type ISubjectsResponse = InfinityResponse<ISubject>
