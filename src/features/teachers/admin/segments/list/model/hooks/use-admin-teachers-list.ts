import { useEffect } from 'react'

import { useGetTeachers } from '@/features/teachers'
import { useInView } from 'react-intersection-observer'
import {
	isDeleteTeacherModalVisibleAtom,
	isEditTeacherModalVisibleAtom,
	selectedTeacherIdAtom,
} from '@/app/store/admin-teachers.store'
import { useSetAtom } from 'jotai'

export function useAdminTeachersList() {
	const setSelectedTeacherId = useSetAtom(selectedTeacherIdAtom)

	const setEditModalIsVisible = useSetAtom(isEditTeacherModalVisibleAtom)

	const setDeleteModalIsVisible = useSetAtom(isDeleteTeacherModalVisibleAtom)

	const [ref, inView] = useInView()
	const { data, hasNextPage, fetchNextPage } = useGetTeachers()

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage()
		}
	}, [inView, fetchNextPage, hasNextPage])

	const handleEdit = (id: string) => {
		setEditModalIsVisible(true)
		setSelectedTeacherId(id)
	}

	const handleDelete = (id: string) => {
		setDeleteModalIsVisible(true)
		setSelectedTeacherId(id)
	}

	return {
		ref,
		data,
		handleEdit,
		handleDelete,
	}
}
