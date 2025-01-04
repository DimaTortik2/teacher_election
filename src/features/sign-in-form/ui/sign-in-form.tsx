import { Button } from '../../../shared/ui/button/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AuthBackLink, ISignIn } from '../../../shared'

interface IProps {
	onSignIn: (data: ISignIn) => void
}

export function SignInForm({ onSignIn }: IProps) {
	const INPUT_CLASSNAME =
		'w-[calc((1vh_+_1vw)*24)] sm:w-[calc((1vh_+_1vw)*21)] md:w-[calc((1vh_+_1vw)*17)] xl:w-[350px] h-[2.5rem] text-xl rounded-xl  text-black'

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignIn>()

	const onSumbit: SubmitHandler<ISignIn> = data => onSignIn(data)

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
			<div className='h-px w-[300px] bg-[rgba(255,255,255,0.4)] mt-[4vh]'></div>
			<AuthBackLink className='mt-4' type='signUp' />
		</form>
	)
}

// sign in : email , password
