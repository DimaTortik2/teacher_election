import { isAddTeacherModalVisibleAtom } from '@/app/store/admin-teachers.store'
import { AdminCreateTeacherForm } from '@/features/teachers/admin/segments/forms'
import { BasicModal } from '@/shared/ui/modal/basic-modal'
import { useAtom } from 'jotai'

export function AdminCreateTeacherModal() {
	const [isVisible, setIsVisible] = useAtom(isAddTeacherModalVisibleAtom)
	return (
		<BasicModal
			title={'добавление'}
			onClose={() => setIsVisible(false)}
			isVisible={isVisible}
		>
			<AdminCreateTeacherForm />
		</BasicModal>
	)
}
