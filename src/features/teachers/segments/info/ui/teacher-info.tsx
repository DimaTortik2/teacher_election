import { Rating } from '@mui/material'
import { getRatingColor } from '@/entities/review/lib/get-rating-color'
import clsx from 'clsx'
import { getAvgRating } from '@/shared/helpers/get-avg-rating'
import { useGetTeacher } from '@/features/teachers'
import { TEACHER_IMG } from '@/app/model/constants'
import { COMPONENTS_CLASSNAMES } from '@/app/model/style-constants'

interface IProps {
	id: string | undefined
	className?: string
	isSticky: boolean
}

export function TeacherInfo({ className, id, isSticky }: IProps) {
	const { data } = useGetTeacher(id)
	const avgRating = data ? getAvgRating(data.avgRatings) : null
	const subjectTitle = data ? 'на бэке норм присылай предмет' : null
	const fullName = isSticky ? data?.fullName.split(' ')[0] : data?.fullName

	return (
		<div
			className={clsx(
				'w-full p-2 flex',
				isSticky
					? 'flex-row justify-between items-center h-[65px]'
					: 'flex-col lg:flex-row items-start h-[300px]',
				className
			)}
		>
			{!isSticky && (
				<div className=' rounded-b-2xl border-solid border-b-2 border-zinc-700'>
					<img
						src={data ? TEACHER_IMG.base + data.photo : TEACHER_IMG.error}
						alt='Превью препода'
						className={COMPONENTS_CLASSNAMES.img}
						width={200}
						height={200}
						onError={e => {
							e.currentTarget.src = TEACHER_IMG.error
						}}
					/>
				</div>
			)}

			<div className={clsx('w-full', isSticky && 'flex justify-between')}>
				<div
					className={clsx(
						'flex',
						isSticky ? 'flex-row p-2 gap-2' : 'flex-row lg:flex-col p-2 gap-2'
					)}
				>
					<p className='text-left my-wrap-text'>{fullName}</p>
					{!isSticky && (
						<p className='text-left text-[rgba(255,255,255,0.5)] my-wrap-text'>
							{subjectTitle}
						</p>
					)}
				</div>

				{avgRating && (
					<div
						className={clsx(
							'p-2 flex',
							!isSticky &&
								'lg:p-2 flex flex-col sm:absolute lg:relative sm:top-0 sm:right-0 sm:p-4 w-full sm:w-auto lg:order-1'
						)}
					>
						<Rating
							name='size-small'
							readOnly
							defaultValue={avgRating}
							precision={0.5}
							sx={{ color: getRatingColor(avgRating) }}
						/>
						{!isSticky && (
							<p className='text-left text-[rgba(255,255,255,0.5)] my-wrap-text'>
								{'ср. оценка'}
							</p>
						)}
					</div>
				)}
			</div>
		</div>
	)
}
