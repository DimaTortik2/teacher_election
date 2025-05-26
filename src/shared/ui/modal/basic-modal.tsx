import clsx from 'clsx'
import { ReactNode } from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import { Modal } from '@mui/material'
import { IconButton } from '@/shared/ui/icons/icon-button'

interface IProps {
	children: ReactNode
	className?: string
	onClose: () => void
	title?: string
	isVisible: boolean
}

export function BasicModal({
	children,
	className,
	onClose,
	title,
	isVisible,
}: IProps) {
	return (
		<Modal
			open={isVisible}
			onClose={onClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
			className=' flex items-center justify-center bg-[rgba(0,0,0,0.8)] text-white'
		>
			<div
				className={clsx('bg-zinc-700 rounded-2xl flex flex-col', className)}
				onClick={e => e.stopPropagation()}
			>
				<div
					className={clsx(
						'w-full flex  border-b-2 border-zinc-600',
						title ? 'justify-between' : 'justify-end'
					)}
				>
					{title && (
						<label className=' flex justify-center items-center px-4 text-zinc-400'>
							{title}
						</label>
					)}
					<IconButton icon={<ClearIcon />} onClick={onClose} />
				</div>

				{children}
			</div>
		</Modal>
	)
}
