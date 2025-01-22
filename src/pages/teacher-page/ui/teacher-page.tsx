import { useEffect, useRef, useState } from 'react'
import { MesssageForm } from '../../../features/message'
import { RatingForm } from '../../../features/rating-form'
import { ITeacherReview, TeacherInfo } from '../../../shared'
import { SubmitHandler, useForm } from 'react-hook-form'

export function TeacherPage() {
	const [inputHeight, setInputHeight] = useState<number>(0)
	const contentRef = useRef<HTMLDivElement | null>(null)
	const prevHeightRef = useRef<number>(0)
	const isUserAtBottom = useRef<boolean>(false)

	const [isTextareaTuched, setIsTextareaTuched] = useState<boolean>(false)

	const handleTextareaTouch = () => {
		if (!isTextareaTuched) {
			setIsTextareaTuched(true)
			prevHeightRef.current = inputHeight
		}
	}

	// Определяем, внизу ли прокрутка
	useEffect(() => {
		if (contentRef.current) {
			const { scrollHeight, clientHeight, scrollTop } = contentRef.current
			isUserAtBottom.current = scrollHeight - scrollTop === clientHeight
		}
	}, [])

	useEffect(() => {
		if (
			contentRef.current &&
			prevHeightRef.current !== inputHeight &&
			isTextareaTuched
		) {
			const { scrollHeight, clientHeight, scrollTop } = contentRef.current

			if (isUserAtBottom.current) {
				contentRef.current.scrollTo({
					top: scrollHeight - clientHeight, //прокрутить на то ,что невидимо
					behavior: 'smooth',
				})
			} else {
				contentRef.current.scrollTo({
					top: scrollTop + (inputHeight - prevHeightRef.current), //прокрутить на то ,что изменилось
					behavior: 'smooth',
				})
			}
			prevHeightRef.current = inputHeight
		}
	}, [inputHeight, isTextareaTuched])

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		watch,
	} = useForm<ITeacherReview>()

	const onSubmit: SubmitHandler<ITeacherReview> = data =>
		console.log('data = ', data)

			console.log('prevHeight2', prevHeightRef.current)


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
					<RatingForm />
					<RatingForm />
					<RatingForm />
					<RatingForm />
					<RatingForm />
					<RatingForm />
					<RatingForm />
					<RatingForm />
					<p>123</p>
				</div>
			</div>
			<MesssageForm
				onTextAreaTouch={handleTextareaTouch}
				control={control}
				register={register}
				onHeightChange={height => setInputHeight(height)}
				className='bottom-0 fixed w-full sm:w-[90vw] lg:w-[1000px] sm:border-zinc-500 sm:border-x-4 sm:border-b-4 sm:rounded-b-xl pb-4 pt-2 px-2 sm:px-5'
			/>
		</form>
	)
}
