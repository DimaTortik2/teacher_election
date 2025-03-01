import { ReactNode } from 'react'
import { OptimisticTeachers } from '../../optimistic'
import { ITeacher } from '../model/interfaces/teacher.interface'
import { AdminTeacherCard } from '../../../entities/teacher'
import { InfinityData } from '../../../shared/model/interfaces/interfaces'

interface IProps {
	teachersArray?: InfinityData<ITeacher>[]
	children: ReactNode
	onDelete: (id: string) => void
	onEdit: (id: string) => void
}

export function AdminTeacherCardsList({
	teachersArray,
	children,
	onDelete,
	onEdit,
}: IProps) {
	return (
		<ul className='overflow-auto w-full h-[70vh] rounded-xl custom-scrollbar p-4 pb-20'>
			<OptimisticTeachers />
			{teachersArray?.map(teachers =>
				teachers.data?.map(teacher => (
					<AdminTeacherCard
						key={teacher.id}
						className='mt-2 mb-2'
						teacherName={teacher.fullName}
						onDelete={() => onDelete(teacher.id)}
						onEdit={() => onEdit(teacher.id)}
					/>
				))
			)}
			{children}
		</ul>
	)
}
