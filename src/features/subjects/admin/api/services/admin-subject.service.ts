import { instance } from '@/shared/api/api.instance'
import { QUERY_KEYS } from '@/app/model/constants'

import { ISubject } from '@/features/subjects'

export const subjectService = {
	axios: instance,

	createOne: async function (
		data: Omit<ISubject, 'id' | 'createdAt'>
	): Promise<ISubject> {
		return await this.axios
			.post(`/${QUERY_KEYS.subject}`, data)
			.then(res => res.data)
	},

	editOne: async function ({
		id,
		title,
	}: {
		id: string
		title: string
	}): Promise<void> {
		return await this.axios.put(`/${QUERY_KEYS.subject}/${id}`, {
			title: title,
		})
	},

	deleteOne: async function (id: string): Promise<void> {
		return await this.axios.delete(`/${QUERY_KEYS.subject}/${id}`)
	},

	deleteMany: async function (ids: string[]): Promise<void> {
		// return await this.axios.delete(`/${QUERY_KEYS.manySubjects}/${id}`)
		console.log(ids)
	},
}
