import { Rating } from '@mui/material'
import {
	FieldErrors,
	UseFormRegister,
	UseFormSetValue,
	UseFormWatch,
} from 'react-hook-form'
import { CATEGORIES } from '@/app/model/constants'
import { getRatingColor } from '@/entities/review/lib/get-rating-color'
import { useState } from 'react'
import { IPostTeacherReview } from '../model/interfaces/reviews.interface'
import { ICategoryName } from '../model/interfaces/catigories.interface'

interface IProps {
	register: UseFormRegister<Omit<IPostTeacherReview, 'teacherId'>>
	watch: UseFormWatch<Omit<IPostTeacherReview, 'teacherId'>>
	setValue: UseFormSetValue<Omit<IPostTeacherReview, 'teacherId'>>
	errors: FieldErrors<Omit<IPostTeacherReview, 'teacherId'>>
}

export function RatingForm({ register, watch, setValue, errors }: IProps) {
	const [hoverValues, setHoverValues] = useState<{ [key: string]: number }>({})

	return (
		<div className='flex flex-col w-full p-2'>
			{CATEGORIES.map((el: ICategoryName, index: number) => {
				const currentValue = Number(watch(el.engName))
				const hoverValue = hoverValues[el.engName] ?? -1
				const color =
					hoverValue > 0
						? getRatingColor(hoverValue)
						: getRatingColor(currentValue)
				return (
					<div key={index}>
						<input
							type='number'
							className='hidden'
							defaultValue={0}
							{...register(el.engName, { required: true })}
						/>
						<p>{el.rusName}</p>
						<div className='flex gap-3 items-center'>
							<Rating
								key={index}
								value={Number(watch(el.engName))}
								onChange={(_, newValue) =>
									setValue(el.engName, newValue ?? 0, { shouldValidate: true })
								}
								onChangeActive={(_, newHover) =>
									setHoverValues(prev => ({ ...prev, [el.engName]: newHover }))
								}
								name='size-small'
								precision={1}
								sx={{
									'& .MuiRating-iconFilled': {
										color,
									},
								}}
							/>
							{errors[el.engName] && (
								<div className='bg-red-400 transition-all h-2 w-2 rounded-full'></div>
							)}
						</div>
					</div>
				)
			})}
		</div>
	)
}
