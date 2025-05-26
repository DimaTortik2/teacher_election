import clsx from 'clsx'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Review } from '@/entities/review'
import { ReviewLike } from '@/features/reviews/segments/like'
import { useGetReviews } from '@/features/reviews/api/queries/reviews.queries'

interface IProps {
	className?: string
	id?: string
}

export function ReviewList({ className, id }: IProps) {
	const [ref, inView] = useInView()

	const { data, hasNextPage, fetchNextPage } = useGetReviews(id)

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage()
		}
	}, [inView, fetchNextPage, hasNextPage])

	return (
		<div
			className={clsx(
				'w-full flex flex-col justify-start gap-6 p-2',
				className
			)}
		>
			{data?.map(m => (
				<Review
					key={m.id}
					text={m.message}
					rating={m.avgRating}
					nickName={m.user?.nickName}
					actions={<ReviewLike count={m.likesCount} />}
				/>
			))}
			<li ref={ref}>⠀</li>
		</div>
	)
}
