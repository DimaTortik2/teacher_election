import { ISelectedSubjects } from '@/features/teachers/admin/model/interfaces/admin-teacher.interface'

export function isSelected({
	selectedSubjects,
	id,
}: {
	selectedSubjects: ISelectedSubjects
	id: string
}) {
	return selectedSubjects.some(s => s.id === id)
}
