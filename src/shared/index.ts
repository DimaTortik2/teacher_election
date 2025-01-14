export { AuthTitle } from './ui/auth-titles/auth-title'
export { AuthBackLink } from './ui/auth-titles/auth-link'
export { Button } from './ui/button/button'
export { TeacherInfo } from './ui/teacher/teacher-info'
export { BasicModal } from './ui/modal/basic-modal'
export { Notification } from './ui/notification/notification'
export { instance } from './api/api.instance'
export type { ISignUp, ISignIn } from './model/interfaces/auth.interfaces'
export { authService } from './api/services/auth.service'
export { QUERY_KEYS } from './model/constants'
export { usePostSignUp, usePostSignIn } from './api/queries/auth.queries'
export {
	usePostSubject,
	useGetSubjects,
	useDeleteSubject,
} from './api/queries/subject.queries'

export type {
	ISubject,
	ISubjects,
	ISubjectsResponse,
} from './model/interfaces/subject.interfaces'
export { subjectService } from './api/services/subject.service'
export { RoleWrapper } from './ui/wrappers/role-check'
export type { InfinityResponse } from './model/interfaces/infinity.interface'
export {
	useDeleteTeacher,
	useGetTeachers,
	usePostTeacher,
} from './api/queries/teachers.queries'
export type {
	ICreateTeacher,
	ITeacherResponce,
	ITeachers,
	ITeachersResponse,
} from './model/interfaces/teacher.interface'
export type { ITeacherForm } from './model/interfaces/teacher-form.interface'
export { FilePicker } from './ui/file-picker/file-picker'
