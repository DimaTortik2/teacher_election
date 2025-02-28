import { PromiseInfinity } from '../../../../shared/model/interfaces/interfaces'

export interface ICreateTeacher {
	fullName: string
	subjectId: string
	photo: File
}

export interface ITeacher {
	id: string
	fullName: string
	subject: string
	photo: string
	avgRating: number
}

export type ITeachersResponse = PromiseInfinity<ITeacher>

export type ITeachers = ITeacher[]
