import {
	ISelectedSubject,
	ISelectedSubjects,
} from '@/features/teachers/admin/model/interfaces/admin-teacher.interface'

export function getUpdatedselectedSubjects({
	selectedSubjects,
	subject,
}: {
	selectedSubjects: ISelectedSubjects
	subject: ISelectedSubject
}) {
	const isSelected = selectedSubjects.some(s => s.id === subject.id)
	const updatedselectedSubjects = isSelected
		? selectedSubjects.filter(s => s.id !== subject.id)
		: [...selectedSubjects, { id: subject.id, title: subject.title }]
	return updatedselectedSubjects
}
