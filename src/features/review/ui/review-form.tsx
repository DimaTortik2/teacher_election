import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import crossIcon from '../../../../public/cross-icon.svg'
import {
	Control,
	FieldErrors,
	UseFormRegister,
	UseFormSetValue,
	UseFormWatch,
} from 'react-hook-form'
import { Button } from '../../../shared'

import { MessageInput } from './message-input'
import { IPostTeacherReview } from '../../../shared/model/interfaces/teacher-review.interface'
import { RatingForm } from './rating-form'

import { SubmitHandler, useForm } from 'react-hook-form'
import { createTeacherReviewSchema } from '../../../shared'
import { yupResolver } from '@hookform/resolvers/yup'

import { usePostReview } from '../../../shared/api/queries/review.queries'

interface IProps {
	onHeightChange: (height: number) => void
	onTextAreaTouch: () => void
	id: string | undefined
}

export function ReviewForm({ onHeightChange, onTextAreaTouch, id }: IProps) {
	const formRef = useRef<HTMLDivElement | null>(null)

	const [isRatingVisible, setIsRatingVisible] = useState<boolean>(false)
	const [isInputVisible, setIsInputVisible] = useState<boolean>(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		control,
		setValue,
	} = useForm<Omit<IPostTeacherReview, 'teacherId'>>({
		resolver: yupResolver(createTeacherReviewSchema),
	})

	const {
		postReview,
		postReviewIsLoading,
		postReviewIsSuccess,
		postReviewIsError,
	} = usePostReview()

	useEffect(() => {
		if (!formRef.current) return
		const observer = new ResizeObserver(() => {
			if (formRef.current && onHeightChange) {
				onHeightChange(formRef.current.offsetHeight)
			}
		})

		observer.observe(formRef.current)
		return () => observer.disconnect()
	}, [onHeightChange])

	useEffect(() => {
		if (postReviewIsSuccess) {
			console.log('postReviewIsSuccess')
		}
	}, [postReviewIsSuccess])

	const onSubmit: SubmitHandler<
		Omit<IPostTeacherReview, 'teacherId'>
	> = data => {
		if (id) {
			postReview({
				...data,
				message: data.message == '' ? undefined : data.message,
				teacherId: id,
			})
			console.log(
				'data = ',
				{
					...data,
					message: data.message == '' ? undefined : data.message,
				},
				'type ',
				typeof data.freebie
			)
		} else {
			console.log('no id? can not post review')
		}
	}

	const handleClose = () => {
		setIsInputVisible(false)
		setIsRatingVisible(false)
	}

	const handleInputClose = () => {
		setIsInputVisible(false)
		setValue('message', '')
	}

	return (
		<form
			className={clsx(
				'bg-zinc-700 transition-colors text-white  text-xl flex items-start flex-col',
				'bottom-0 fixed w-full sm:w-[90vw] lg:w-[1000px]'
			)}
			onSubmit={handleSubmit(onSubmit)}
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
						className='w-full bg-zinc-600'
						onClick={() => setIsRatingVisible(true)}
					>
						Оценить
					</Button>
				)}

				{isRatingVisible && (
					<>
						<button type='button' className=' text-white' onClick={handleClose}>
							<img src={crossIcon} alt='Ок' className='h-8' />
						</button>
						<div className='w-full flex justify-between items-start mb-2'>
							<RatingForm
								errors={errors}
								watch={watch}
								register={register}
								setValue={setValue}
							/>
							<Button
								type='submit'
								className='w-full bg-zinc-600'
								onClick={() => console.log('отправить')}
							>
								Отправить
							</Button>
						</div>
						{!isInputVisible && (
							<Button
								type='button'
								className='w-full bg-zinc-600'
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
							<div className='border-b-zinc-400 border-b-2 px-1 w-full'>
								<MessageInput
									errorMessage={errors.message?.message}
									onTextAreaTouch={onTextAreaTouch}
									control={control}
								/>
							</div>
							<button
								type='button'
								className=' text-white'
								onClick={handleInputClose}
							>
								<img src={crossIcon} alt='Ок' className='h-10' />
							</button>
						</div>
					</>
				)}
			</div>
		</form>
	)
}
