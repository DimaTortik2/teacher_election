import { AdminLayout } from '../../../widgets/layouts/admin/ui/admin-layout'
import { useInView } from 'react-intersection-observer'
import {
	AdminReviewList,
	AdminReviewModal,
	IReviewSolution,
	useApprove,
	useUnapprove,
} from '../../../features/admin-review'
import { useState } from 'react'
import { ReviewPreview } from '../../../entities/review'

export function AdminReviewPage() {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

	const { approve } =
		useApprove()

	const {
		unapprove,
	} = useUnapprove()

	const [ref] = useInView()

	const [selectedSolution, setSelectedSolution] = useState<IReviewSolution>({
		text: '',
		id: '',
		type: 'deny',
	})

	const handleReviewClick = (solution: IReviewSolution) => {
		setSelectedSolution(prev => ({ ...prev, ...solution }))
		setIsModalVisible(true)
	}

	const handleSubmitClick = () => {
		const f = {
			approve: approve,
			deny: unapprove,
		}[selectedSolution.type]

		f(selectedSolution.id)
	}

	//useAdminReview() ref получать

	return (
		<AdminLayout text='Управление комментами'>
			<div
				className='w-screen md:w-[80vw] h-[90vh]
     bg-zinc-600 flex flex-col items-center justify-start rounded-xl relative border-4 border-zinc-500 p-2 custom-scrollbar rounded-scrollbar overflow-auto overflow-x-hidden'
			>
				<AdminReviewList onReview={handleReviewClick}>
					<li ref={ref}>⠀</li>
				</AdminReviewList>
			</div>

			<AdminReviewModal
				isVisible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
				Onclick={handleSubmitClick}
				solutionType={selectedSolution.type}
			>
				<ReviewPreview text={selectedSolution.text} />
			</AdminReviewModal>
		</AdminLayout>
	)
}
