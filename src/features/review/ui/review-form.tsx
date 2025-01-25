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
import { Button, ITeacherReview } from '../../../shared'

import { MessageInput } from './message-input'
import { IPostTeacherReview } from '../../../shared/model/interfaces/teacher-review.interface'
import { RatingForm } from './rating-form'

interface IProps {
	className?: string
	onHeightChange: (height: number) => void
	control: Control<Omit<IPostTeacherReview, 'teacherId'>>
	onTextAreaTouch: () => void
	errors: FieldErrors<ITeacherReview>
	watch: UseFormWatch<Omit<IPostTeacherReview, 'teacherId'>>
	register: UseFormRegister<Omit<IPostTeacherReview, 'teacherId'>>
	setValue: UseFormSetValue<Omit<IPostTeacherReview, 'teacherId'>>
}

export function ReviewForm({
	className,
	onHeightChange,
	control,
	onTextAreaTouch,
	errors,
	watch,
	register,
	setValue,
}: IProps) {
	const formRef = useRef<HTMLDivElement | null>(null)

	const [isRatingVisible, setIsRatingVisible] = useState<boolean>(false)
	const [isInputVisible, setIsInputVisible] = useState<boolean>(false)

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

	return (
		<div
			ref={formRef}
			className={clsx(
				'bg-zinc-700 transition-colors text-white  text-xl flex items-start flex-col',
				className
			)}
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
							onClick={() => setIsInputVisible(false)}
						>
							<img src={crossIcon} alt='Ок' className='h-10' />
						</button>
					</div>
				</>
			)}
		</div>
	)
}
