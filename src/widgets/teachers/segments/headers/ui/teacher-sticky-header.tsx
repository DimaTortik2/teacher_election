import { ReviewFilterSlider } from '@/features/reviews/segments/filter'
import { TeacherStickyInfo } from '@/features/teachers/segments/info'
import clsx from 'clsx'

export function TeacherStickyHeader({
	id,
	isScrolled,
}: {
	id: string
	isScrolled: boolean
}) {
	return (
		<div
			className={clsx(
				'w-full max-w-[1000px] flex flex-col  z-40 h-[115px] fixed top-0 transition-transform duration-100',
				isScrolled ? 'translate-y-0' : '-translate-y-full'
			)}
		>
			<TeacherStickyInfo
				id={id}
				className='bg-zinc-600 border-solid border-b-[1px] border-zinc-400 shadow-lg'
			/>
			<ReviewFilterSlider className='bg-zinc-600 w-full border-b-4 border-zinc-700 h-[50px]' />
		</div>
	)
}
