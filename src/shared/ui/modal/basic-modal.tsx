import clsx from 'clsx'
import { ReactNode } from 'react'
import crossIcon from '../../../../public/cross-icon.svg'

interface IProps {
	children: ReactNode
	className: string
	onClose: () => void
}

export function BasicModal({ children, className, onClose }: IProps) {
	return (
		<div className={clsx(className, 'bg-zinc-600 rounded-2xl flex flex-col items-end z-[1]')}>
			<button onClick={onClose} className='m-2'>
				<img src={crossIcon} className='h-10' />
			</button>
			{children}
		</div>
	)
}
