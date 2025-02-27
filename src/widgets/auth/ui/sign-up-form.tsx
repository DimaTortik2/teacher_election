import { Button } from '../../../shared/ui/buttons-links/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputSignUp } from '../../../features/form-input'
import { AuthBackLink } from '../../../shared/ui/auth-titles/auth-link'
import { ISignUp, signupSchema } from '../../../features/auth'

interface IProps {
	onSignUp: (data: ISignUp) => void
}

export function SignUpForm({ onSignUp }: IProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignUp>({
		resolver: yupResolver(signupSchema),
	})

	const onSubmit: SubmitHandler<ISignUp> = data => onSignUp(data)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='max-w-[350px] w-full flex flex-col items-center '
		>
			<InputSignUp
				title='почта'
				errors={errors}
				register={register}
				registerName='email'
				type='email'
			/>
			<InputSignUp
				title='пароль'
				errors={errors}
				register={register}
				registerName='password'
				type='password'
			/>
			<InputSignUp
				title='секретное слово'
				errors={errors}
				register={register}
				registerName='codeWord'
				type='text'
			/>
			<Button type='submit' className='mt-5 bg-zinc-700 hover:bg-zinc-800'>
				Принять
			</Button>
			<div className='h-px w-[300px] bg-[rgba(255,255,255,0.4)] mt-[4vh]'></div>
			<AuthBackLink className='mt-4' type='signIn' />
		</form>
	)
}
