import clsx from 'clsx'
import { ReactNode } from 'react'

interface IProps {
	ReviewFilterSlider: ReactNode
	TeacherInfo: ReactNode
	isSticky : boolean
}

export function TeacherHeader({ ReviewFilterSlider, TeacherInfo, isSticky }: IProps) {
	return (
		<div
			className={clsx(
				'flex flex-col w-full  z-40 max-[640px]:h-[400px] max-[1024px]:h-[320px] h-[280px]',
				isSticky && 'sticky top-0'
			)}
		>
			{TeacherInfo}
			{ReviewFilterSlider}
		</div>
	)
}
