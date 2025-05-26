import { useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/shared/ui/buttons/button'
import ClearIcon from '@mui/icons-material/Clear'
import { RatingForm } from './rating-input'
import { MessageInput } from './review-input'
import { SendIcon } from '@/shared/ui/icons/send-icon'
import { IconButton } from '@/shared/ui/icons/icon-button'
import { FormLayout } from './layout'
import { createTeacherReviewSchema } from '../model/schemas/create-review.schema'
import { usePostReview } from '@/features/reviews/api/queries/reviews.queries'
import { IPostTeacherReview } from '../model/interfaces/reviews.interface'

interface IProps {
	id: string | undefined
	isVisible: boolean
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function CreateReviewForm({ id, isVisible, setIsVisible }: IProps) {
	const [isInputVisible, setIsInputVisible] = useState<boolean>(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		control,
		setValue,
		reset,
	} = useForm<Omit<IPostTeacherReview, 'teacherId'>>({
		resolver: zodResolver(createTeacherReviewSchema),
	})

	const { postReview } = usePostReview(id)

	const onSubmit = (data: Omit<IPostTeacherReview, 'teacherId'>) => {
		if (id) {
			postReview({
				...data,
				teacherId: id,
			})
		}
	}

	const handleFormSubmit: SubmitHandler<
		Omit<IPostTeacherReview, 'teacherId'>
	> = data => {
		if (id) {
			const preparedData = {
				...data,
				message: data.message === '' || !isInputVisible ? null : data.message,
			}
			onSubmit(preparedData)
			setIsInputVisible(false)
			setIsVisible(false)
			reset()
		} else {
			console.log('no id? can not post review')
		}
	}

	const resetFormState = () => {
		setIsInputVisible(false)
		setIsVisible(false)
		setValue('message', '')
		reset()
	}

	const handleInputCrossBtn = () => {
		setIsInputVisible(false)
	}
	const handleSendBtn = async () => {
		console.log({ errors })
	}

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<FormLayout isVisible={isVisible}>
				{isVisible && (
					<div className='w-full'>
						<div className='w-full flex justify-end'>
							<IconButton icon={<ClearIcon />} onClick={resetFormState} />
						</div>
						<div className='w-full flex justify-between items-end mb-2'>
							<RatingForm
								errors={errors}
								watch={watch}
								register={register}
								setValue={setValue}
							/>
							<Button
								type='submit'
								className='flex items-center justify-center px-2 py-2'
								onClick={handleSendBtn}
							>
								<SendIcon className='bg-theme-600 hover:bg-theme-500 h-14 w-14' />
							</Button>
						</div>
						{!isInputVisible && (
							<Button
								type='button'
								className='w-full bg-theme-600 hover:bg-theme-500 transition-colors'
								onClick={() => setIsInputVisible(true)}
							>
								Добавить коммент
							</Button>
						)}
					</div>
				)}

				{isInputVisible && (
					<>
						<div className='w-full flex justify-between gap-3'>
							<p className=' sm:text-xl text-lg'>Оставьте мнение</p>
							<span className='text-zinc-400 sm:text-lg text-base text-center'>
								Ваша запись пройдет модерацию
							</span>
						</div>
						<div className='flex items-end pt-2 w-full'>
							<div className='border-b-theme-400 border-b-2 px-1 w-full'>
								<MessageInput
									errorMessage={errors.message?.message}
									control={control}
								/>
							</div>
							<IconButton icon={<ClearIcon />} onClick={handleInputCrossBtn} />
						</div>
					</>
				)}
			</FormLayout>
		</form>
	)
}
