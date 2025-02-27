import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useGetTeachers } from '../../../shared/api/queries/teachers.queries'
import { usePostTeacher } from '../api/queries/teachers.queries'

export function useAdminTeachers() {
	const { data, hasNextPage, refetchTeachers, fetchNextPage } = useGetTeachers()
	const { postTeacher, postTeacherIsSuccess } = usePostTeacher()
	const [ref, inView] = useInView()

	useEffect(() => {
		if (inView && hasNextPage) {
			console.log('inview')
			fetchNextPage()
		}
		if (postTeacherIsSuccess) {
			refetchTeachers()
			console.log('data', data)
		}
	}, [
		inView,
		fetchNextPage,
		postTeacherIsSuccess,
		refetchTeachers,
		data,
		hasNextPage,
	])

	return {
		data,
		hasNextPage,
		refetchTeachers,
		fetchNextPage,
		postTeacher,
		postTeacherIsSuccess,
		ref,
		inView,
	}
}
