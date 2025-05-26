import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthButton } from '@/features/auth/ui/auth-button'
import { AuthBackLink } from '@/features/auth/ui/auth-link'
import { AuthHeader } from '@/features/auth/ui/auth-header'
import { useState } from 'react'
import { ISignUpForm } from '@/features/auth/model/interfaces/auth.interfaces'
import { signUpSchema } from '@/features/auth/model/schemas/schemas'
import { InputSignUp } from '@/features/auth/ui/input-sign-up'
import { Layout } from '@/features/auth/ui/layout'
import { useSignUpForm } from '../model/hooks/use-sign-up-form'

export function SignUpForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignUpForm>({
		resolver: zodResolver(signUpSchema),
		mode: 'onChange',
	})

	const { onSubmit } = useSignUpForm()

	const handleFormSubmit = ({
		email,
		password,
		codeWord,
		nickName,
	}: ISignUpForm) => {
		onSubmit({ email, password, codeWord, nickName: nickName || null })
	}

	const [isFirstStep, setIsFirstStep] = useState<boolean>(true)

	return (
		<Layout
			onSubmit={handleSubmit(handleFormSubmit)}
			header={<AuthHeader className='rounded-b-none'>Регистрация</AuthHeader>}
			inputs={
				isFirstStep
					? [
							<InputSignUp
								title={'Почта'}
								errors={errors}
								register={register}
								registerName={'email'}
								type={'text'}
								key={1}
							/>,

							<InputSignUp
								title={'Пароль'}
								errors={errors}
								register={register}
								registerName={'password'}
								type={'password'}
								key={2}
							/>,

							<InputSignUp
								title={'Повторите пароль'}
								errors={errors}
								register={register}
								registerName={'password_repeat'}
								type={'password'}
								key={3}
							/>,
					  ]
					: [
							<InputSignUp
								title={'Тайная информация'}
								errors={errors}
								register={register}
								registerName={'codeWord'}
								type={'password'}
								key={4}
							/>,
							<InputSignUp
								title={'Имя (по желанию)'}
								errors={errors}
								register={register}
								registerName={'nickName'}
								type={'text'}
								key={5}
							/>,
					  ]
			}
			backLink={
				<AuthBackLink className='hover:text-theme-200' type='tosignin' />
			}
			buttons={
				isFirstStep
					? [
							<AuthButton
								isSubmit={false}
								onClick={() => setIsFirstStep(false)}
								className='w-full rounded-b-xl'
							>
								Далее
							</AuthButton>,
					  ]
					: [
							<AuthButton
								isSubmit={false}
								onClick={() => setIsFirstStep(true)}
								className='w-full '
							>
								назад
							</AuthButton>,
							<AuthButton isSubmit={true} className='w-full rounded-b-xl'>
								Зарегаться
							</AuthButton>,
					  ]
			}
		/>
	)
}
