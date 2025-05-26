import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChangeEvent } from 'react'
import { FilePicker } from '@/features/teachers/admin/segments/forms/ui/file-picker'
import RefreshIcon from '@mui/icons-material/Refresh'
import { ModalBottomButton } from '@/shared/ui/buttons/modal-bottom-button'
import { TeacherPreview } from '@/features/teachers/admin/segments/forms/ui/teacher-preview'
import { Layout } from '../ui/layout'
import { SubjectsSelectButton } from '@/features/subjects/admin/segments/select'
import { ITeacherForm } from '../../../model/interfaces/admin-teacher.interface'
import { useGetTeacher } from '@/features/teachers/api/queries/teachers.queries'
import { useEditTeacher } from '../../../api/queries/admin-teachers.queries'
import { useAtomValue } from 'jotai'
import { selectedTeacherIdAtom } from '@/app/store/admin-teachers.store'
import { COMPONENTS_CLASSNAMES } from '@/app/model/style-constants'

export function AdminEditTeacherForm() {
	const id = useAtomValue(selectedTeacherIdAtom)

	const { editTeacher } = useEditTeacher()

	const onSubmit = (editData: Partial<ITeacherForm>) => {
		if (!id) return

		if (editData.file?.length === 0) editData.file = undefined
		console.log('editData', editData)
		editTeacher({ data: editData, id })
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
		console.log(
			'errors',
			errors.file,
			errors.root,
			errors.fullName,
			errors.subject
		)
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
		<Layout
			onSubmit={handleSubmit(onSubmit)}
			input={
				<input
					type='text'
					{...register('fullName', {
						minLength: {
							value: 4,
							message: 'имя учителя > 3 букв',
						},
					})}
					className={COMPONENTS_CLASSNAMES.input}
				/>
			}
			errorsMessage={
				errors.fullName && (
					<p className='mt-2 text-red-500'>{errors.fullName.message}</p>
				)
			}
			actionsRow={
				<div className='w-full flex justify-between'>
					<div className='w-full flex gap-3 px-4'>
						<SubjectsSelectButton
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
			}
			preview={
				<TeacherPreview
					fullName={watch('fullName')}
					subject={watch('subject') && JSON.parse(watch('subject')).title}
					imgSrc={imagePreview}
				/>
			}
			bottomButton={
				<ModalBottomButton type='submit'>Сохранить изменения</ModalBottomButton>
			}
		/>
	)
}
