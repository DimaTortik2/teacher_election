import { Rating } from '@mui/material'
import { useEffect } from 'react'
import { useGetTeacher } from '../../api/queries/teachers.queries'

interface IProps {
	rating?: number
	imgSrc: string
	id: string | undefined
}

export function TeacherInfo({ rating, imgSrc, id }: IProps) {
	const { data, getTeacherIsSuccess } = useGetTeacher(id)

	useEffect(() => {
		console.log('data === ', data)
	}, [getTeacherIsSuccess, data])

	return (
		<div className='w-full p-2 flex flex-col lg:flex-row items-start '>
			<div className=' w-[200px] h-[200px] '>
				<img
					src={
						data
							? `https://teachers-election-backend.onrender.com/${data.photo}`
							: imgSrc
					}
					alt='Превью препода'
					className='w-full h-full object-cover object-center rounded-2xl border-4 border-zinc-500 '
				/>
			</div>

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
				<div className='flex flex-row lg:flex-col p-2 gap-2'>
					<p className='text-left my-wrap-text'>{data && data.fullName}</p>
					<p className='text-left text-[rgba(255,255,255,0.5)] my-wrap-text'>
						{data && data.subject}
					</p>
				</div>
			</div>
		</div>
	)
}
