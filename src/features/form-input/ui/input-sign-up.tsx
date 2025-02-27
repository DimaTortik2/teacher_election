import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ISignUp } from '../../auth/model/interfaces/auth.interfaces'

interface IProps {
	register: UseFormRegister<ISignUp>
	errors: FieldErrors<ISignUp>
	type: 'email' | 'password' | 'text' | 'number'
	registerName: keyof ISignUp
	title: string
}

export function InputSignUp({
	register,
	errors,
	type,
	registerName,
	title,
}: IProps) {
	return (
		<div className='mb-4'>
			<p>{title}</p>
			<input
				{...register(registerName, { required: true })}
				type={type}
				className='w-[calc((1vh_+_1vw)*24)] sm:w-[calc((1vh_+_1vw)*21)] md:w-[calc((1vh_+_1vw)*17)] xl:w-[350px] h-[2.5rem] text-xl rounded-xl  text-black'
			/>
			{errors.email && <p className='text-red-500'>{errors.email.message}</p>}
		</div>
	)
}
