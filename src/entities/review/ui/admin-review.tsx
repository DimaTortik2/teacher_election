import { useState } from 'react'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'

import { IconButton } from '@mui/material'

interface IProps {
	text: string
	onApproveClick: ({ id, text }: { id: string; text: string }) => void
	onDenyClick: ({ id, text }: { id: string; text: string }) => void
	id: string
}

export function AdminReview({
	id,
	text,
	onApproveClick,
	onDenyClick,
}: IProps) {
	const [isWrappedText, setIsWrappedText] = useState<boolean>(true)
	const handleButtonWrapClick = () => {
		setIsWrappedText(prev => !prev)
	}
	const wrappedText = text.length > 250 ? text.slice(0, 250) + ' ...' : text

	const handleApproveClick = () => {
		onApproveClick({ id, text })
	}

	const handleDenyClick = () => {
		onDenyClick({ id, text })
	}

	return (
		<div className=' w-full flex flex-col gap-[5px] items-start text-xl'>
			<div className='w-full flex items-center justify-between'>
				<p className='mr-2'> {isWrappedText ? wrappedText : text}</p>
				<div>
					<IconButton onClick={handleApproveClick}>
						<ThumbUpOffAltIcon />
					</IconButton>
					<IconButton onClick={handleDenyClick}>
						<ThumbDownOffAltIcon />
					</IconButton>
				</div>
			</div>
			<button type='button' onClick={handleButtonWrapClick}>
				{wrappedText !== text && (
					<p className='text-base text-zinc-300'>
						{isWrappedText ? 'Читать дальше' : 'Скрыть'}
					</p>
				)}
			</button>
		</div>
	)
}
