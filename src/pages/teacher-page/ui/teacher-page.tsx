import { useParams } from 'react-router'
import { Review } from '../../../widgets/review'
import { TeacherInfo } from '../../../shared/ui/teacher/teacher-info'
import { useHeightControl } from '../../../features/review'
import { useState } from 'react'
import { MessageList } from '../../../features/messages'

export function TeacherPage() {
	const { id } = useParams()

	const [inputHeight, setInputHeight] = useState<number>(0)
	const handleHeightChange = (height: number) => {
		setInputHeight(height)
	}

	const { contentRef, handleTextareaTouch, formRef } = useHeightControl({
		handleHeightChange,
		inputHeight,
	})

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
			<Review id={id} onTextAreaTouch={handleTextareaTouch} formRef={formRef} />
		</>
	)
}
