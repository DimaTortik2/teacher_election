import { COLORS } from '@/app/model/style-constants'
import Checkbox from '@mui/material/Checkbox'
import clsx from 'clsx'

export function SubjectItem({
	title,
	onClick,
	isSelected,
}: {
	title: string
	onClick: () => void
	isSelected: boolean
}) {
	return (
		<li
			className={clsx(
				'p-2 cursor-pointer hover:bg-theme-500 transition-colors my-wrap-text w-full my-1',
				isSelected && 'bg-theme-800'
			)}
			onClick={onClick}
		>
			<div className='w-full flex justify-between pl-2'>
				<span>{title}</span>
				<Checkbox
					sx={{
						color: COLORS.gray800,
						'&.Mui-checked': {
							color: COLORS.gray400,
						},
					}}
					checked={isSelected}
				/>
			</div>
		</li>
	)
}
