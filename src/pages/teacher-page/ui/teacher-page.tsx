import { useEffect, useRef, useState } from 'react'
import { MesssageForm } from '../../../features/message'
import { RatingForm } from '../../../features/rating-form'
import {
	createTeacherReviewSchema,
	ITeacherReview,
	TeacherInfo,
} from '../../../shared'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { MessageList } from '../../../entities/message'
import { usePostReview } from '../../../shared/api/queries/review.queries'
import { IPostTeacherReview } from '../../../shared/model/interfaces/teacher-review.interface'

export function TeacherPage() {
	const [inputHeight, setInputHeight] = useState<number>(0)
	const contentRef = useRef<HTMLDivElement | null>(null)
	const prevHeightRef = useRef<number>(0)

	const [isTextareaTuched, setIsTextareaTuched] = useState<boolean>(false)

	const handleTextareaTouch = () => {
		if (!isTextareaTuched) {
			setIsTextareaTuched(true)
			prevHeightRef.current = inputHeight
		}
	}

	useEffect(() => {
		if (
			contentRef.current &&
			prevHeightRef.current !== inputHeight &&
			isTextareaTuched
		) {
			const { scrollTop } = contentRef.current

			contentRef.current.scrollTo({
				top: scrollTop + (inputHeight - prevHeightRef.current), //прокрутить на то ,что изменилось
				behavior: 'smooth',
			})
			prevHeightRef.current = inputHeight
		}
	}, [inputHeight, isTextareaTuched])

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		watch,
		setValue,
	} = useForm<Omit<IPostTeacherReview, 'teacherId'>>({
		resolver: yupResolver(createTeacherReviewSchema),
	})

	const onSubmit: SubmitHandler<Omit<IPostTeacherReview, 'teacherId'>> = data =>
		console.log('data = ', data)

	useEffect(() => {
		if (
			errors.experienced ||
			errors.freebie ||
			errors.frinedliness ||
			errors.smartless ||
			errors.strictness
		)
			if (contentRef.current)
				contentRef.current.scrollTo({
					top: 0,
					behavior: 'smooth',
				})
		console.log('errors =', errors)
	}, [errors])

	const {
		postReview,
		postReviewIsLoading,
		postReviewIsSuccess,
		postReviewIsError,
	} = usePostReview()

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div
				className='w-screen sm:w-[90vw] lg:w-[1000px] h-screen bg-zinc-600 flex flex-col gap-4 items-center justify-start sm:rounded-xl sm:border-4 sm:border-zinc-500 relative'
				style={{ paddingBottom: `${inputHeight}px` }}
			>
				<div
					ref={contentRef}
					className='w-full h-full flex flex-col gap-4 items-center justify-start custom-scrollbar rounded-scrollbar overflow-y-auto'
				>
					<TeacherInfo rating={3} imgSrc='/undefined-person-icon.jpg' />
					<RatingForm
						errors={errors}
						watch={watch}
						register={register}
						setValue={setValue}
					/>
					{/* <div className='w-full px-2 mt-2'>
						<div className='w-full bg-zinc-500 rounded-2xl h-1'></div>
					</div> */}
					<MessageList className='mt-10' />
				</div>
			</div>
			<MesssageForm
				onTextAreaTouch={handleTextareaTouch}
				control={control}
				onHeightChange={height => setInputHeight(height)}
				errors={errors}
				className='bottom-0 fixed w-full sm:w-[90vw] lg:w-[1000px] sm:border-zinc-500 sm:border-x-4 sm:border-b-4 sm:rounded-b-xl pb-4 pt-2 px-2 sm:px-5'
			/>
		</form>
	)
}
