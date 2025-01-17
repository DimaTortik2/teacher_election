import { TeacherFilter } from '../../../features/filter'
import { SettingsWidget } from '../../../widgets/settings'
import { TeacherCardList } from '../../../widgets/user'

import { useInView } from 'react-intersection-observer'
import { useGetTeachers } from '../../../shared/api/queries/teachers.queries'
import { ReactNode, useEffect } from 'react'

export function TeachersPage() {
	const {
		data,
		getTeachersIsLoading,
		getTeachersIsSuccess,
		getTeachersIsError,
		hasNextPage,
		isFetchingNextPage,
		refetchTeachers,
		fetchNextPage,
	} = useGetTeachers()

	const [ref, inView] = useInView()
	useEffect(() => {
		if (inView && hasNextPage) {
			console.log('inview')
			fetchNextPage()
		}
	}, [inView, fetchNextPage, hasNextPage])

	if (getTeachersIsSuccess) console.log('teachers = ', data?.pages)
	return (
		<div className='h-full w-full flex flex-col items-center justify-center'>
			<div className='w-full h-16 flex justify-between bg-zinc-800 py-2 relative '>
				<TeacherFilter />
				<SettingsWidget />
			</div>

			{getTeachersIsSuccess && (
				<TeacherCardList teachersArray={data?.pages}>
					<li className='h-1 w-full' ref={ref}>
						⠀
					</li>
				</TeacherCardList>
			)}
		</div>
	)
}
