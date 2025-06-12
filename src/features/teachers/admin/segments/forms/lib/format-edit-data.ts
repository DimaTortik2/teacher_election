import { ITeacher } from '@/features/teachers/model/interfaces/teachers.interface'
import {
	ICreateTeacher,
	ICreateTeacherForm,
} from '../../../model/interfaces/admin-teacher.interface'

export function formatEditData({
	data,
	editData,
}: {
	data?: Partial<ITeacher>
	editData?: Partial<ICreateTeacherForm>
}) {
	const formatedData: Partial<ICreateTeacher> = {}

	if (editData?.file) formatedData.file = editData?.file[0]

	if (editData?.fullName !== data?.fullName)
		formatedData.fullName = editData?.fullName

	if (
		editData?.selectedSubjects
			?.map(sub => sub.id)
			.sort()
			.join(',') !==
		data?.subjects
			?.map(sub => sub.id)
			.sort()
			.join(',')
	)
		formatedData.subjectIds = editData?.selectedSubjects?.map(sub => sub.id)

	console.log({
		formatedData,
	})

	return formatedData
}
