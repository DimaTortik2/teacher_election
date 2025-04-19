import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { AuthHeader } from '../../../shared/ui/auth/auth-header'
import { AuthBackLink } from '../../../shared/ui/auth/auth-link'
import { InputSignIn, ISignIn, signInSchema } from '../../../features/auth'
import { AuthButton } from '../../../shared/ui/buttons-links/auth-button'

interface IProps {
	onSubmit: (data: ISignIn) => void
}

export function SignInForm({ onSubmit }: IProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignIn>({
		resolver: zodResolver(signInSchema),
	})


	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='relative h-full w-full flex flex-col justify-center'
		>
			<AuthHeader className='absolute top-0 rounded-b-none'>Вход</AuthHeader>
			<div className='relative flex flex-col flex-1 w-full justify-center'>
				<div className='w-full items-center flex flex-col gap-1'>
					<InputSignIn
						title={'Почта'}
						errors={errors}
						register={register}
						registerName={'email'}
						type={'text'}
					/>

					<InputSignIn
						title={'Пароль'}
						errors={errors}
						register={register}
						registerName={'password'}
						type={'password'}
					/>
				</div>
				<div className='w-full flex justify-center'>
					<div className='h-px w-4/5 bg-cyan-100'></div>
				</div>

				<div className='w-full flex justify-center mt-2'>
					<div className='w-3/4 flex gap-3'>
						<span className='opacity-85 text-gray-100'>нет аккаунта?</span>
						<AuthBackLink className='hover:text-cyan-200' type='tosignup' />
					</div>
				</div>
			</div>
			<AuthButton isSubmit={true} className='mt-auto w-full rounded-t-none'>
				Войти
			</AuthButton>
		</form>
	)
}
