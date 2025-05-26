import { BasicModal } from '@/shared/ui/modal/basic-modal'
import { useAtom } from 'jotai'
import { isApprovementModalVisibleAtom } from '@/app/store/reviews-approvement.store'
import { AdminReviewApprovementForm } from '@/features/reviews/admin/segments/forms'

export function AdminReviewApprovementModal() {
	const [isVisible, setIsVisible] = useAtom(isApprovementModalVisibleAtom)

	return (
		<BasicModal
			isVisible={isVisible}
			onClose={() => setIsVisible(false)}
			title='Подтверждение'
		>
			<AdminReviewApprovementForm />
		</BasicModal>
	)
}
