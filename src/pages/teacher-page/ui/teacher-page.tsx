import { useEffect, useRef, useState } from 'react'
import { MesssageForm } from '../../../features/message'
import { RatingForm } from '../../../features/rating-form'
import { TeacherInfo } from '../../../shared'

export function TeacherPage() {
	const [inputHeight, setInputHeight] = useState<number>(0)
	const contentRef = useRef<HTMLDivElement | null>(null)
	const prevHeightRef = useRef<number>(0)
	const isUserAtBottom = useRef<boolean>(false)

	// Определяем, внизу ли прокрутка
	useEffect(() => {
		if (contentRef.current) {
			const { scrollHeight, clientHeight, scrollTop } = contentRef.current
			isUserAtBottom.current = scrollHeight - scrollTop === clientHeight
		}
	}, [])

	useEffect(() => {
		if (contentRef.current && prevHeightRef.current !== inputHeight) {
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
	}, [inputHeight])

	return (
		<>
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
			{/* Форма, которая изменяет высоту */}
			<MesssageForm
				onHeightChange={height => setInputHeight(height)}
				className='bottom-0 fixed w-full sm:w-[90vw] lg:w-[1000px] sm:border-zinc-500 sm:border-x-4 sm:border-b-4 sm:rounded-b-xl pb-4 pt-2 px-2 sm:px-5'
			/>
		</>
	)
}
