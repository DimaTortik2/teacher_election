import { SettingsButton } from '../../../widgets/settings'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { TeacherFilter } from '../../../widgets/teachers/ui/teachers-filter'
import { useGetTeachers } from '../../../shared/api/queries/teachers.queries'
import { TeacherCardList } from '../../../features/teachers'

export function TeachersPage() {
	const { data, getTeachersIsSuccess, hasNextPage, fetchNextPage } =
		useGetTeachers()

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
				<SettingsButton />
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
