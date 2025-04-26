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
				'flex flex-col w-full  z-40 h-[350px]', //teacherInfo - 300px + reviewFilter - 50px
				isSticky && 'sticky top-0'
			)}
		>
			{TeacherInfo}
			{ReviewFilterSlider}
		</div>
	)
}
