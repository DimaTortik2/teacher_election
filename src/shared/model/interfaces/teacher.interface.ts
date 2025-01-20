import type { InfinityResponse } from '../interfaces/infinity.interface'

export interface ICreateTeacher {
	fullName: string
	subjectId: string
	photo: File
}

export interface ITeacherResponce {
	id: string
	fullName: string
	subject: string
	subjectId: string
	photo: string
}

export type ITeachers = ITeacherResponce[]

export type ITeachersResponse = InfinityResponse<ITeacherResponce>

export interface ITeacherExtended {
	fullName: string
	subject: string
	id: string
	photo: string
	teacherReview : number
}