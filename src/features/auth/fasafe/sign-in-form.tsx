import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthHeader } from '@/features/auth/ui/auth-header'
import { AuthBackLink } from '@/features/auth/ui/auth-link'
import { InputSignIn } from '@/features/auth/ui/input-sign-in'
import { AuthButton } from '@/features/auth/ui/auth-button'
import { signInSchema } from '@/features/auth/model/schemas/schemas'
import { ISignInForm } from '@/features/auth/model/interfaces/auth.interfaces'
import { Layout } from '@/features/auth/ui/layout'
import { useSignInForm } from '../model/hooks/use-sign-in-form'

export function SignInForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignInForm>({
		resolver: zodResolver(signInSchema),
	})

	const { onSubmit } = useSignInForm()

	return (
		<Layout
			onSubmit={handleSubmit(onSubmit)}
			header={<AuthHeader className='rounded-b-none'>Вход</AuthHeader>}
			inputs={[
				<InputSignIn
					title={'Почта'}
					errors={errors}
					register={register}
					registerName={'email'}
					type={'text'}
				/>,

				<InputSignIn
					title={'Пароль'}
					errors={errors}
					register={register}
					registerName={'password'}
					type={'password'}
				/>,
			]}
			backLink={
				<AuthBackLink className='hover:text-theme-200' type='tosignup' />
			}
			buttons={[
				<AuthButton isSubmit={true} className='mt-auto w-full rounded-b-xl'>
					Войти
				</AuthButton>,
			]}
		/>
	)
}
