import { ReactNode, useEffect } from 'react'
import { TeacherCard } from '../../../entities/teacher'
import { ITeachersResponse } from '../../../shared/model/interfaces/teacher.interface'
import clsx from 'clsx'


interface IProps {
	children: ReactNode
	teachersArray?: ITeachersResponse[]
}

export function TeacherCardList({children, teachersArray}:IProps) {

	console.log('ARAAAAAAAAAAAAAAY',teachersArray)

	return (
		<div className='w-full h-full custom-scrollbar flex flex-col items-center'>
			<ul className='max-w-[800px] flex flex-wrap gap-4 justify-center p-10'>
				{teachersArray?.map(teachers =>
					teachers.data?.map(teacher => (
						<TeacherCard
							key={teacher.id}
							imgSrc={clsx(
								'https://teachers-election-backend.onrender.com/', teacher.photo, '.jpg'
							)}
							teacherName={teacher.fullName}
							subject={teacher.subject}
						/>
					))
				)}
				{children}
			</ul>
		</div>
	)
}
