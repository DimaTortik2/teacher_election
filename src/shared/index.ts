export { AuthTitle } from './ui/auth-title/auth-title'
export { Button } from './ui/button/button'
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
