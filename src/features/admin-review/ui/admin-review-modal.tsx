import Modal from '@mui/material/Modal'
import { Box } from '@mui/material'
import { Button } from '../../../shared/ui/buttons-links/button'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface IProps {
	isVisible: boolean
	Onclick: () => void
	onClose: () => void
	children: ReactNode
	solutionType: 'deny' | 'approve'
}

export function AdminReviewModal({
	isVisible,
	onClose,
	Onclick,
	children,
	solutionType,
}: IProps) {
	const style = {
		color: 'white',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '90vw',
		height: '90vh',
		bgcolor: '#27272a',
		border: '2px solid #3f3f46',
		borderRadius: '1rem',
		boxShadow: 24,
		p: 2,
	}

	const buttonText = {
		deny: 'отклонить?',
		approve: 'принять?',
	}[solutionType]

	const buttonStyle = {
		deny: 'bg-red-400',
		approve: 'bg-green-400',
	}[solutionType]

	return (
		<>
			<Modal
				open={isVisible}
				onClose={onClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<div className='h-[70vh] custom-scrollbar rounded-scrollbar overflow-auto overflow-x-hidden'>
						{children}
					</div>
					<div className='w-full flex justify-center'>
						<Button
							onClick={Onclick}
							className={clsx('py-[4px] px-4 absolute bottom-4 sm:text-3xl', buttonStyle)}
						>
							{buttonText}
						</Button>
					</div>
				</Box>
			</Modal>
		</>
	)
}
