import { FieldErrors, UseFormRegister } from 'react-hook-form'
import Checkbox from '@mui/material/Checkbox'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { ChangeEvent, useState } from 'react'
import { ISignIn } from '../model/interfaces/auth.interfaces'

interface IProps {
	type: 'text' | 'password'
	title: string
	register: UseFormRegister<ISignIn>
	registerName: keyof ISignIn
	errors: FieldErrors<ISignIn>
}

export function InputSignIn({ type, title, register, registerName, errors }: IProps) {
	const [isChecked, setIsChecked] = useState<boolean>(false)

	const handleEyeClick = (e: ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked)
	}
	return (
		<div className='w-full flex items-center gap-1 px-1'>
			<div className='w-4/5 flex flex-col ml-auto'>
				<p className='text-xl'>{title}</p>

				<div className='flex items-center gap-1'>
					<input
						{...register(registerName, {
							required: true,
						})}
						type={isChecked ? 'text' : type}
						className='w-full rounded-xl border-solid border-2 border-cyan-400 text-slate-950 text-2xl text-center custom-input'
					/>
				</div>
				{errors[registerName] ? (
					<span className='text-red-600'>{errors[registerName].message}</span>
				) : (
					<span className='invisible'>#</span>
				)}
			</div>
			{type === 'password' ? (
				<Checkbox
					sx={{
						height: '32px',
						width: '32px',
					}}
					icon={<VisibilityOffIcon />}
					checkedIcon={<VisibilityIcon />}
					onChange={handleEyeClick}
				/>
			) : (
				<div className='w-[32px] h-[32px]'></div>
			)}
		</div>
	)
}
