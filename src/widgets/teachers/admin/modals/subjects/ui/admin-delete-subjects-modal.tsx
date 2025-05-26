import { isDeleteSubjectModalVisibleAtom } from '@/app/store/subjects-table.store'
import {  AdminDeleteSubjectsForm } from '@/features/subjects/admin/segments/forms'
import { BasicModal } from '@/shared/ui/modal/basic-modal'
import { useAtom } from 'jotai'

export function AdminDeleteSubjectsModal() {
	const [isVisible, setIsVisible] = useAtom(isDeleteSubjectModalVisibleAtom)

	return (
		<BasicModal
			isVisible={isVisible}
			onClose={() => setIsVisible(false)}
		>
			<AdminDeleteSubjectsForm />
		</BasicModal>
	)
}
