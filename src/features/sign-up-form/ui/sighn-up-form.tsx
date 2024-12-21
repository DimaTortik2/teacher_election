import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '../../../shared/ui/button'
import { ISignUp, usePostSignUp } from '../../../shared'

export function SignUpForm() {
	const { signUp, signUpIsLoading, signUpIsSuccess } = usePostSignUp()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignUp>()

	const onSumbit: SubmitHandler<ISignUp> = data => signUp(data)

	const INPUT_CLASSNAME =
		'w-[calc((1vh_+_1vw)*24)] sm:w-[calc((1vh_+_1vw)*21)] md:w-[calc((1vh_+_1vw)*17)] xl:w-[350px] h-[2.5rem] text-xl rounded-xl  text-black'

	return (
		<form
			onSubmit={handleSubmit(onSumbit)}
			className='max-w-[350px] w-full flex flex-col items-center '
		>
			<div className='mb-4'>
				<p>почта</p>
				<input
					{...register('email', { required: true })}
					type='email'
					className={INPUT_CLASSNAME}
				/>
				{errors.email && <p className='text-red-500'>Ошибка почта</p>}
			</div>
			<div className='mb-4'>
				<p>Пароль</p>
				<input
					type='password'
					{...register('password', { required: true })}
					className={INPUT_CLASSNAME}
				/>
				{errors.password && <p className='text-red-500'>Ошибка пароль</p>}
			</div>
			<div className='mb-4'>
				<p>Тайная информация</p>
				<input
					{...register('codeWord', { required: true })}
					className={INPUT_CLASSNAME}
				/>
				{errors.codeWord && <p className='text-red-500'>Неправильный ответ</p>}
			</div>

			<Button type='submit' className='mt-5'>
				Принять
			</Button>
		</form>
	)
}
