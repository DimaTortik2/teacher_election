import { useEffect } from 'react'
import { TeacherCard } from '@/entities/teacher'
import { useGetTeachers } from '@/features/teachers'
import { useInView } from 'react-intersection-observer'
import { TEACHER_IMG } from '@/app/model/constants'

export function TeacherCardList() {
	const { data, hasNextPage, fetchNextPage } = useGetTeachers()

	const [ref, inView] = useInView()

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage()
		}
	}, [inView, fetchNextPage, hasNextPage])

	return (
		<div className='w-full h-full custom-scrollbar unwrapped-scrollbar flex flex-col items-center'>
			<ul className='max-w-[800px] flex flex-wrap gap-4 justify-center p-10'>
				{data?.map(teacher => (
					<TeacherCard
						key={teacher.id}
						imgSrc={TEACHER_IMG.base + teacher.photo}
						teacherName={teacher.fullName}
						teacherId={teacher.id}
						avgRating={teacher.avgRating}
						subject={'пофикси на бэке'}
					/>
				))}

				<li className='h-1 w-full' ref={ref}>
					⠀
				</li>
			</ul>
		</div>
	)
}
