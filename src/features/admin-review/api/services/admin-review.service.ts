import { instance } from '../../../../shared/api/api.instance'
import { QUERY_KEYS } from '../../../../shared/model/constants'

export const reviewService = {
	axios: instance,

	approve: async function (id: string) {
		return await this.axios
			.put(`/${QUERY_KEYS.review}/unaprove/${id}`)
			.then(res => res.data)
	},

	unapprove: async function (id: string) {
		return await this.axios
			.put(`/${QUERY_KEYS.review}/aprove/${id}`)
			.then(res => res.data)
	},

	findMany: async function (
		cursor: string //  :PromiseInfinity<>
	) {
		const params = new URLSearchParams()
		if (cursor) {
			params.append('cursor', cursor)
		}
		return await this.axios
			.get(`/${QUERY_KEYS.review}?${params.toString()}&limit=5`)
			.then(res => res.data)
	},
}
