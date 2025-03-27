import clsx from 'clsx'
import { Review } from '../../../entities/review'
import { ReactNode } from 'react'
import { IReviewResponse } from '../../review'

interface IProps {
	className?: string
	children: ReactNode
	messages?: IReviewResponse[]
}

export function ReviewList({ className, children, messages }: IProps) {
	const handleLikelick = () => {
		console.log('like')
	}

	return (
		<div
			className={clsx(
				'w-full flex flex-col justify-start gap-6 p-2',
				className
			)}
		>
			{messages?.map(m => (
				<Review
					key={m.id}
					text={m.message}
					onLikelick={handleLikelick}
					ratingArr={[
						m.experienced,
						m.freebie,
						m.friendliness,
						m.smartless,
						m.strictness,
					]}
				/>
			))}
			{children}
		</div>
	)
}
