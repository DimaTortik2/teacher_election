import clsx from 'clsx'
import { useState } from 'react'
import { SubjectsSelectModal } from '../ui/subjects-select-modal'
import { Control, UseFormSetValue } from 'react-hook-form'
import { ICreateTeacherForm } from '@/features/teachers/admin/model/interfaces/admin-teacher.interface'

interface IProps {
	buttonText: string
	control?: Control<ICreateTeacherForm>
	className?: string
	setValue: UseFormSetValue<ICreateTeacherForm>
}

export function SubjectsSelectButton({
	buttonText,
	control,
	className,
	setValue,
}: IProps) {
	const [isVisible, setIsVisible] = useState(false)

	const handleClose = () => {
		setIsVisible(false)
	}
	return (
		<>
			<button
				onClick={() => setIsVisible(true)}
				type='button'
				className={clsx('p-2 rounded-xl', className)}
			>
				{buttonText}
			</button>
			<SubjectsSelectModal
				isVisible={isVisible}
				onClose={handleClose}
				control={control}
				setValue={setValue}
			/>
		</>
	)
}
