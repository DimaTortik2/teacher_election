import { useEffect, useState } from 'react'
import { Button } from '../../../shared/ui/buttons-links/button'
import { useForm } from 'react-hook-form'
import { ChangeEvent } from 'react'
import { SubjectsMenu } from '../../../features/subjects'
import { TeacherPreview } from '../../../features/admin'
import { FilePicker } from '../../../shared/ui/file-picker/file-picker'
import { ITeacherForm } from '../../../features/teachers'
import { useGetTeacher } from '../../../shared/api/queries/teachers.queries'
import resetIcon from '../../../../public/reset-icon.svg'

interface IProps {
	onSubmit: (editData: Partial<ITeacherForm>) => void
	id: string
}

export function EditTeacherForm({ onSubmit, id }: IProps) {
	const handleClick = (editData: Partial<ITeacherForm>) => {
		onSubmit(editData)
	}

	const { data } = useGetTeacher(id)

	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
		reset,
	} = useForm<ITeacherForm>({
		mode: 'onChange', // Валидировать при изменении
		defaultValues: {
			fullName: 'загрузка...',
			subject: JSON.stringify({ title: 'загрузка...' }),
		},
	})

	const resetPreviewInfo = () => {
		if (data) {
			reset({
				fullName: data.fullName,
				subject: JSON.stringify({
					title: data.subject,
					subjectId: undefined,
				}),
			})
			setImagePreview(data.photo)
		}
	}

	useEffect(() => {
		if (data) {
			resetPreviewInfo()
		}
	}, [data])

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

				<div className='w-full flex justify-between'>
					<div className=' flex gap-3 px-2'>
						<SubjectsMenu
							isRequired={false}
							register={register}
							buttonText='Выбрать предмет'
						/>
						<FilePicker
							isRequired={false}
							onChange={handleFileChenge}
							register={register}
						/>
					</div>
					<button type='button' onClick={resetPreviewInfo}>
						<img src={resetIcon} className='h-8 mr-4' />
					</button>
				</div>

				<Button type='submit' className='m-3 absolute bottom-0'>
					Сохранить изменения
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
