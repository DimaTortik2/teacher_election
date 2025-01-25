import { Rating } from '@mui/material'
import {
	FieldErrors,
	UseFormRegister,
	UseFormSetValue,
	UseFormWatch,
} from 'react-hook-form'
import { ICategory } from '../../../shared'
import { CATEGORIES } from '../../../shared/model/constants'
import { IPostTeacherReview } from '../../../shared/model/interfaces/teacher-review.interface'

interface IProps {
	register: UseFormRegister<Omit<IPostTeacherReview, 'teacherId'>>
	watch: UseFormWatch<Omit<IPostTeacherReview, 'teacherId'>>
	setValue: UseFormSetValue<Omit<IPostTeacherReview, 'teacherId'>>
	errors: FieldErrors<Omit<IPostTeacherReview, 'teacherId'>>
}

export function RatingForm({ register, watch, setValue, errors }: IProps) {
	const handleChange = (
		engName: keyof Omit<IPostTeacherReview, 'teacherId'>,
		newValue: number | null
	) => {
		setValue(engName, newValue ?? 0, { shouldValidate: true })
	}

	console.log(watch('smartless'))

	return (
		<div className='flex flex-col w-full p-2'>
			{CATEGORIES.map((el: ICategory, index) => (
				<div key={index}>
					<input
						type='number'
						className='hidden'
						defaultValue={0}
						{...register(el.engName, { required: true })}
					/>
					<p>{el.rusName}</p>
					<div className='flex gap-3'>
						<Rating
							key={index}
							value={Number(watch(el.engName))}
							onChange={(_, newValue) => handleChange(el.engName, newValue)}
							name='size-small'
							precision={1}
						/>
						{errors[el.engName] && (
							<p className='text-red-400 transition-all'>
								{errors[el.engName]?.message}
							</p>
						)}
					</div>
				</div>
			))}
		</div>
	)
}
