import { Rating } from '@mui/material'
import { getRatingColor } from '@/entities/review/lib/get-rating-color'
import clsx from 'clsx'
import { getAvgRating } from '@/shared/helpers/get-avg-rating'
import { useGetTeacher } from '@/features/teachers'
import { SkeletonWrapper } from '@/shared/ui/loaders/skeleton-wrapper'

interface IProps {
	id: string | undefined
	className?: string
}

export function TeacherStickyInfo({ className, id }: IProps) {
	const { data, getTeacherIsLoading } = useGetTeacher(id)
	const avgRating = data ? getAvgRating(data.avgRatings) : null
	const fullName = data?.fullName.split(' ')[0]

	return (
		<div
			className={clsx(
				'w-full p-2 flex flex-col lg:flex-row items-start ',
				className
			)}
		>
			<div className='w-full flex justify-between'>
				<div className='flex flex-row p-2 gap-2'>
					<SkeletonWrapper
						isLoading={getTeacherIsLoading}
						variant='text'
						width={100}
					>
						<p className='text-left my-wrap-text'>{fullName}</p>
					</SkeletonWrapper>
				</div>

				{avgRating && (
					<div className='p-2 flex'>
						<SkeletonWrapper
							isLoading={getTeacherIsLoading}
							variant='text'
							width={135}
						>
							<Rating
								name='size-small'
								readOnly
								defaultValue={avgRating}
								precision={0.5}
								sx={{ color: getRatingColor(avgRating) }}
							/>
						</SkeletonWrapper>
					</div>
				)}
			</div>
		</div>
	)
}
