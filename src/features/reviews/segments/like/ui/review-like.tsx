import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Checkbox from '@mui/material/Checkbox'
import clsx from 'clsx'
import { wrapNumber } from '../lib/wrap-numbers'

export function ReviewLike({ count }: { count: number }) {
	const [isLikeActive, setIsLikeActive] = useState(false)
	const handleLikeClick = () => {
		setIsLikeActive(prev => !prev)
	}

	return (
		<div
			className={clsx(
				'h-full flex flex-col justify-center items-center gap-[1px]'
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
				icon={<FavoriteBorderIcon name='customized-color' fontSize='inherit' />}
				checkedIcon={
					<FavoriteIcon name='customized-color' fontSize='inherit' />
				}
				onChange={handleLikeClick}
				checked={isLikeActive}
			/>
			<span
				className={clsx(
					'text-[0.85rem]  leading-none',
					isLikeActive ? 'text-white' : 'text-zinc-400'
				)}
			>
				{wrapNumber(count)}
			</span>
		</div>
	)
}
