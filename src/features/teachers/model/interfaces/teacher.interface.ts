import { PromiseInfinity } from '../../../../shared/model/interfaces/interfaces'
import { ITeacherForm } from './teacher-form.interface'

export interface ICreateTeacher {
	fullName: string
	subjectId: string
	photo: File
}

export interface IEditTeacher {
	id: string
	data: Partial<ITeacherForm>
}

export interface ITeacher {
	id: string
	fullName: string
	subject: { title: string; id: string } | string
	photo: string
	avgRating: number
}

export type ITeachersResponse = PromiseInfinity<ITeacher>

export type ITeachers = ITeacher[]
