import { AdminReviewApprovementModal } from '@/widgets/reviews/admin/modals/approvement'
import { Layout } from '../../ui/layout'

import { AdminReviewsApprovementList } from '@/features/reviews/admin/segments/approvement'

export function AdminReviewPage() {
	return (
		<Layout
			text='Управление комментами'
			className='p-2 h-[90vh] custom-scrollbar rounded-scrollbar overflow-auto overflow-x-hidden'
		>
			<AdminReviewsApprovementList />
			<AdminReviewApprovementModal />
		</Layout>
	)
}
