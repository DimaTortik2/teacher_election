import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useGetTeachers } from '../../../shared/api/queries/teachers.queries'
import {
	useDeleteTeacher,
	useEditTeacher,
	usePostTeacher,
} from '../api/queries/teachers.queries'

export function useAdminTeachers() {
	const { data, hasNextPage, refetchTeachers, fetchNextPage } = useGetTeachers()
	const { postTeacher, postTeacherIsSuccess } = usePostTeacher()
	const { editTeacher } = useEditTeacher()
	const { deleteTeacher, deleteTeacherIsSuccess } = useDeleteTeacher()

	useEffect(() => {
		if (deleteTeacherIsSuccess || postTeacherIsSuccess) {
			refetchTeachers()
		}
	}, [deleteTeacherIsSuccess, postTeacherIsSuccess, refetchTeachers])

	const [ref, inView] = useInView()
	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage()
		}
	}, [inView, fetchNextPage, hasNextPage])

	return {
		data,
		hasNextPage,
		fetchNextPage,
		postTeacher,
		postTeacherIsSuccess,
		ref,
		inView,
		editTeacher,
		deleteTeacher,
	}
}
