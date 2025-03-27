import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { UseFormRegister } from 'react-hook-form'
import { ChangeEvent } from 'react'
import { ITeacherForm } from '../../../features/teachers'

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
	isRequired? : boolean
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function FilePicker({ register, onChange, isRequired }: IProps) {
	return (
		<Button
			component='label'
			role={undefined}
			variant='contained'
			tabIndex={-1}
			sx={{
				backgroundColor: 'rgb(63 63 70)',
				borderRadius: '0.75rem',
				fontSize: '0.8rem',
				lineHeight: '1.75rem',
				paddingTop: '0.5rem',
				paddingBottom: '0.5rem',
				paddingLeft: '0.5rem',
				paddingRight: '0.5rem',
				fontFamily: 'inherit',
				boxShadow: 'none',
			}}
		>
			Добавить фото
			<VisuallyHiddenInput
				{...register('file', { required: isRequired })}
				type='file'
				onChange={onChange}
				multiple
			/>
		</Button>
	)
}
