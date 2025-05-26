import { isEditTeacherModalVisibleAtom } from '@/app/store/admin-teachers.store'
import { AdminEditTeacherForm } from '@/features/teachers/admin/segments/forms'
import { BasicModal } from '@/shared/ui/modal/basic-modal'
import { useAtom } from 'jotai'

export function AdminEditTeacherModal() {
	const [isVisible, setIsVisible] = useAtom(isEditTeacherModalVisibleAtom)
	return (
		<BasicModal
			title={'добавление'}
			isVisible={isVisible}
			onClose={() => setIsVisible(false)}
		>
			<AdminEditTeacherForm />
		</BasicModal>
	)
}
