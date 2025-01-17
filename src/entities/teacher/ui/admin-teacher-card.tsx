import clsx from 'clsx'
import crossIcon from '../../../../public/cross-icon.svg'
import editIcon from '../../../../public/edit-icon.svg'

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
					<img src={crossIcon} className='h-8' />
				</button>
			</div>
		</li>
	)
}
