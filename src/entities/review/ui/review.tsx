import { Rating } from '@mui/material'
import { getRatingColor } from '@/entities/review/lib/get-rating-color'
import { useWrapText } from '../model/hooks/use-wrap-text'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface IProps {
	text?: string | null
	rating?: number
	nickName?: string | null
	actions?: ReactNode
	className?: string
}

export function Review({ text, rating, nickName, actions, className }: IProps) {
	const { isWrappedText, setIsWrappedText, wrappedText, isBigMessage } =
		useWrapText(text)
	const handleTextMoreClick = () => {
		setIsWrappedText(prev => !prev)
	}

	return (
		<div className='flex flex-col items-start text-lg sm:px-2 '>
			{rating && (
				<Rating
					readOnly={true}
					value={rating}
					sx={{
						fontSize: '1.1rem',
						color: getRatingColor(rating) || 'yellow',
						paddingLeft: '7px',
					}}
					precision={1}
				/>
			)}
			{text && (
				<>
					<div className='flex items-end justify-center gap-1'>
						<div
							className={clsx(
								'bg-zinc-600 rounded-2xl p-2 px-5 mt-[5px] mb-[1px]',
								className
							)}
						>
							<div className='word-wrap'>
								{isWrappedText ? wrappedText : text}
							</div>
							{isBigMessage && (
								<button type='button' onClick={handleTextMoreClick}>
									{wrappedText !== text && (
										<p className='ml-2 text-[0.9rem] text-zinc-300'>
											{isWrappedText ? 'Читать дальше' : 'Скрыть'}
										</p>
									)}
								</button>
							)}
						</div>
						{actions}
					</div>

					{nickName && (
						<span className='text-[0.8rem] pl-[7px] '>{nickName}</span>
					)}
				</>
			)}
		</div>
	)
}
