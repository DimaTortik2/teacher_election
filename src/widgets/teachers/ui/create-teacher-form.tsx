import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChangeEvent } from 'react'
import { SubjectsMenu } from '../../../features/subjects'
import { TeacherPreview } from '../../../features/admin'
import { FilePicker } from '../../../shared/ui/file-picker/file-picker'
import { ITeacherForm } from '../../../features/teachers'
import { STYLE_CONSTANTS } from '../../../app/style/style-constants'

interface IProps {
	onSubmit: (data: ITeacherForm) => void
}

export function CreateTeacherForm({ onSubmit }: IProps) {
	const handleClick = (data: ITeacherForm) => {
		onSubmit(data)
	}

	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm<ITeacherForm>({
		mode: 'onChange', // Валидировать при изменении
	})

	useEffect(() => {
		console.log('errors', errors)
	}, [errors])

	const [imagePreview, setImagePreview] = useState<string>(
		'/undefined-person-icon.jpg'
	)

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = () => {
				setImagePreview(reader.result as string)
			}
		}
	}

	return (
		<>
			<form
				onSubmit={handleSubmit(handleClick)}
				className='flex flex-col content-center items-center w-[90vw] max-w-xl gap-2'
				// onKeyDown={handlerKeyDown}
			>
				<div className='py-4 bg-zinc-700 transition-colors text-white px-5 rounded-xl text-xl w-full flex items-start mb-4 flex-col'>
					<p>Имя учителя</p>
					<input
						type='text'
						{...register('fullName', {
							required: 'имя забыл, емае',
							minLength: {
								value: 4,
								message: 'имя учителя > 3 букв',
							},
						})}
						className={STYLE_CONSTANTS.input}
					/>
					{errors.fullName && (
						<p className='mt-2 text-red-500'>{errors.fullName.message}</p>
					)}
				</div>
				<div className='w-full flex gap-3 px-2'>
					<SubjectsMenu
						register={register}
						buttonText='Выбрать предмет'
						isRequired={true}
						className='bg-theme-600 hover:bg-theme-500'
					/>
					<FilePicker
						onChange={handleFileChange}
						register={register}
						isRequired={false}
					/>
				</div>

				<TeacherPreview
					fullName={watch('fullName')}
					subject={watch('subject') && JSON.parse(watch('subject')).title}
					imgSrc={imagePreview}
				/>
				<button
					type='submit'
					className=' mt-auto w-full py-4 rounded-b-2xl bg-zinc-600 hover:bg-zinc-500 transition-colors'
				>
					Добавить учителя
				</button>
			</form>
		</>
	)
}
