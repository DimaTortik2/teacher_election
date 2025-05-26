import { instance } from '@/shared/api/api.instance'
import { QUERY_KEYS } from '@/app/model/constants'
import {
	ICreateTeacher,
	IEditTeacher,
	ITeacherForm,
} from '../../model/interfaces/admin-teacher.interface'

export const adminTeachersService = {
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
