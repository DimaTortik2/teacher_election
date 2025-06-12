import { ICreateTeacherForm } from '../../../model/interfaces/admin-teacher.interface'

export function formatCreateData({
	fullName,
	file,
	selectedSubjects,
}: ICreateTeacherForm) {
	return {
		fullName,
		subjectIds: selectedSubjects.map(subject => subject.id), // только сейчас один предмет на бэкэнде
		file: file ? file[0] : null,
	}
}
