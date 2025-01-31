import { ReactNode, useEffect } from 'react'
import { AdminSubjectCard } from '../../../entities/subject/ui/admin-subject-card'
import { ISubjects, ISubjectsResponse, useEditSubject } from '../../../shared'
import { OptimisticSubjects } from '../../../features/admin'

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
	onOpenEditTools: (idx: number) => void
	onCloseEditTools: () => void
	visibleIdx: number | null
	subjectsArray?: ISubjects
	children: ReactNode
	refetchSubjects: refetchSubjectsType
}

export function AdminSubjectCardsList({
	onOpenEditTools,
	onCloseEditTools,
	visibleIdx,
	subjectsArray,
	refetchSubjects,
	children,
}: IProps) {
	const { deleteSubject, deleteSubjectIsSuccess } = useDeleteSubject()
	const { editSubject, editSubjectIsSuccess } = useEditSubject()

	useEffect(() => {
		if (deleteSubjectIsSuccess || editSubjectIsSuccess) {
			refetchSubjects()
		}
	}, [deleteSubjectIsSuccess, refetchSubjects, editSubjectIsSuccess])

	return (
		<ul className='overflow-auto w-full h-[70vh] rounded-xl custom-scrollbar p-4 pb-20'>
			<OptimisticSubjects />
			{subjectsArray?.map((subject, idx) => (
				<AdminSubjectCard
					onOpenEditTools={onOpenEditTools}
					onCloseEditTools={onCloseEditTools}
					visibleIdx={visibleIdx}
					key={idx}
					currentIdx={idx}
					className='mt-2 mb-2'
					title={subject.title}
					onDelete={() => deleteSubject(subject.id)}
					onEdit={(title: string) =>
						editSubject({ id: subject.id, title: title })
					}
				/>
			))}
			{children}
		</ul>
	)
}
