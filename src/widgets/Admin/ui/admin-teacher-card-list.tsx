import { ReactNode, useEffect } from 'react'
import {useDeleteTeacher, useEditTeacher } from '../../../shared'
import { OptimisticTeachers } from '../../../features/admin-features'

import {
	InfiniteData,
	QueryObserverResult,
	RefetchOptions,
} from '@tanstack/react-query'
import { ITeachersResponse } from '../../../shared/model/interfaces/teacher.interface'
import { AdminTeacherCard } from '../../../entities/teacher'


type refetchTeachersType = {
	(options?: RefetchOptions): Promise<
		QueryObserverResult<InfiniteData<ITeachersResponse, unknown>, Error>
	>
}

interface IProps {
	teachersArray?: ITeachersResponse[]
	children: ReactNode
	refetchTeachers: refetchTeachersType
}

export function AdminTeacherCardsList({
	teachersArray,
	refetchTeachers,
	children,
}: IProps) {
	const { deleteTeacher, deleteTeacherIsSuccess } = useDeleteTeacher()
	const {editTeacher  } = useEditTeacher()


	useEffect(() => {
		if (deleteTeacherIsSuccess) {
			refetchTeachers()
		}
	}, [deleteTeacherIsSuccess, refetchTeachers])

	return (
		<ul className='overflow-auto w-full h-[70vh] rounded-xl custom-scrollbar p-4 pb-20'>
			<OptimisticTeachers />
			{teachersArray?.map(teachers =>
				teachers.data?.map(teacher => (
					<AdminTeacherCard
						key={teacher.id}
						className='mt-2 mb-2'
						teacherName={teacher.fullName}
						onDelete={() => deleteTeacher(teacher.id)}
						onEdit={() => editTeacher(teacher.id)}
					/>
				))
			)}
			{children}
		</ul>
	)
}
