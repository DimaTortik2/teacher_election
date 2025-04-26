import { Rating } from '@mui/material'
import { useGetTeacher } from '../../../shared/api/queries/teachers.queries'
import { getRatingColor } from '../../../shared/helpers/get-rating-color'
import clsx from 'clsx'
import { getAvgRating } from '../../../shared/helpers/get-avg-rating'

interface IProps {
	defaultImgSrc: string
	id: string | undefined
	className?: string
	isSticky: boolean
}

const BASE_URL =
	'https://console-production-6cbd.up.railway.app/api/v1/buckets/teachers-bucket/objects/download?preview=true&prefix='

function getSubjectTitle(
	subject: string | { title: string } | undefined
): string {
	if (!subject) return ''
	return typeof subject === 'string' ? subject : subject.title
}

export function TeacherInfo({
	className,
	defaultImgSrc,
	id,
	isSticky,
}: IProps) {
	const { data } = useGetTeacher(id)
	const avgRating = data ? getAvgRating(data.avgRatings) : null
	const subjectTitle = data ? getSubjectTitle(data.subject) : ''
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
				<div className='w-[200px] h-[200px] rounded-b-2xl border-solid border-b-2 border-zinc-700'>
					<img
						src={
							data ? `${BASE_URL}${data.photo}&version_id=null` : defaultImgSrc
						}
						alt='Превью препода'
						className='w-full h-full object-cover object-center rounded-2xl border-4 border-zinc-500'
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
							precision={1}
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

// import { Rating } from '@mui/material'
// import { useGetTeacher } from '../../../shared/api/queries/teachers.queries'
// import { getRatingColor } from '../../../shared/helpers/get-rating-color'
// import clsx from 'clsx'
// import { getAvgRating } from '../../../shared/helpers/get-avg-rating'

// interface IProps {
// 	defaultImgSrc: string
// 	id: string | undefined
// 	className?: string
// 	isSticky: boolean
// }

// const BASE_URL =
// 	'https://console-production-6cbd.up.railway.app/api/v1/buckets/teachers-bucket/objects/download?preview=true&prefix='

// function getSubjectTitle(
// 	subject: string | { title: string } | undefined
// ): string {
// 	if (!subject) return ''
// 	return typeof subject === 'string' ? subject : subject.title
// }

// export function TeacherInfo({
// 	className,
// 	defaultImgSrc,
// 	id,
// 	isSticky,
// }: IProps) {
// 	const { data } = useGetTeacher(id)
// 	const avgRating = data ? getAvgRating(data.avgRatings) : null
// 	const subjectTitle = data ? getSubjectTitle(data.subject) : ''
// 	const fullName = isSticky ? data?.fullName.split(' ')[0] : data?.fullName
// 	return (
// 		<div
// 			className={clsx(
// 				'w-full p-2 flex',
// 				isSticky
// 					? ' h-[65px]' // учтен сейчас такой размер ... надо сделать норм верстку
// 					: ' h-[300px]',
// 				className
// 			)}
// 		>
// 			{!isSticky && (
// 				<div className='w-[200px] h-[200px] rounded-b-2xl border-solid border-b-2 border-zinc-700'>
// 					<img
// 						src={
// 							data ? `${BASE_URL}${data.photo}&version_id=null` : defaultImgSrc
// 						}
// 						alt='Превью препода'
// 						className='w-full h-full object-cover object-center rounded-2xl border-4 border-zinc-500'
// 					/>
// 				</div>
// 			)}

// 			<div className={clsx('w-full', isSticky && 'flex justify-between')}>
// 				<div
// 					className={clsx(
// 						'flex',
// 						isSticky ? 'flex-row p-2 gap-2' : 'flex-row lg:flex-col p-2 gap-2'
// 					)}
// 				>
// 					<p className='text-left my-wrap-text'>{fullName}</p>
// 					{!isSticky && (
// 						<p className='text-left text-[rgba(255,255,255,0.5)] my-wrap-text'>
// 							{subjectTitle}
// 						</p>
// 					)}
// 				</div>

// 				{avgRating && (
// 					<div className={clsx('p-2 flex', !isSticky && 'lg:p-2 flex')}>
// 						<Rating
// 							name='size-small'
// 							readOnly
// 							defaultValue={avgRating}
// 							precision={1}
// 							sx={{ color: getRatingColor(avgRating) }}
// 						/>
// 						{/* {!isSticky && (
// 							<p className='text-left text-[rgba(255,255,255,0.5)] my-wrap-text'>
// 								{'ср. оценка'}
// 							</p>
// 						)} */}
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	)
// }
