import { TEACHER_IMG } from '@/app/model/constants'
import { COMPONENTS_CLASSNAMES } from '@/app/model/style-constants'
import { Rating } from '@mui/material'
import clsx from 'clsx'

interface IProps {
	rating?: number
	subject?: string | { title: string; id: string } | null
	fullName?: string | null
	imgSrc?: string
}

export function TeacherPreview({ rating, subject, fullName, imgSrc }: IProps) {
	console.log({ subject })
	return (
		<div className='w-full py-2 px-4 flex flex-col sm:flex-row sm:items-start items-center'>
			<img
				src={imgSrc}
				alt='Превью препода'
				className={clsx(COMPONENTS_CLASSNAMES.img, 'flex-shrink-0')}
				onError={e => {
					e.currentTarget.src = TEACHER_IMG.error
				}}
			/>

			<div className='w-full'>
				{rating && (
					<div className='lg:p-2 p-2 flex flex-col sm:absolute lg:relative sm:top-0 sm:right-0 sm:p-4 w-full sm:w-auto lg:order-1'>
						<Rating
							name='size-small'
							readOnly
							defaultValue={rating}
							precision={0.5}
						/>
						<p className='text-left text-[rgba(255,255,255,0.5)] my-wrap-text'>
							{'ср. оценка'}
						</p>
					</div>
				)}
				<div className='flex flex-row sm:flex-col justify-center p-2 gap-2'>
					<p className='text-left my-wrap-text'>{fullName}</p>
					<p className='text-left text-[rgba(255,255,255,0.5)] my-wrap-text'>
						{/* {subject} */}
						{<p>исправь на бэке, непонятно массив или один предмет</p>}
					</p>
				</div>
			</div>
		</div>
	)
}
