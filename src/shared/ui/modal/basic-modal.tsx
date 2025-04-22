import clsx from 'clsx'
import { ReactNode } from 'react'
import { CrossIcon } from '../icons'

interface IProps {
	children: ReactNode
	className: string
	onClose: () => void
}

export function BasicModal({ children, className, onClose }: IProps) {
	return (
		<div className={clsx(className, 'bg-zinc-600 rounded-2xl flex flex-col items-end z-[1]')}>
			<button onClick={onClose} className='m-2'>
			<CrossIcon className='h-10 text-theme-500' />
				
			</button>
			{children}
		</div>
	)
}
