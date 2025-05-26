import { isDeleteTeacherModalVisibleAtom } from '@/app/store/admin-teachers.store'
import { AdminDeleteTeacherForm } from '@/features/teachers/admin/segments/forms'
import { BasicModal } from '@/shared/ui/modal/basic-modal'
import { useAtom } from 'jotai'

export function AdminDeleteTacherModal() {
	const [isVisible, setIsVisible] = useAtom(isDeleteTeacherModalVisibleAtom)

	return (
		<BasicModal
			title='удаление'
			isVisible={isVisible}
			onClose={() => setIsVisible(false)}
		>
			<AdminDeleteTeacherForm />
		</BasicModal>
	)
}
