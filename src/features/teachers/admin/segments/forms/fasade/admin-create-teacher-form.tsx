import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChangeEvent } from 'react'
import { FilePicker } from '@/features/teachers/admin/segments/forms/ui/file-picker'
import { ModalBottomButton } from '@/shared/ui/buttons/modal-bottom-button'
import { TeacherPreview } from '@/features/teachers/admin/segments/forms/ui/teacher-preview'
import { Layout } from '../ui/layout'
import { SubjectsSelectButton } from '@/features/subjects/admin/segments/select'
import { usePostTeacher } from '../../../api/queries/admin-teachers.queries'
import {
	ICreateTeacherForm,
	ISelectedSubject,
} from '../../../model/interfaces/admin-teacher.interface'
import { COMPONENTS_CLASSNAMES } from '@/app/model/style-constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateTeacherSchema } from '../../../model/schemas/create-teacher.schema'
import { formatCreateData } from '../lib/format-create-data'
import { TEACHER_IMG } from '@/app/model/constants'

export function AdminCreateTeacherForm() {
	const { postTeacher } = usePostTeacher()

	const onSubmit = (data: ICreateTeacherForm) => {
		const formatedData = formatCreateData(data)
		postTeacher(formatedData)
	}

	const {
		handleSubmit,
		register,
		control,
		watch,
		setValue,
		formState: { errors },
	} = useForm<ICreateTeacherForm>({
		resolver: zodResolver(CreateTeacherSchema),
		defaultValues: {
			file: null,
			fullName: '',
			selectedSubjects: [],
		},
		mode: 'onChange',
	})

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
				errors.fullName ? (
					<p className='mt-2 text-red-500 text-mb'>{errors.fullName.message}</p>
				) : (
					<p className='mt-2 text-mb'>⠀</p>
				)
			}
			actionsRow={
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
				<ModalBottomButton type='submit'>Добавить учителя</ModalBottomButton>
			}
		/>
	)
}
