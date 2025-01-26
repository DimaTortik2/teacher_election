import { useEffect, useRef, useState } from 'react'
import { ReviewForm } from '../../../features/review'
import { TeacherInfo } from '../../../shared'
import { MessageList } from '../../../entities/message'
import { useParams } from 'react-router'

export function TeacherPage() {
	const [inputHeight, setInputHeight] = useState<number>(0)
	const contentRef = useRef<HTMLDivElement | null>(null)
	const prevHeightRef = useRef<number>(0)

	const [isTextareaTuched, setIsTextareaTuched] = useState<boolean>(false)

	const { id } = useParams()

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
					<TeacherInfo id={id} rating={3} imgSrc='/undefined-person-icon.jpg' />
					<MessageList className='mt-10' />
				</div>
			</div>
			<ReviewForm
				id={id}
				onTextAreaTouch={handleTextareaTouch}
				onHeightChange={height => setInputHeight(height)}
			/>
		</>
	)
}
