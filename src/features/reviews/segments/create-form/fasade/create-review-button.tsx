import { Button } from '@/shared/ui/buttons/button'
import { useState } from 'react'
import { FormLayout } from '../ui/layout'
import { CreateReviewForm } from '../ui/create-review-form'

export function CreateReviewButton({ id }: { id: string | undefined }) {
	const [isFormVisible, setIsFormVisible] = useState(false)

	return !isFormVisible ? (
		<FormLayout isVisible={isFormVisible}>
			<div className='w-full flex justify-center'>
				<Button
					className='w-5/6 md:w-2/3 lg:w-1/2 bg-theme-600 hover:bg-theme-500 transition-colors'
					onClick={() => setIsFormVisible(true)}
				>
					Оценить
				</Button>
			</div>
		</FormLayout>
	) : (
		<CreateReviewForm
			key={2}
			id={id}
			isVisible={isFormVisible}
			setIsVisible={setIsFormVisible}
		/>
	)
}
