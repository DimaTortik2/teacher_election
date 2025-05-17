import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChangeEvent } from 'react'
import { SubjectsMenu } from '../../../features/subjects'
import { TeacherPreview } from '../../../features/admin'
import { FilePicker } from '../../../shared/ui/file-picker/file-picker'
import { ITeacherForm } from '../../../features/teachers'
import { useGetTeacher } from '../../../shared/api/queries/teachers.queries'
import { STYLE_CONSTANTS } from '../../../app/style/style-constants'
import RefreshIcon from '@mui/icons-material/Refresh'

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
			>
				<div className='py-4 bg-zinc-700 transition-colors text-white px-4 rounded-xl text-xl w-full flex items-start mb-4 flex-col'>
					<p>Имя учителя</p>
					<input
						type='text'
						{...register('fullName', {
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

				<div className='w-full flex justify-between'>
					<div className='w-full flex gap-3 px-4'>
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
					<button
						type='button'
						onClick={resetPreviewInfo}
						className='m-2 p-1 rounded-full hover:bg-zinc-600 transition-colors mr-4'
					>
						<RefreshIcon fontSize='large' className='text-theme-400' />
					</button>
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
					Сохранить изменения
				</button>
			</form>
		</>
	)
}
