import { instance } from '@/shared/api/api.instance'
import { QUERY_KEYS } from '@/app/model/constants'
import {
	PromiseInfinity,
	PromisePagination,
} from '@/shared/model/interfaces/interfaces'
import { ISubject } from '@/features/subjects'

export const subjectService = {
	axios: instance,

	findMany: async function (cursor: string): PromiseInfinity<ISubject> {
		const params = new URLSearchParams()
		if (cursor) {
			params.append('cursor', cursor)
		}
		return await this.axios
			.get(`/${QUERY_KEYS.subject}?${params.toString()}&limit=5`)
			.then(res => res.data)
	},

	findManyPaginated: async function ({
		page,
		limit,
		title,
	}: {
		page: number
		limit: number
		title?: string
	}): PromisePagination<ISubject> {
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
}
