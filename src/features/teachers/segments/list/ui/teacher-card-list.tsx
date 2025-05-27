import { SkeletonTeacherCard, TeacherCard } from '@/entities/teacher'
import { ITeacher, useGetTeachers } from '@/features/teachers'
import { TEACHER_IMG } from '@/app/model/constants'
import { InfinityCardList } from '@/shared/ui/list/infinity-card-list'

export function TeacherCardList() {
	const {
		data,
		hasNextPage,
		fetchNextPage,
		getTeachersIsLoading,
		isFetchingNextPage,
	} = useGetTeachers()

	return (
		<InfinityCardList<ITeacher>
			isLoading={getTeachersIsLoading}
			hasNextPage={hasNextPage}
			fetchNextPage={fetchNextPage}
			isFetchingNextPage={isFetchingNextPage}
			items={data}
			SkeletonComponent={SkeletonTeacherCard}
			renderItem={teacher => (
				<TeacherCard
					key={teacher.id}
					imgSrc={TEACHER_IMG.base + teacher.photo}
					teacherName={teacher.fullName}
					teacherId={teacher.id}
					avgRating={teacher.avgRating}
					subject={'пофикси на бэке'}
				/>
			)}
		/>
	)
}
