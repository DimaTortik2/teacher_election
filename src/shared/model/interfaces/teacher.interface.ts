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
	photo: File
}

export type ITeachers = ITeacherResponce[]

export type ITeachersResponse = InfinityResponse<ITeacherResponce>
