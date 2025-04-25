import { ICategories } from '../../features/review'

export function getAvgRating(avgRatings?: {
	[key in keyof ICategories]: number
}) {
	return avgRatings?.experienced &&
		avgRatings?.freebie &&
		avgRatings?.friendliness &&
		avgRatings?.smartless &&
		avgRatings?.strictness
		? Math.floor(
				(avgRatings.experienced +
					avgRatings.freebie +
					avgRatings.friendliness +
					avgRatings.smartless +
					avgRatings.strictness) /
					5
		  )
		: 0
}
