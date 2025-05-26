import { useParams } from 'react-router'
import clsx from 'clsx'
import { Layout } from './layout'
import { TeacherHeader } from '@/widgets/teachers'
import { ReviewFilterSlider } from '@/features/reviews/segments/filter'
import { ReviewList } from '@/features/reviews/segments/list'
import { CreateReviewButton } from '@/features/reviews/segments/create-form'
import { TeacherInfo } from '@/features/teachers/segments/info'
import { useStickyHeader } from '@/shared/model/hooks/sticky-header/use-sticky-header'

export function TeacherPage() {
	const { isScrolled, scrollContainerRef } = useStickyHeader()

	const { id } = useParams()
	const teacherId = id ?? ''

	return (
		<Layout
			ref={scrollContainerRef}
			header={
				<TeacherHeader
					TeacherInfo={
						<TeacherInfo
							id={id}
							className='bg-zinc-600 border-solid border-b-2 border-zinc-500 shadow-lg'
							isSticky={isScrolled}
						/>
					}
					isSticky={isScrolled}
					ReviewFilterSlider={
						<ReviewFilterSlider className='w-full border-b-4 rounded-2xl border-zinc-700 h-[50px]' />
					}
				/>
			}
			list={
				<ReviewList
					className={clsx('pb-20', isScrolled && 'pt-[235px]')} // 350(teacherInfo - 300px + reviewFilter - 50px) - 115px(teacherInfoMinimaze - 65px ,reviewFilter - 50px)
					id={teacherId}
				/>
			}
			form={<CreateReviewButton id={id} />}
		/>
	)
}
