import { PromiseInfinity } from '../../../../shared/model/interfaces/interfaces'
import { ICategories } from '../../../review'
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
	photo: string
	subject: { title: string; id: string } | string
	fullName: string
	avgRatings: { [key in keyof ICategories]: number }
}

export type ITeachersResponse = PromiseInfinity<ITeacher>

export type ITeachers = ITeacher[]
