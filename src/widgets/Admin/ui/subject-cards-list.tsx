import { ReactNode, useEffect } from 'react'
import { AdminSubjectCard } from '../../../entities/subject/ui/admin-subject-card'
import { ISubjectsResponse } from '../../../shared'
import { OptimisticSubjects } from '../../../features/admin-features'

import { useDeleteSubject } from '../../../shared'
import {
	InfiniteData,
	QueryObserverResult,
	RefetchOptions,
} from '@tanstack/react-query'

type refetchSubjectsType = {
	(options?: RefetchOptions): Promise<
		QueryObserverResult<InfiniteData<ISubjectsResponse, unknown>, Error>
	>
}

interface IProps {
	subjectsArray?: ISubjectsResponse[]
	children: ReactNode
	refetchSubjects: refetchSubjectsType
}

export function AdminSubjectCardsList({
	subjectsArray,
	refetchSubjects,
	children,
}: IProps) {
	const {
		deleteSubject,
		deleteSubjectIsSuccess,
	} = useDeleteSubject()

	useEffect(() => {
		if (deleteSubjectIsSuccess) {
			refetchSubjects()
		}
	}, [deleteSubjectIsSuccess, refetchSubjects])

	return (
		<ul className='overflow-auto w-full h-[70vh] rounded-xl custom-scrollbar p-4 pb-20'>
			<OptimisticSubjects />
			{subjectsArray?.map(subjects =>
				subjects.data?.map((subject, index) => (
					<AdminSubjectCard
						key={index}
						className='mt-2 mb-2'
						title={subject.title}
						onDelete={() => deleteSubject(subject.id)}
					/>
				))
			)}
			{children}
		</ul>
	)
}
