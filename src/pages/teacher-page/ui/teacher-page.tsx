import { useParams } from 'react-router'
import { ReviewForm } from '../../../widgets/review'
import { TeacherInfo } from '../../../shared/ui/teacher/teacher-info'
import {
	ReviewList,
	useGetReviews,
	useHeightControl,
} from '../../../features/review'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export function TeacherPage() {
	const { id } = useParams()
	const teacherId = id ?? ''

	const [inputHeight, setInputHeight] = useState<number>(0)
	const handleHeightChange = (height: number) => {
		setInputHeight(height)
	}

	const { contentRef, handleTextareaTouch, formRef } = useHeightControl({
		handleHeightChange,
		inputHeight,
	})

	const {
		data,
		getReviewIsSuccess,
		hasNextPage,
		refetchReviews,
		fetchNextPage,
	} = useGetReviews(teacherId)

	useEffect(() => {
		if (getReviewIsSuccess) {
			console.log(
				'reviews data =',
				data?.pages.flatMap(el => el.data).flatMap(el => el.message)
			)
		}
	}, [data, getReviewIsSuccess])

	const [ref, inView] = useInView()
	useEffect(() => {
		if (inView && hasNextPage) {
			console.log('inview')
			fetchNextPage()
		}
	}, [inView, fetchNextPage, hasNextPage])

	const handleSubmit = () => {
		console.log('ve here')
		refetchReviews()
	}

	const messageDatas = data?.pages.flatMap(el => el.data)
	console.log('data=', data)

	return (
		<div
			className={`w-screen sm:w-[90vw] lg:w-[1000px] h-screen justify-start sm:rounded-xl bg-[url('/back.svg')] bg-no-repeat bg-center bg-cover`}
		>
			<div
				className='w-full h-full flex flex-col gap-4 items-center justify-start sm:rounded-xl sm:border-4 sm:border-zinc-500 relative '
				style={{ paddingBottom: `${inputHeight}px` }}
			>
				<div
					ref={contentRef}
					className='w-full h-full flex flex-col gap-4 items-center justify-start custom-scrollbar rounded-scrollbar overflow-y-auto'
				>
					<TeacherInfo id={id} defaultImgSrc='/undefined-person-icon.jpg' />
					{data && (
						<ReviewList messages={messageDatas} className='mt-10'>
							<li ref={ref}>⠀</li>
						</ReviewList>
					)}
				</div>
			</div>
			<ReviewForm
				onSubmit={handleSubmit}
				id={id}
				onTextAreaTouch={handleTextareaTouch}
				formRef={formRef}
			/>
		</div>
	)
}
