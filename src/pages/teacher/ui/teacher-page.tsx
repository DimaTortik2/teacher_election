import { useParams } from 'react-router'
import { Layout } from './layout'
import { ReviewList } from '@/features/reviews/segments/list'
import { CreateReviewButton } from '@/features/reviews/segments/create-form'
import { useStickyHeader } from '@/pages/teacher/model/hooks/use-sticky-header'
import {
	TeacherHeader,
	TeacherStickyHeader,
} from '@/widgets/teachers/segments/headers'

export function TeacherPage() {
	const { isScrolled, scrollContainerRef } = useStickyHeader(400)

	const { id } = useParams()
	const teacherId = id ?? ''

	return (
		<Layout
			ref={scrollContainerRef}
			headers={[
				<TeacherHeader id={teacherId} />,
				<TeacherStickyHeader id={teacherId} isScrolled={isScrolled} />,
			]}
			list={<ReviewList className='pb-20' id={teacherId} />}
			form={<CreateReviewButton id={id} />}
		/>
	)
}
