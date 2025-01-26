import { Button } from '../../../shared/ui/button/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AuthBackLink, ISignIn } from '../../../shared'
import { yupResolver } from '@hookform/resolvers/yup'
import { signinSchema } from '../../../shared/model/schemas/signin.schema'
import { InputSignIn } from '../../../features/form-input'

interface IProps {
	onSignIn: (data: ISignIn) => void
}

export function SignInForm({ onSignIn }: IProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignIn>({
		resolver: yupResolver(signinSchema),
	})

	const onSumbit: SubmitHandler<ISignIn> = data => onSignIn(data)

	return (
		<form
			onSubmit={handleSubmit(onSumbit)}
			className='max-w-[350px] w-full flex flex-col items-center'
		>
			<InputSignIn
				errors={errors}
				register={register}
				registerName='email'
				type='email'
			/>
			<InputSignIn
				errors={errors}
				register={register}
				registerName='password'
				type='password'
			/>
			<Button type='submit' className='mt-5 bg-zinc-700  hover:bg-zinc-800'>
				Войти
			</Button>
			<div className='h-px w-[300px] bg-[rgba(255,255,255,0.4)] mt-[4vh]'></div>
			<AuthBackLink className='mt-4' type='signUp' />
		</form>
	)
}
