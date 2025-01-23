import { QUERY_KEYS } from '../../model/constants'
import { InfinityResponce } from '../../model/interfaces/infinity.interface'
import {
	IPostTeacherReview,
	ITeacherReview,
} from '../../model/interfaces/teacher-review.interface'
import { instance } from '../api.instance'

export const reviewService = {
	axios: instance,

	createOne: async function (
		data: Pick<IPostTeacherReview, 'message' | 'teacherId'>
	): Promise<IPostTeacherReview> {
		return await this.axios
			.post(`/${QUERY_KEYS.review}`, data)
			.then(res => res.data)
	},

	findMany: async function (cursor: string): InfinityResponce<ITeacherReview> {
		const params = new URLSearchParams()
		if (cursor) {
			params.append('cursor', cursor)
		}
		return await this.axios
			.get(`/${QUERY_KEYS.review}?${params.toString()}&limit=5`)
			.then(res => res.data)
	},

	// deleteOne: async function (id: string): Promise<void> {
	// 	return await this.axios.delete(`/${QUERY_KEYS.review}/${id}`)
	// },
	// editOne: async function ({
	// 	id,
	// 	title,
	// }: {
	// 	id: string
	// 	title: string
	// }): Promise<void> {
	// 	return await this.axios.put(`/${QUERY_KEYS.review}/${id}`, {
	// 		title: title,
	// 	})
	// },
}
