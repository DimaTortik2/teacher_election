import { Review } from '@/entities/review'
import { ReviewLike } from '@/features/reviews/segments/like'
import { useGetReviews } from '@/features/reviews/api/queries/reviews.queries'
import { InfinityList } from '@/shared/ui/list/infinity-list'

interface IProps {
	id?: string
}

export function ReviewList({ id }: IProps) {
	const {
		data,
		hasNextPage,
		fetchNextPage,
		getReviewsIsLoading,
		isFetchingNextPage,
	} = useGetReviews(id)

	return (
		<InfinityList
			fetchNextPage={fetchNextPage}
			hasNextPage={hasNextPage}
			isFetchingNextPage={isFetchingNextPage}
			isLoading={getReviewsIsLoading}
			renderItem={r => (
				<Review
					key={r.id}
					text={r.message}
					rating={r.avgRating}
					nickName={r.user?.nickName}
					actions={<ReviewLike count={r.likesCount} />}
				/>
			)}
			items={data}
			className={'w-full flex flex-col justify-start gap-6 p-2 pb-20'}
		/>
	)
}
