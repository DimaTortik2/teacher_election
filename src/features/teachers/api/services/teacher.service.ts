import { instance } from '../../../../shared/api/api.instance'
import { QUERY_KEYS } from '../../../../shared/model/constants'
import { ITeacherForm } from '../../model/interfaces/teacher-form.interface'
import {
	ICreateTeacher,
	IEditTeacher,
	ITeacher,
	ITeachersResponse,
} from '../../model/interfaces/teacher.interface'

export const teacherService = {
	axios: instance,

	createOne: async function (data: ITeacherForm): Promise<ICreateTeacher> {
		const formData = new FormData()
		formData.append('subjectId', JSON.parse(data.subject).subjectId)
		if (data.file) formData.append('file', data.file[0])
		formData.append('fullName', data.fullName)

		console.log(' data.photo', data.file, 'data.fullName', data.fullName)

		console.log('we are here = ', formData)

		return await this.axios
			.post(`/${QUERY_KEYS.teacher}`, formData)
			.then(res => res.data)
	},

	findOne: async function (id?: string): Promise<ITeacher> {
		return this.axios.get(`/${QUERY_KEYS.teacher}/${id}`).then(res => res.data)
	},

	findMany: async function (cursor: string): ITeachersResponse {
		const params = new URLSearchParams()
		if (cursor) {
			params.append('cursor', cursor)
		}
		return await this.axios
			.get(`/${QUERY_KEYS.teacher}?${params.toString()}&limit=5`)
			.then(res => res.data)
	},

	deleteOne: async function (id: string): Promise<void> {
		return await this.axios.delete(`/${QUERY_KEYS.teacher}/${id}`)
	},

	editOne: async function ({ id, data }: IEditTeacher): Promise<void> {
		const formData = new FormData()
		if (data.subject)
			formData.append('subjectId', JSON.parse(data.subject).subjectId)

		if (data.file) formData.append('photo', data.file[0]) /// или же файл

		if (data.fullName) formData.append('fullName', data.fullName)


		return await this.axios.put(`/${QUERY_KEYS.teacher}/${id}`, formData)
	},
}
