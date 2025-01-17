import { QUERY_KEYS } from '../../model/constants'
import type {
	ISubject,
	ISubjectsResponse,
} from '../../model/interfaces/subject.interfaces'
import { instance } from '../api.instance'

export const subjectService = {
	axios: instance,

	createOne: async function (
		data: Omit<ISubject, 'id' | 'createdAt'>
	): Promise<ISubject> {
		return await this.axios
			.post(`/${QUERY_KEYS.subjects}`, data)
			.then(res => res.data)
	},

	findMany: async function (cursor: string): Promise<ISubjectsResponse> {
		const params = new URLSearchParams()
		if (cursor) {
			params.append('cursor', cursor)
		}
		return await this.axios
			.get(`/${QUERY_KEYS.subjects}?${params.toString()}&limit=5`)
			.then(res => res.data)
	},

	deleteOne: async function (id: string): Promise<void> {
		return await this.axios.delete(`/${QUERY_KEYS.subjects}/${id}`)
	},
	editOne: async function (id: string): Promise<void> {
		return await this.axios.delete(`/${QUERY_KEYS.subjects}/${id}`)
	},
	
}
