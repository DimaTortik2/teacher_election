import { ReactNode } from 'react'
import { TeacherCard } from '../../../entities/teacher'
import { ITeachersResponse } from '../../../shared/model/interfaces/teacher.interface'

interface IProps {
	children: ReactNode
	teachersArray?: ITeachersResponse[]
}

export function TeacherCardList({ children, teachersArray }: IProps) {
	console.log('ARAAAAAAAAAAAAAAY', teachersArray)
	return (
		<div className='w-full h-full custom-scrollbar flex flex-col items-center'>
			<ul className='max-w-[800px] flex flex-wrap gap-4 justify-center p-10'>
				{teachersArray?.map(teachers =>
					teachers.data?.map(teacher => (
						<TeacherCard
							key={teacher.id}
							imgSrc={
								`https://teachers-election-backend.onrender.com/
								${teacher.photo}`}
							teacherName={teacher.fullName}
							teacherId={teacher.id}
							subject={teacher.subject}
						/>
					))
				)}
				{children}
			</ul>
		</div>
	)
}
