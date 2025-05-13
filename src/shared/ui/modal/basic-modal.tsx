import clsx from 'clsx'
import { ReactNode } from 'react'
import ClearIcon from '@mui/icons-material/Clear'

interface IProps {
	children: ReactNode
	className?: string
	onClose: () => void
	title?: string
}

export function BasicModal({ children, className, onClose, title }: IProps) {
	return (
		<div
			className='w-screen h-screen absolute top-0 flex items-center justify-center bg-[rgba(0,0,0,0.8)] z-50 '
			onClick={onClose}
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
					<button
						onClick={onClose}
						className='m-2 p-1 rounded-full hover:bg-zinc-600 transition-colors'
					>
						<ClearIcon />
					</button>
				</div>

				{children}
			</div>
		</div>
	)
}
