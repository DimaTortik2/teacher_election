import { instance } from '@/shared/api/api.instance'
import { QUERY_KEYS } from '@/app/model/constants'

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
}
