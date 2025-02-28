import { instance } from '../../../../shared/api/api.instance'
import { QUERY_KEYS } from '../../../../shared/model/constants'
import { ITeacherForm } from '../../model/interfaces/teacher-form.interface'
import {
	ICreateTeacher,
	ITeacher,
	ITeachersResponse,
} from '../../model/interfaces/teacher.interface'

export const teacherService = {
	axios: instance,

	createOne: async function (data: ITeacherForm): Promise<ICreateTeacher> {
		const formData = new FormData()
		formData.append('subjectId', JSON.parse(data.subject).subjectId)
		formData.append('photo', data.photo[0])
		formData.append('fullName', data.fullName)

		console.log(
			' data.photo',
			typeof data.photo,
			'data.fullName',
			typeof data.fullName
		)

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

	editOne: async function (id: string): Promise<void> {
		return await this.axios.put(`/${QUERY_KEYS.teacher}/${id}`)
		//////////////////////////
	},
}
