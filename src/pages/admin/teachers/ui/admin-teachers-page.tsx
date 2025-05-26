import { Layout } from '../../ui/layout'
import { AdminTeachersList } from '@/features/teachers/admin/segments/list'
import {
	AdminCreateTeacherModal,
	AdminEditTeacherModal,
} from '@/widgets/teachers/admin/modals/teachers'
import { AdminDeleteTacherModal } from '@/widgets/teachers/admin/modals/teachers/ui/admin-delete-teacher-modal'
import { useSetAtom } from 'jotai'
import { isAddTeacherModalVisibleAtom } from '@/app/store/admin-teachers.store'

export function AdminTeachersPage() {
	const setAddTeacherFormIsVisible = useSetAtom(isAddTeacherModalVisibleAtom)

	return (
		<Layout text='Управление учителями' className='p-2'>
			<button
				onClick={() => setAddTeacherFormIsVisible(prev => !prev)}
				className='mb-2 py-4 w-full rounded-2xl bg-zinc-700 hover:bg-zinc-500 transition-colors'
			>
				Добавить учителя
			</button>

			<AdminTeachersList />

			<AdminCreateTeacherModal />
			<AdminEditTeacherModal />
			<AdminDeleteTacherModal />
		</Layout>
	)
}
