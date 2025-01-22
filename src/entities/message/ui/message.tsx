import { useState } from 'react'
import Rating from '@mui/material/Rating'
import { styled } from '@mui/material/styles'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const StyledRating = styled(Rating)({
	'& .MuiRating-iconFilled': {
		color: '#ff6d75',
	},
	'& .MuiRating-iconHover': {
		color: '#ff3d47',
	},
})

interface IProps {
	text: string
}

export function Message({ text }: IProps) {
	const [isWrappedText, setIsWrappedText] = useState<boolean>(true)

	const handleButtonClick = () => {
		setIsWrappedText(prev => !prev)
	}

	const wrappedText = text.length > 250 ? text.slice(0, 250) + ' ...' : text

	return (
		<div className=' w-full flex flex-col gap-[5px] items-start text-xl px-2'>
			<div className='w-full flex items-center justify-between'>
				<p className='mr-2'> {isWrappedText ? wrappedText : text}</p>
				<StyledRating
					name='customized-color'
					defaultValue={0}
					precision={1}
					max={1}
					icon={<FavoriteIcon fontSize='inherit' />}
					emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
				/>
			</div>
			<button type='button' onClick={handleButtonClick}>
				{wrappedText !== text && (
					<p className='text-base text-zinc-300'>
						{isWrappedText ? 'Читать дальше' : 'Скрыть'}
					</p>
				)}
			</button>
		</div>
	)
}
