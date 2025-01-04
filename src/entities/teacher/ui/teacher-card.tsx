import { Rating } from '@mui/material'
import clsx from 'clsx'

interface IProps {
	imgSrc: string
	teacherName: string
	subject: string
	className?: string
}

export function TeacherCard({
	imgSrc,
	teacherName,
	subject,
	className,
}: IProps) {
	return (
		<li
			className={clsx(
				className,
				'rounded-2xl w-[200px] h-[300px] bg-zinc-600 border-zinc-800 border-2 flex flex-col items-start justify-start p-1'
			)}
		>
			<img
				src={imgSrc}
				alt='картинка учителя'
				className='w-full rounded-2xl border-zinc-800 border-2'
			/>
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
		</li>
	)
}
