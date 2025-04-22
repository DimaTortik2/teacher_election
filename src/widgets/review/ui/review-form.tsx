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
	onTextAreaTouch: () => void
	id: string | undefined
	formRef: React.MutableRefObject<HTMLDivElement | null>
	onSubmit: () => void
}

export function ReviewForm({ onTextAreaTouch, id, formRef, onSubmit }: IProps) {
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
				'bg-zinc-600 transition-colors text-white  text-xl flex items-start flex-col',
				'bottom-0 fixed w-full sm:w-[90vw] lg:w-[1000px] border-t-2 border-zinc-500 shadow-soft-up'
			)}
			onSubmit={handleSubmit(handleFormSubmit)}
		>
			<div
				className={clsx(
					'text-xl flex items-start flex-col',
					'w-full sm:w-[90vw] lg:w-[1000px] sm:border-zinc-500 sm:border-x-4 sm:border-b-4 sm:rounded-b-xl pb-4 pt-2 px-2 sm:px-5'
				)}
				ref={formRef}
			>
				{!isRatingVisible && (
					<Button
						className='w-full bg-theme-500'
						onClick={() => setIsRatingVisible(true)}
					>
						Оценить
					</Button>
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
									onTextAreaTouch={onTextAreaTouch}
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
