import { UseFormRegister } from 'react-hook-form'
import { ISubject } from '@/features/subjects'
import { ITeacherForm } from '@/features/teachers/admin'
import { useGetSubjects } from '@/features/subjects'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

interface IProps {
	register?: UseFormRegister<ITeacherForm>
	isRequired?: boolean
}

export function SubjectOptionsList({ register, isRequired }: IProps) {
	const { data, hasNextPage, refetchSubjects, fetchNextPage } = useGetSubjects()
	const [ref, inView] = useInView()
	useEffect(() => {
		if (inView && hasNextPage) {
			console.log('inview')
			fetchNextPage()
		}
	}, [inView, fetchNextPage, refetchSubjects, hasNextPage])


	return (
		<select
			{...(register ? register('subject', { required: isRequired }) : {})}
			size={7}
			className=' bg-theme-600 w-40 rounded-2xl text-white text-center
		 border-theme-400 custom-scrollbar rounded-scrollbar border-2 overflow-auto overflow-x-hidden'
			style={{
				maxHeight: '30vh', // Ограничение высоты
				overflowY: 'auto', // Прокрутка по вертикали
			}}
		>
			{data?.map((subject: ISubject, index: number) => (
				<option
					key={index}
					className='p-2 cursor-pointer hover:bg-theme-800 transition-colors my-wrap-text'
					value={JSON.stringify({
						subjectId: subject.id,
						title: subject.title,
					})}
				>
					{subject.title}
				</option>
			))}
			<option disabled className='h-0 w-0' ref={ref}>
				⠀
			</option>
		</select>
	)
}
