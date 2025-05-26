import clsx from 'clsx'
import EditIcon from '@mui/icons-material/Edit'
import { IconButton } from '@/shared/ui/icons/icon-button'
import { COLORS } from '@/app/model/style-constants'
import DeleteIcon from '@mui/icons-material/Delete'
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
				'p-2 bg-zinc-700 transition-colors text-white rounded-xl text-xl w-full flex justify-between h-20'
			)}
		>
			<div className='w-4/6 h-full flex items-center'>
				<p className='my-wrap-text'>{teacherName}</p>
			</div>

			<div className='flex justify-center items-center'>
				<IconButton
					icon={<EditIcon sx={{ color: COLORS.gray500 }} />}
					onClick={onEdit}
				/>

				<IconButton
					icon={<DeleteIcon sx={{ color: COLORS.gray500 }} />}
					onClick={onDelete}
				/>
			</div>
		</li>
	)
}
