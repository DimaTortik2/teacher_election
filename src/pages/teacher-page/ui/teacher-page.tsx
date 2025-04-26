import { useParams } from 'react-router'
import { ReviewForm } from '../../../widgets/review'
import {
	ReviewFilterSlider,
	ReviewList,
	useGetReviews,
} from '../../../features/review'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { TeacherHeader, TeacherInfo } from '../../../widgets/teachers'
import { useStickyHeader } from '../../../shared/lib/sticky-header'
import clsx from 'clsx'

export function TeacherPage() {
	const { isScrolled, scrollContainerRef } = useStickyHeader()
	console.log({ isScrolled })

	const { id } = useParams()
	const teacherId = id ?? ''

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
			className={`w-screen sm:w-[90vw] lg:w-[1000px] h-screen justify-start sm:rounded-xl bg-zinc-700 cdark-colors-crollbar overflow-y-auto`}
			ref={scrollContainerRef}
		>
			<div className='w-full h-full flex flex-col gap-4 items-center justify-start sm:rounded-xl relative '>
				<div className='w-full flex flex-col items-center justify-start '>
					<TeacherHeader
						TeacherInfo={
							<TeacherInfo
								id={id}
								defaultImgSrc='/undefined-person-icon.jpg'
								className='bg-zinc-600 border-solid border-b-2 border-zinc-500 shadow-lg'
								isSticky={isScrolled}
							/>
						}
						isSticky={isScrolled}
						ReviewFilterSlider={
							<ReviewFilterSlider className='w-full border-b-4 rounded-2xl border-zinc-700 h-[50px]' />
						}
					/>
					{data && (
						<>
							<ReviewList
								className={clsx('pb-20', isScrolled && 'pt-[235px]')} // 350(teacherInfo - 300px + reviewFilter - 50px) - 115px(teacherInfoMinimaze - 65px ,reviewFilter - 50px)
								messages={messageDatas}
							>
								<li ref={ref}>⠀</li>
							</ReviewList>
						</>
					)}
				</div>
			</div>
			<ReviewForm onSubmit={handleSubmit} id={id} />
		</div>
	)
}
