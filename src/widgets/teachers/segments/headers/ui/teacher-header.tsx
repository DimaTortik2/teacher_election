import { ReviewFilterSlider } from '@/features/reviews/segments/filter'
import { TeacherInfo } from '@/features/teachers/segments/info'
import clsx from 'clsx'

export function TeacherHeader({ id }: { id: string }) {
	return (
		<div className={clsx('flex flex-col w-full z-40 ')}>
			<TeacherInfo
				id={id}
				className='bg-zinc-600 border-solid border-b-2 border-zinc-500 shadow-lg'
			/>
			<ReviewFilterSlider className='w-full bg-zinc-600 border-b-4  border-zinc-700 h-[50px]' />
		</div>
	)
}
