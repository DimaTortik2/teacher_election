import { TEACHER_IMG } from '@/app/model/constants'
import { COMPONENTS_CLASSNAMES } from '@/app/model/style-constants'
import { ListShorter } from '@/shared/ui/list-shorter/fasade/list-shorter'
import { Rating } from '@mui/material'
import clsx from 'clsx'
import { Link } from 'react-router'

interface IProps {
	imgSrc: string
	teacherName: string
	subjects: string[]
	teacherId: string
	avgRating: number
	className?: string
}

export function TeacherCard({
	imgSrc,
	teacherName,
	subjects,
	className,
	teacherId,
	avgRating,
}: IProps) {
	return (
		<Link
			to={`/teacher/${teacherId}`}
			className={clsx(
				'flex flex-col gap-1 items-center justify-center w-[220px] rounded-2xl bg-theme-600 p-3',
				className
			)}
		>
			<img
				src={imgSrc}
				alt='картинка учителя'
				className={clsx(
					COMPONENTS_CLASSNAMES.img,
					Math.round(Math.random()) ? 'sepia' : 'sepia-0'
				)}
				onError={e => {
					e.currentTarget.src = TEACHER_IMG.error
				}}
			/>
			<div className='items-start justify-start w-full '>
				<p className='w-full pl-3 text-left'>{teacherName}</p>
				<p className='w-full pl-3 text-left text-[rgba(255,255,255,0.5)]'>
					<ListShorter list={subjects} />
				</p>
				<Rating
					name='size-small'
					readOnly
					defaultValue={avgRating ? avgRating : 0}
					precision={0.5}
					className='pl-3 mb-2'
				/>
			</div>
		</Link>
	)
}
