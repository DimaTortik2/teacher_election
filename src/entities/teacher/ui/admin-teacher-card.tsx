import clsx from 'clsx'
import editIcon from '../../../../public/edit-icon.svg'
import { CrossIcon } from '../../../shared/ui/icons'

interface IProps {
	teacherName: string
	className?: string
	onDelete: () => void
	onEdit: () => void
}

export function AdminTeacherCard({
	teacherName,
	className,
	onDelete,
	onEdit,
}: IProps) {
	return (
		<li
			className={clsx(
				className,
				'py-4 px-4 bg-zinc-700 transition-colors text-white rounded-xl text-xl w-full flex justify-between'
			)}
		>
			<div className='w-4/6 my-wrap-text'>{teacherName}</div>

			<div className='flex gap-3'>
				<button onClick={onEdit}>
					<img src={editIcon} className='h-8' />
				</button>

				<button onClick={onDelete}>
					<CrossIcon className='h-8 text-theme-500' />
					
				</button>
			</div>
		</li>
	)
}
