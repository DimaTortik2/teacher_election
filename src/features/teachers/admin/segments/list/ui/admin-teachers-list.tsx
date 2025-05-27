import { AdminTeacherCard } from '@/entities/teacher'
import { useAdminTeachersList } from '../model/hooks/use-admin-teachers-list'
import { InfinityList } from '@/shared/ui/list/infinity-list'

import { useGetTeachers } from '@/features/teachers'

export function AdminTeachersList() {
	const { handleEdit, handleDelete } = useAdminTeachersList()

	const {
		data,
		hasNextPage,
		fetchNextPage,
		isFetchingNextPage,
		getTeachersIsLoading,
	} = useGetTeachers()

	return (
		<InfinityList
			fetchNextPage={fetchNextPage}
			hasNextPage={hasNextPage}
			isFetchingNextPage={isFetchingNextPage}
			isLoading={getTeachersIsLoading}
			renderItem={teacher => (
				<AdminTeacherCard
					key={teacher.id}
					className='mt-2 mb-2'
					teacherName={teacher.fullName}
					onDelete={() => handleDelete(teacher.id)}
					onEdit={() => handleEdit(teacher.id)}
				/>
			)}
			items={data}
			className={
				'overflow-auto w-full h-[70vh] rounded-xl custom-scrollbar p-4 pb-20 '
			}
		/>
	)
}
