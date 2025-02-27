import { Button } from '../../../shared/ui/buttons-links/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputSignIn } from '../../../features/form-input'
import { AuthBackLink } from '../../../shared/ui/auth-titles/auth-link'
import { ISignIn, signinSchema } from '../../../features/auth'

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
				title='почта'
			/>
			<InputSignIn
				errors={errors}
				register={register}
				registerName='password'
				type='password'
				title='пароль'
			/>
			<Button type='submit' className='mt-5 bg-zinc-700  hover:bg-zinc-800'>
				Войти
			</Button>
			<div className='h-px w-[300px] bg-[rgba(255,255,255,0.4)] mt-[4vh]'></div>
			<AuthBackLink className='mt-4' type='signUp' />
		</form>
	)
}
