
export interface ITeacherForm {
	fullName: string
	subject: string
	file?: File[]
}

export interface ICreateTeacher {
	fullName: string
	subjectId: string
	photo: File
}

export interface IEditTeacher {
	id: string
	data: Partial<ITeacherForm>
}
