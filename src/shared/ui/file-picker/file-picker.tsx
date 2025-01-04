import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { UseFormRegister } from 'react-hook-form'
import { ITeacherForm } from '../../model/interfaces/teacher-form.interface'
import { ChangeEvent } from 'react'

const VisuallyHiddenInput = styled('input')({
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	left: 0,
	whiteSpace: 'nowrap',
	width: 1,
})

interface IProps {
	register: UseFormRegister<ITeacherForm>
	onChange : (e: ChangeEvent<HTMLInputElement>) =>void
}

export function FilePicker({ register, onChange }: IProps) {
	return (
		<Button
			component='label'
			role={undefined}
			variant='contained'
			tabIndex={-1}
			startIcon={<CloudUploadIcon />}
		>
			Upload files
			<VisuallyHiddenInput
				{...register('photo', { required: true })}
				type='file'
				onChange={onChange}
				multiple
			/>
		</Button>
	)
}