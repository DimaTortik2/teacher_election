import { AdminTeacherCard } from '@/entities/teacher'
import { OptimisticTeachers } from '@/features/optimistic-legacy'
import { useAdminTeachersList } from '../model/hooks/use-admin-teachers-list'

export function AdminTeachersList() {
	const { ref, data, handleEdit, handleDelete } = useAdminTeachersList()

	return (
		<ul className='overflow-auto w-full h-[70vh] rounded-xl custom-scrollbar p-4 pb-20'>
			<OptimisticTeachers />
			{data?.map(teacher => (
				<AdminTeacherCard
					key={teacher.id}
					className='mt-2 mb-2'
					teacherName={teacher.fullName}
					onDelete={() => handleDelete(teacher.id)}
					onEdit={() => handleEdit(teacher.id)}
				/>
			))}
			<li ref={ref}>⠀</li>
		</ul>
	)
}
