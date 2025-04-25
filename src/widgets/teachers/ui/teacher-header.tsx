import clsx from 'clsx'
import { ReactNode } from 'react'

interface IProps {
	ReviewFilterSlider: ReactNode
	TeacherInfo: ReactNode
}

export function TeacherHeader({ ReviewFilterSlider, TeacherInfo }: IProps) {
	return (
		<div
			className={clsx(
				'flex flex-col w-full sticky top-0 z-50 max-[640px]:h-[400px] max-[1024px]:h-[320px] h-[280px]'
			)}
		>
			{TeacherInfo}
			{ReviewFilterSlider}
		</div>
	)
}
