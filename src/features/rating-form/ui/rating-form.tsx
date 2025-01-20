import { Rating } from '@mui/material'

export function RatingForm() {
	return (
		<div className='flex flex-col w-full p-2'>
			<p>То-то</p>
			<Rating name='size-small' readOnly defaultValue={3} precision={0.5} />
			<p>То-то</p>
			<Rating name='size-small' readOnly defaultValue={3} precision={0.5} />
			<p>То-то</p>
			<Rating name='size-small' readOnly defaultValue={3} precision={0.5} />
			<p>То-то</p>
			<Rating name='size-small' readOnly defaultValue={3} precision={0.5} />
		</div>
	)
}
