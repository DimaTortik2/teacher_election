import { useForm } from 'react-hook-form'


import { zodResolver } from '@hookform/resolvers/zod'
import { AuthButton } from '../../../shared/ui/buttons-links/auth-button'
import { AuthBackLink } from '../../../shared/ui/auth/auth-link'
import { AuthHeader } from '../../../shared/ui/auth/auth-header'
import { ISignUpForm,ISignUp, InputSignUp, signUpSchema } from '../../../features/auth'

interface IProps {
	onSubmit: (data: ISignUp) => void
}

export function SignUpForm({ onSubmit }: IProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignUpForm>({
		resolver: zodResolver(signUpSchema),
		mode: 'onChange',
	})

	const handleFormSubmit = ({ email, password, codeWord }: ISignUpForm) => {
		onSubmit({ email, password, codeWord })
	}

	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)}
			className='relative h-full w-full flex flex-col justify-center'
		>
			<AuthHeader className='absolute top-0 rounded-b-none'>
				Регистрация
			</AuthHeader>

			<div className='relative flex flex-col flex-1 w-full justify-center'>
				<div className='w-full items-center flex flex-col gap-1'>
					<InputSignUp
						title={'Почта'}
						errors={errors}
						register={register}
						registerName={'email'}
						type={'text'}
					/>

					<InputSignUp
						title={'Пароль'}
						errors={errors}
						register={register}
						registerName={'password'}
						type={'password'}
					/>

					<InputSignUp
						title={'Повторите пароль'}
						errors={errors}
						register={register}
						registerName={'password_repeat'}
						type={'password'}
					/>

					<InputSignUp
						title={'Тайная информация'}
						errors={errors}
						register={register}
						registerName={'codeWord'}
						type={'password'}
					/>
				</div>

				<div className='w-full flex justify-center'>
					<div className='h-px w-4/5 bg-cyan-100'></div>
				</div>

				<div className='w-full flex justify-center mt-2'>
					<div className='w-3/4 flex gap-3'>
						<span className='opacity-85 text-gray-100'>есть аккаунт?</span>
						<AuthBackLink className='hover:text-cyan-200' type='tosignin' />
					</div>
				</div>
			</div>

			<AuthButton isSubmit={true} className='w-full rounded-t-none'>
				Зарегаться
			</AuthButton>
		</form>
	)
}
