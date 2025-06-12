import { useGetSubjects } from '@/features/subjects'
import { InfinityList } from '@/shared/ui/list/infinity-list'
import { SubjectItem } from './subject-item'
import clsx from 'clsx'
import {
	ISelectedSubject,
	ISelectedSubjects,
} from '@/features/teachers/admin/model/interfaces/admin-teacher.interface'
import { getUpdatedselectedSubjects } from '../lib/get-updated-selected-subjects'
import { isSelected } from '../lib/is-selected'

export function SubjectsListBox({
	className,
	onChange,
	selectedSubjects,
}: {
	className?: string
	onChange: (value: ISelectedSubjects) => void
	selectedSubjects: ISelectedSubjects
}) {
	const {
		data,
		hasNextPage,
		fetchNextPage,
		getSubjectsIsLoading,
		isFetchingNextPage,
	} = useGetSubjects()

	const handleSubjectItemClick = (subject: ISelectedSubject) => {
		const updatedselectedSubjects = getUpdatedselectedSubjects({
			selectedSubjects,
			subject,
		})
		onChange(updatedselectedSubjects)
	}

	return (
		<InfinityList
			fetchNextPage={fetchNextPage}
			hasNextPage={hasNextPage}
			isFetchingNextPage={isFetchingNextPage}
			isLoading={getSubjectsIsLoading}
			renderItem={subject => (
				<SubjectItem
					key={subject.id}
					title={subject.title}
					onClick={() => handleSubjectItemClick(subject)}
					isSelected={isSelected({ selectedSubjects, id: subject.id })}
				/>
			)}
			items={data}
			className={clsx(
				'text-center custom-scrollbar rounded-scrollbar overflow-auto overflow-x-hidden',
				className
			)}
			loaderSize={10}
		/>
	)
}
