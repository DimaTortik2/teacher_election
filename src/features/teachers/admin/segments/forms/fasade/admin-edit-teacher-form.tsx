import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChangeEvent } from 'react'
import { FilePicker } from '@/features/teachers/admin/segments/forms/ui/file-picker'
import RefreshIcon from '@mui/icons-material/Refresh'
import { ModalBottomButton } from '@/shared/ui/buttons/modal-bottom-button'
import { TeacherPreview } from '@/features/teachers/admin/segments/forms/ui/teacher-preview'
import { Layout } from '../ui/layout'
import { SubjectsSelectButton } from '@/features/subjects/admin/segments/select'
import {
	ICreateTeacherForm,
	ISelectedSubject,
} from '../../../model/interfaces/admin-teacher.interface'
import { useGetTeacher } from '@/features/teachers/api/queries/teachers.queries'
import { useEditTeacher } from '../../../api/queries/admin-teachers.queries'
import { useAtomValue } from 'jotai'
import { selectedTeacherIdAtom } from '@/app/store/admin-teachers.store'
import { COMPONENTS_CLASSNAMES } from '@/app/model/style-constants'
import { TEACHER_IMG } from '@/app/model/constants'
import { IconButton } from '@/shared/ui/icons/icon-button'
import { formatEditData } from '../lib/format-edit-data'

export function AdminEditTeacherForm() {
	const id = useAtomValue(selectedTeacherIdAtom)

	const { editTeacher } = useEditTeacher()
	const { data } = useGetTeacher(id)

	const onSubmit = (editData: Partial<ICreateTeacherForm>) => {
		if (!id) return

		const formatedData = formatEditData({ data, editData })

		if (Object.keys(formatedData).length === 0) {
			console.log('вы ничего не поменяли')
			return
		}

		editTeacher({ data: formatedData, id })
	}

	const {
		handleSubmit,
		register,
		control,
		setValue,
		watch,
		formState: { errors },
		reset,
	} = useForm<ICreateTeacherForm>({
		mode: 'onChange', // Валидировать при изменении
		defaultValues: {
			file: null,
			fullName: '',
			selectedSubjects: [],
		},
	})

	const resetPreviewInfo = useCallback(() => {
		if (data) {
			reset({
				fullName: data.fullName,
				selectedSubjects: data.subjects,
				file: null,
			})
			setImagePreview(data.photo)
		}
	}, [data, reset])

	useEffect(() => {
		if (data) {
			resetPreviewInfo()
		}
	}, [data, resetPreviewInfo])

	const [imagePreview, setImagePreview] = useState(TEACHER_IMG.error)

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
				errors.fullName ? (
					<p className='mt-2 text-red-500 text-mb'>{errors.fullName.message}</p>
				) : (
					<p className='mt-2 text-mb'>⠀</p>
				)
			}
			actionsRow={
				<div className='w-full flex justify-between'>
					<div className='w-full flex gap-3 px-4'>
						<SubjectsSelectButton
							control={control}
							setValue={setValue}
							buttonText='Выбрать предмет'
							className='bg-theme-600 hover:bg-theme-500'
						/>
						<FilePicker
							onChange={handleFileChange}
							register={register}
							isRequired={false}
						/>
					</div>
					<IconButton
						onClick={resetPreviewInfo}
						icon={<RefreshIcon fontSize='large' className='text-theme-400' />}
					/>
				</div>
			}
			preview={
				<TeacherPreview
					fullName={watch('fullName')}
					subjects={watch('selectedSubjects').map(
						(subject: ISelectedSubject) => subject.title
					)}
					imgSrc={imagePreview}
				/>
			}
			bottomButton={
				<ModalBottomButton type='submit'>Сохранить изменения</ModalBottomButton>
			}
		/>
	)
}
