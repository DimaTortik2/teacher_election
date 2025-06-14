import { z } from 'zod'
import { CreateTeacherSchema } from '../schemas/create-teacher.schema'

export type ICreateTeacherForm = z.infer<typeof CreateTeacherSchema>
export type ISelectedSubjects = ICreateTeacherForm['selectedSubjects']
export type ISelectedSubject = ISelectedSubjects[number]

export interface ICreateTeacher {
	fullName: string
	subjectIds: string[] // на бэкэнде это ещё один предмет....
	file?: File | null
}

export interface IEditTeacher {
	id: string
	data: Partial<ICreateTeacher>
}
