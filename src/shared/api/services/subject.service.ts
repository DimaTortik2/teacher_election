import { QUERY_KEYS } from '../../model/constants'
import { InfinityResponse } from '../../model/interfaces/infinity.interface'
import { WithPagination } from '../../model/interfaces/paginated.interface'
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
			.post(`/${QUERY_KEYS.subject}`, data)
			.then(res => res.data)
	},

	findMany: async function (
		cursor: string
	): InfinityResponse<ISubjectsResponse> {
		const params = new URLSearchParams()
		if (cursor) {
			params.append('cursor', cursor)
		}
		return await this.axios
			.get(`/${QUERY_KEYS.subject}?${params.toString()}&limit=5`)
			.then(res => res.data)
	},

	findManyPaged: async function ({
		page,
		limit,
		title,
	}: {
		page: number
		limit: number
		title?: string
	}): WithPagination<ISubject> {
		const params = new URLSearchParams()

		if (title) {
			params.append('title', title)
		}
		if (limit) {
			params.append('limit', limit.toString())
		}

		if (page === 0 ? true : page) {
			params.append('page', (page + 1).toString())
		}
		return await this.axios
			.get(`/${QUERY_KEYS.subject}?${params.toString()}`)
			.then(res => res.data)
	},

	deleteOne: async function (id: string): Promise<void> {
		return await this.axios.delete(`/${QUERY_KEYS.subject}/${id}`)
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
}
