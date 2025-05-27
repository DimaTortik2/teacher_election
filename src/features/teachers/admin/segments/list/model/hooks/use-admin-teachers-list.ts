
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

	const handleEdit = (id: string) => {
		setEditModalIsVisible(true)
		setSelectedTeacherId(id)
	}

	const handleDelete = (id: string) => {
		setDeleteModalIsVisible(true)
		setSelectedTeacherId(id)
	}

	return {
		handleEdit,
		handleDelete,
	}
}
