export { RatingForm } from '../review/ui/rating-form'
export { MessageInput } from './ui/review-input'

export { useHeightControl } from './model/use-height-control'

export { usePostReview, useGetReviews } from './api/queries/review.queries'
export type { IPostTeacherReview } from './model/interfaces/teacher-review.interface'
export type {
	ICategoryNames,
	ICategoryName,
} from './model/interfaces/rating.inerface'
export { ReviewList } from './ui/review-list'

export type { IReviewResponse } from './model/interfaces/comment.sinterface'
export type { ICategories } from './model/interfaces/catigories.interface'
export { createTeacherReviewSchema } from './model/schemas/create-review.schema'
