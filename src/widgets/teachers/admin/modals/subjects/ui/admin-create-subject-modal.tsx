import { isAddSubjectModalVisibleAtom } from '@/app/store/subjects-table.store'
import { AdminCreateSubjectForm } from '@/features/subjects/admin/segments/forms'
import { BasicModal } from '@/shared/ui/modal/basic-modal'
import { useAtom } from 'jotai'

export function AdminCreateSubjectModal() {
	const [isVisible, setIsVisible] = useAtom(isAddSubjectModalVisibleAtom)

	return (
		<BasicModal
			isVisible={isVisible}
			onClose={() => setIsVisible(false)}
			title='Добавление'
		>
			<AdminCreateSubjectForm />
		</BasicModal>
	)
}
