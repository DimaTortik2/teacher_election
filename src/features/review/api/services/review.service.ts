import { instance } from '../../../../shared/api/api.instance'
import { QUERY_KEYS } from '../../../../shared/model/constants'
import { PromiseInfinity } from '../../../../shared/model/interfaces/interfaces'
import { IReviewResponse } from '../../model/interfaces/comment.sinterface'
import { IPostTeacherReview } from '../../model/interfaces/teacher-review.interface'

export const reviewService = {
	axios: instance,

	createOne: async function (
		data: Pick<IPostTeacherReview, 'message' | 'teacherId'>
	): Promise<IPostTeacherReview> {
		return await this.axios
			.post(`/${QUERY_KEYS.review}`, data)
			.then(res => res.data)
	},

	findMany: async function ({
		cursor,
		id,
	}: {
		cursor: string
		id: string
	}): PromiseInfinity<IReviewResponse> {
		const params = new URLSearchParams()
		if (cursor) {
			params.append('cursor', cursor)
		}
		if (id) {
			params.append('teacherId', id)
		}
		return await this.axios
			.get(`/${QUERY_KEYS.review}?${params.toString()}&limit=5`)
			.then(res => res.data)
	},
}
