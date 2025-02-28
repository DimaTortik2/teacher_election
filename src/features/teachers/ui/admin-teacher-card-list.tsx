import { ReactNode, useEffect } from 'react'
import {
	InfiniteData,
	QueryObserverResult,
	RefetchOptions,
} from '@tanstack/react-query'
import { OptimisticTeachers } from '../../optimistic'
import {
	ITeacher,
} from '../model/interfaces/teacher.interface'
import {
	useDeleteTeacher,
	useEditTeacher,
} from '../api/queries/teachers.queries'
import { AdminTeacherCard } from '../../../entities/teacher'
import { InfinityData } from '../../../shared/model/interfaces/interfaces'

type refetchTeachersType = {
	(options?: RefetchOptions) : Promise<QueryObserverResult<InfiniteData<InfinityData<ITeacher>, unknown>, Error>>
}

interface IProps {
	teachersArray?: InfinityData<ITeacher>[]
	children: ReactNode
	refetchTeachers: refetchTeachersType
}

export function AdminTeacherCardsList({
	teachersArray,
	refetchTeachers,
	children,
}: IProps) {
	const { deleteTeacher, deleteTeacherIsSuccess } = useDeleteTeacher()
	const { editTeacher } = useEditTeacher()

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
