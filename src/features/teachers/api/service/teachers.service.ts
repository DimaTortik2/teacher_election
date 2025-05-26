import { instance } from '@/shared/api/api.instance'
import { QUERY_KEYS } from '@/app/model/constants'
import {
	ITeacher,
	ITeachersResponse,
} from '../../model/interfaces/teachers.interface'

export const teacherService = {
	axios: instance,

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
}
