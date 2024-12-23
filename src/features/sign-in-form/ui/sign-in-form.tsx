import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '../../../shared/ui/button'
import { ISignIn, usePostSignIn } from '../../../shared'

export function SignInForm() {
	const { signIn, signInIsLoading, signInIsSuccess } = usePostSignIn()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignIn>()

	const onSumbit: SubmitHandler<ISignIn> = data => signIn(data)

	const INPUT_CLASSNAME =
		'w-[calc((1vh_+_1vw)*24)] sm:w-[calc((1vh_+_1vw)*21)] md:w-[calc((1vh_+_1vw)*17)] xl:w-[350px] h-[2.5rem] text-xl rounded-xl  text-black'

	return (
		<form
			onSubmit={handleSubmit(onSumbit)}
			className='max-w-[350px] w-full flex flex-col items-center'
		>
			<div className='mb-4'>
				<p>почта</p>
				<input
					{...register('email', { required: true })}
					type='email'
					className={INPUT_CLASSNAME}
				/>
				{errors.email && <p className='text-red-500'>Неправильная почта</p>}
			</div>
			<div className='mb-4'>
				<p>Пароль</p>
				<input
					type='password'
					{...register('password', { required: true })}
					className={INPUT_CLASSNAME}
				/>
				{errors.password && <p className='text-red-500'>Неправильный пароль</p>}
			</div>

			<Button type='submit' className='mt-5'>
				Войти
			</Button>
		</form>
	)
}

// sign in : email , password
