import { TEACHER_IMG } from '@/app/model/constants'
import { COMPONENTS_CLASSNAMES } from '@/app/model/style-constants'
import { ListShorter } from '@/shared/ui/list-shorter/fasade/list-shorter'
import { Rating } from '@mui/material'
import clsx from 'clsx'

interface IProps {
	rating?: number
	subjects?: string[]
	fullName?: string | null
	imgSrc?: string
}

export function TeacherPreview({ rating, subjects, fullName, imgSrc }: IProps) {
	return (
		<div className='w-full py-2 sm:px-4 flex flex-col sm:flex-row sm:items-start items-center'>
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
				<div className='flex flex-col justify-center px-1 sm:px-2 py-2 gap-2'>
					{fullName ? (
						<p className='text-center sm:text-left my-wrap-text '>{fullName}</p>
					) : (
						<p>⠀</p>
					)}
					<p className='text-left text-[rgba(255,255,255,0.5)] my-wrap-text'>
						<ListShorter
							list={subjects}
							className='w-full justify-center sm:justify-start'
						/>
					</p>
				</div>
			</div>
		</div>
	)
}
