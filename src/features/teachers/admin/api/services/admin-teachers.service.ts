import { instance } from '@/shared/api/api.instance'
import { QUERY_KEYS } from '@/app/model/constants'
import {
	IEditTeacher,
	ICreateTeacher,
} from '../../model/interfaces/admin-teacher.interface'

export const adminTeachersService = {
	axios: instance,

	createOne: async function ({
		fullName,
		subjectIds,
		file,
	}: ICreateTeacher): Promise<ICreateTeacher> {
		const formData = new FormData()

		formData.append('subjectIds', JSON.stringify(subjectIds))

		if (file) formData.append('file', file)
		formData.append('fullName', fullName)

		return await this.axios
			.post(`/${QUERY_KEYS.teacher}`, formData)
			.then(res => res.data)
	},

	deleteOne: async function (id: string): Promise<void> {
		return await this.axios.delete(`/${QUERY_KEYS.teacher}/${id}`)
	},

	editOne: async function ({
		id,
		data: { subjectIds, file, fullName },
	}: IEditTeacher): Promise<void> {
		const formData = new FormData()
		if (subjectIds) formData.append('subjectIds', JSON.stringify(subjectIds))

		if (file) formData.append('photo', file) /// или же файл

		if (fullName) formData.append('fullName', fullName)

		return await this.axios.put(`/${QUERY_KEYS.teacher}/${id}`, formData)
	},
}
