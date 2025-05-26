import { ICategories } from '@/features/reviews/segments/create-form'

export function getAvgRating(avgRatings?: {
	[key in keyof ICategories]: number
}) {
	return avgRatings?.experienced &&
		avgRatings?.freebie &&
		avgRatings?.friendliness &&
		avgRatings?.smartless &&
		avgRatings?.strictness
		? Number(
				(
					(avgRatings.experienced +
						avgRatings.freebie +
						avgRatings.friendliness +
						avgRatings.smartless +
						avgRatings.strictness) /
					5
				).toFixed(1)
		  )
		: 0
}
