import clsx from 'clsx'
import { useState } from 'react'
import { MessageInput } from '../../../features/review/ui/review-input'
import { RatingForm } from '../../../features/review/ui/rating-form'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../../../shared/ui/buttons-links/button'
import {
	createTeacherReviewSchema,
	IPostTeacherReview,
	usePostReview,
} from '../../../features/review'
import { CrossIcon, SendIcon } from '../../../shared/ui/icons'

interface IProps {
	id: string | undefined
	onSubmit: () => void
}

export function ReviewForm({ id, onSubmit }: IProps) {
	const [isRatingVisible, setIsRatingVisible] = useState<boolean>(false)
	const [isInputVisible, setIsInputVisible] = useState<boolean>(false)

	const { postReview } = usePostReview()

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		control,
		setValue,
		reset,
	} = useForm<Omit<IPostTeacherReview, 'teacherId'>>({
		resolver: yupResolver(createTeacherReviewSchema),
	})

	const handleFormSubmit: SubmitHandler<
		Omit<IPostTeacherReview, 'teacherId'>
	> = data => {
		if (id) {
			postReview({
				...data,
				message:
					data.message == '' || isInputVisible === false ? null : data.message,
				teacherId: id,
			})
			onSubmit()
			setIsInputVisible(false)
			setIsRatingVisible(false)
			reset()
		} else {
			console.log('no id? can not post review')
		}
	}

	const resetFormState = () => {
		setIsInputVisible(false)
		setIsRatingVisible(false)
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
		<form
			className={clsx(
				'bg-zinc-700 text-white text-xl flex items-start flex-col',
				'bottom-0 fixed w-full sm:w-[90vw] lg:w-[1000px] z-30'
			)}
			onSubmit={handleSubmit(handleFormSubmit)}
		>
			<div
				className={clsx(
					'text-xl flex items-start flex-col',
					'w-full sm:w-[90vw] lg:w-[1000px] sm:rounded-b-xl py-2 px-2 sm:px-5 ',
					'border-t-2 border-t-zinc-500'
				)}
			>
				{!isRatingVisible && (
					<div className='w-full flex justify-center'>
						<Button
							className='w-5/6 md:w-2/3 lg:w-1/2 bg-theme-600'
							onClick={() => setIsRatingVisible(true)}
						>
							Оценить
						</Button>
					</div>
				)}

				{isRatingVisible && (
					<>
						<button
							type='button'
							className=' text-white'
							onClick={resetFormState}
						>
							<CrossIcon className='h-8' />
						</button>
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
								<SendIcon className='bg-theme-500 h-14 w-14' />
							</Button>
						</div>
						{!isInputVisible && (
							<Button
								type='button'
								className='w-full bg-theme-500'
								onClick={() => setIsInputVisible(true)}
							>
								Добавить коммент
							</Button>
						)}
					</>
				)}

				{isInputVisible && (
					<>
						<div className='w-full flex justify-between gap-3'>
							<p className=' sm:text-xl text-lg'>Оставьте мнение</p>
							<span className='text-zinc-400 sm:text-lg text-base text-center'>
								Ваша запись пройдет модерацию
							</span>
						</div>
						<div className='flex gap-3 items-end pt-2 w-full'>
							<div className='border-b-theme-400 border-b-2 px-1 w-full'>
								<MessageInput
									errorMessage={errors.message?.message}
									control={control}
								/>
							</div>
							<button
								type='button'
								className='flex items-center justify-center'
								onClick={handleInputCrossBtn}
							>
								<CrossIcon className='h-10 bg-theme-500' />
							</button>
						</div>
					</>
				)}
			</div>
		</form>
	)
}
