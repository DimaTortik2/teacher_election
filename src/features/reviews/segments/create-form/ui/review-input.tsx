import { Control, Controller } from 'react-hook-form'
import { IPostTeacherReview } from '../model/interfaces/reviews.interface'
import { ResizableTextarea } from '@/shared/ui/inputs/resizable-textarea'

interface IProps {
	control: Control<Omit<IPostTeacherReview, 'teacherId'>>
	errorMessage: string | undefined
}

export function MessageInput({ control }: IProps) {
	return (
		<Controller
			name='message'
			control={control}
			rules={{ required: true }}
			render={({ field }) => (
				<ResizableTextarea
					value={field.value || ''}
					onChange={field.onChange}
					onBlur={field.onBlur}
					className='text-xl custom-scrollbar rounded-scrollbar inverse-colors text-zinc-100 placeholder:text-zinc-600'
				/>
			)}
		/>
	)
}
