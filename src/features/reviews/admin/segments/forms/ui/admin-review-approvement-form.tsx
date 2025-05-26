import { ModalBottomButton } from '@/shared/ui/buttons/modal-bottom-button'
import { Review } from '@/entities/review'
import { useAtomValue } from 'jotai'
import { currentApprovementAtom } from '@/app/store/reviews-approvement.store'

export function AdminReviewApprovementForm() {
	const approvement = useAtomValue(currentApprovementAtom)
	if (!approvement) return <></>

	const buttonText = {
		unapprove: 'Отклонить',
		approve: 'Принять',
	}[approvement.type]

	const buttonStyle = {
		unapprove: 'bg-red-300 hover:bg-red-400',
		approve: 'bg-green-400 hover:bg-green-300',
	}[approvement.type]

	const approve = (id: string) => {
		console.log('approved ', id)
	}

	const unapprove = (id: string) => {
		console.log('unapproved ', id)
	}

	const handleApprovement = () => {
		if (approvement) {
			const f = {
				approve: approve,
				unapprove: unapprove,
			}[approvement.type]

			f(approvement.id)
		}
	}

	return (
		<>
			<div className='h-[70vh] w-full sm:w-[90vw] custom-scrollbar rounded-scrollbar overflow-auto overflow-x-hidden pb-5'>
				<Review
					className='bg-zinc-700'
					actions={null}
					text={approvement.text}
				/>
			</div>

			<ModalBottomButton onClick={handleApprovement} className={buttonStyle}>
				{buttonText}
			</ModalBottomButton>
		</>
	)
}
