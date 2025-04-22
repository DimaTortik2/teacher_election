import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Checkbox from '@mui/material/Checkbox'
import { Rating } from '@mui/material'
import { getRatingColor } from '../../../shared/helpers/get-rating-color'
import { useWrapText } from '../model/use-wrap-text'

interface IProps {
	text?: string | null
	onLikelick: () => void
	ratingArr: number[]
}

export function Review({ text, onLikelick, ratingArr }: IProps) {
	const { isWrappedText, setIsWrappedText, wrappedText, isBigMessage } =
		useWrapText(text)
	const rating = Math.floor(
		ratingArr.reduce((acc, num) => acc + num, 0) / ratingArr.length
	)
	const handleTextMoreClick = () => {
		setIsWrappedText(prev => !prev)
	}
	const [isLikesCountVisible, setIsLikesCountVisible] = useState(false)

	const handleLikelick = () => {
		onLikelick()
		setIsLikesCountVisible(prev => !prev)
	}

	return (
		<div className='w-full flex flex-col gap-[5px] items-start text-xl sm:px-2'>
			<Rating
				readOnly={true}
				value={rating}
				sx={{ fontSize: '1.3rem', color: getRatingColor(rating) }}
				precision={1}
			/>
			{text && (
				<div className='w-full'>
					<div className='w-full  flex bg-theme-700 rounded-t-2xl p-2 items-end justify-between '>
						<div className='h-full flex flex-col justify-center items-start mr-2 '>
							<p className='word-wrap w-full'>
								{isWrappedText ? wrappedText : text}
							</p>
							{isBigMessage && (
								<button type='button' onClick={handleTextMoreClick}>
									{wrappedText !== text && (
										<p className='text-base text-zinc-300'>
											{isWrappedText ? 'Читать дальше' : 'Скрыть'}
										</p>
									)}
								</button>
							)}
						</div>
					</div>
					<div className='flex justify-end w-full rounded-b-2xl border-solid border-b-2 border-theme-700 shadow-lg bg-theme-500'>
						{isLikesCountVisible && (
							<span className='text-[1.1rem] text-[rgba(255,255,255,0.5)]'>
								123k
							</span>
						)}
						<Checkbox
							sx={{
								height: '32px',
								width: '32px',
								color: '#71717a',
								'&.Mui-checked': {
									color: '#f87171',
								},
								paddingX: '20px',
							}}
							icon={
								<FavoriteBorderIcon
									name='customized-color'
									fontSize='inherit'
								/>
							}
							checkedIcon={
								<FavoriteIcon name='customized-color' fontSize='inherit' />
							}
							onChange={handleLikelick}
						/>
					</div>
				</div>
			)}
		</div>
	)
}

// {
// 	isLikesCountVisible && (
// 		<span className='text-[1.1rem] text-[rgba(255,255,255,0.5)]'>123k</span>
// 	)
// }
