import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { AuthButton } from '../../../shared/ui/buttons-links/auth-button'
import { AuthBackLink } from '../../../shared/ui/auth/auth-link'
import { AuthHeader } from '../../../shared/ui/auth/auth-header'
import {
	ISignUpForm,
	ISignUp,
	InputSignUp,
	signUpSchema,
} from '../../../features/auth'
import { useState } from 'react'

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

	const handleFormSubmit = ({
		email,
		password,
		codeWord,
		nickName,
	}: ISignUpForm) => {
		onSubmit({ email, password, codeWord, nickName: nickName || null })
	}

	const [isFirstStep, setIsFirstStep] = useState<boolean>(true)

	console.log(errors)

	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)}
			className='relative h-full w-full flex flex-col justify-center'
		>
			<AuthHeader className='rounded-b-none'>Регистрация</AuthHeader>

			<div className='relative flex flex-col flex-1 w-full justify-center'>
				<div className='w-full items-center flex flex-col gap-1'>
					{isFirstStep ? (
						<>
							<InputSignUp
								title={'Почта'}
								errors={errors}
								register={register}
								registerName={'email'}
								type={'text'}
								key={1}
							/>

							<InputSignUp
								title={'Пароль'}
								errors={errors}
								register={register}
								registerName={'password'}
								type={'password'}
								key={2}
							/>

							<InputSignUp
								title={'Повторите пароль'}
								errors={errors}
								register={register}
								registerName={'password_repeat'}
								type={'password'}
								key={3}
							/>
						</>
					) : (
						<>
							<InputSignUp
								title={'Тайная информация'}
								errors={errors}
								register={register}
								registerName={'codeWord'}
								type={'password'}
								key={4}
							/>
							<InputSignUp
								title={'Имя (по желанию)'}
								errors={errors}
								register={register}
								registerName={'nickName'}
								type={'text'}
								key={5}
							/>
						</>
					)}
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

			{isFirstStep ? (
				<AuthButton
					isSubmit={false}
					onClick={() => setIsFirstStep(false)}
					className='w-full rounded-b-xl'
				>
					Далее
				</AuthButton>
			) : (
				<>
					<AuthButton
						isSubmit={false}
						onClick={() => setIsFirstStep(true)}
						className='w-full '
					>
						назад
					</AuthButton>
					<AuthButton isSubmit={true} className='w-full rounded-b-xl'>
						Зарегаться
					</AuthButton>
				</>
			)}
		</form>
	)
}
