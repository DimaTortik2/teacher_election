import {  useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChangeEvent } from 'react'
import { FilePicker } from '@/features/teachers/admin/segments/forms/ui/file-picker'
import { ModalBottomButton } from '@/shared/ui/buttons/modal-bottom-button'
import { TeacherPreview } from '@/features/teachers/admin/segments/forms/ui/teacher-preview'
import { Layout } from '../ui/layout'
import { SubjectsSelectButton } from '@/features/subjects/admin/segments/select'
import { usePostTeacher } from '../../../api/queries/admin-teachers.queries'
import { ITeacherForm } from '../../../model/interfaces/admin-teacher.interface'
import { COMPONENTS_CLASSNAMES } from '@/app/model/style-constants'

export function AdminCreateTeacherForm() {
	const { postTeacher } = usePostTeacher()

	const onSubmit = (data: ITeacherForm) => {
		postTeacher(data)
	}

	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm<ITeacherForm>({
		mode: 'onChange',
	})

	const [imagePreview, setImagePreview] = useState('/undefined-person-icon.jpg')

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
						required: 'имя забыл, емае',
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
			}
			preview={
				<TeacherPreview
					fullName={watch('fullName')}
					subject={watch('subject') && JSON.parse(watch('subject')).title}
					imgSrc={imagePreview}
				/>
			}
			bottomButton={
				<ModalBottomButton type='submit'>Добавить учителя</ModalBottomButton>
			}
		/>
	)
}
