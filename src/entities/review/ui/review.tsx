import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Checkbox from '@mui/material/Checkbox'
import { Rating } from '@mui/material'
import { getRatingColor } from '../../../shared/helpers/get-rating-color'
import { useWrapText } from '../model/use-wrap-text'
import clsx from 'clsx'
import { wrapNumber } from '../../../shared/helpers/wrap-numbers'

interface IProps {
	text?: string | null
	onLikelick: () => void
	ratingArr: number[]
	nickName: string | null
	likesCount: number
}

export function Review({
	text,
	onLikelick,
	ratingArr,
	nickName,
	likesCount,
}: IProps) {
	const { isWrappedText, setIsWrappedText, wrappedText, isBigMessage } =
		useWrapText(text)
	const rating = Math.floor(
		ratingArr.reduce((acc, num) => acc + num, 0) / ratingArr.length
	)
	const handleTextMoreClick = () => {
		setIsWrappedText(prev => !prev)
	}
	const [isLikeActive, setIsLikeActive] = useState(false)

	const handleLikelick = () => {
		onLikelick()
		setIsLikeActive(prev => !prev)
	}

	const LikeComponent = () => {
		return (
			<div
				className={clsx(
					'flex flex-col items-center  gap-[1px] h-full',
					isWrappedText ? 'justify-center' : 'justify-end'
				)}
			>
				<Checkbox
					sx={{
						height: '1.2rem',
						width: '1.2rem',
						fontSize: '1.2rem',
						color: '#71717a',
						'&.Mui-checked': {
							color: '#f87171',
						},
					}}
					icon={
						<FavoriteBorderIcon name='customized-color' fontSize='inherit' />
					}
					checkedIcon={
						<FavoriteIcon name='customized-color' fontSize='inherit' />
					}
					onChange={handleLikelick}
					checked={isLikeActive}
				/>

				<span
					className={clsx(
						'text-[0.85rem]  leading-none',
						isLikeActive ? 'text-white' : 'text-zinc-400'
					)}
				>
					{wrapNumber(likesCount)}
				</span>
			</div>
		)
	}

	return (
		<div className='flex flex-col items-start text-lg sm:px-2'>
			<Rating
				readOnly={true}
				value={rating}
				sx={{
					fontSize: '1.1rem',
					color: getRatingColor(rating),
					paddingLeft: '7px',
				}}
				precision={1}
			/>
			{text && (
				<>
					<div className='flex items-end justify-center gap-1'>
						<div className='bg-zinc-600 rounded-2xl p-2 px-5 mt-[5px] mb-[1px]'>
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

						<LikeComponent />
					</div>

					<span className='text-[0.8rem] pl-[7px] '>{nickName}</span>
				</>
			)}
		</div>
	)
}
