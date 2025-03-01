import { useEffect, useState } from 'react'
import { Button } from '../../../shared/ui/buttons-links/button'
import { useForm } from 'react-hook-form'
import { ChangeEvent } from 'react'
import { SubjectsMenu } from '../../../features/subjects'
import { TeacherPreview } from '../../../features/admin'
import { FilePicker } from '../../../shared/ui/file-picker/file-picker'
import { ITeacherForm } from '../../../features/teachers'

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

	const handleFileChenge = (e: ChangeEvent<HTMLInputElement>) => {
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
				className='flex flex-col content-center items-center w-full h-full gap-2'
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
						className='py-3 bg-zinc-400 transition-colors px-10 rounded-xl text-2xl text-zinc-800 w-full flex items-start'
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
					/>
					<FilePicker
						onChange={handleFileChenge}
						register={register}
						isRequired={false}
					/>
				</div>
				<Button type='submit' className='m-3 absolute bottom-0'>
					Добавить учителя
				</Button>

				<div className='w-2/3 h-1/6'>
					<TeacherPreview
						fullName={watch('fullName')}
						subject={watch('subject') && JSON.parse(watch('subject')).title}
						imgSrc={imagePreview}
					/>
				</div>
			</form>
		</>
	)
}
