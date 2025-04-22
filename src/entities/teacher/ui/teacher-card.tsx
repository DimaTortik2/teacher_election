import { Rating } from '@mui/material'
import clsx from 'clsx'
import { Link } from 'react-router'

interface IProps {
	imgSrc: string
	teacherName: string
	subject: string
	teacherId: string
	className?: string
}

export function TeacherCard({
	imgSrc,
	teacherName,
	subject,
	className,
	teacherId,
}: IProps) {
	return (
		<li
			className={clsx(
				className,
				'rounded-2xl w-[200px] bg-zinc-600 flex flex-col items-start justify-start p-1'
			)}
		>
			<Link to={`/teacher/${teacherId}`}>
				<div className='w-full h-[200px] '>
					<img
						src={imgSrc}
						alt='картинка учителя'
						className='w-full h-full object-cover object-center rounded-2xl border-4 border-zinc-500 '
					/>
				</div>
				<p className='w-full pl-3 text-left'>{teacherName}</p>
				<p className='w-full pl-3 text-left text-[rgba(255,255,255,0.5)]'>
					{subject}
				</p>
				<Rating
					name='size-small'
					readOnly
					defaultValue={3.5}
					precision={0.5}
					className=' pl-3'
				/>
			</Link>
		</li>
	)
}
