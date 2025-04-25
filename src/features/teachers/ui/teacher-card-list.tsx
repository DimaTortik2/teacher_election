import { ReactNode } from 'react'
import { TeacherCard } from '../../../entities/teacher'
import { InfinityData } from '../../../shared/model/interfaces/interfaces'
import { ITeacher } from '../model/interfaces/teacher.interface'

interface IProps {
	children: ReactNode
	teachersArray?: InfinityData<ITeacher>[]
}

export function TeacherCardList({ children, teachersArray }: IProps) {
	console.log('ARAAAAAAAAAAAAAAY', teachersArray)
	return (
		<div className='w-full h-full custom-scrollbar unwrapped-scrollbar flex flex-col items-center'>
			<ul className='max-w-[800px] flex flex-wrap gap-4 justify-center p-10'>
				{teachersArray?.map(teachers =>
					teachers.data?.map(teacher => (
						<TeacherCard
							key={teacher.id}
							imgSrc={`https://console-production-6cbd.up.railway.app/api/v1/buckets/teachers-bucket/objects/download?preview=true&prefix=${teacher.photo}&version_id=null`}
							teacherName={teacher.fullName}
							teacherId={teacher.id}
							subject={
								typeof teacher.subject === 'string'
									? teacher.subject
									: teacher.subject.title
							}
						/>
					))
				)}
				{children}
			</ul>
		</div>
	)
}
