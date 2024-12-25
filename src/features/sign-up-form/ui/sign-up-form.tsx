import { Button } from '../../../shared/ui/button/button'
import { ISignUp } from '../../../shared'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form'

interface IProps {
	onSignUp: (data: ISignUp) => void
}

export function SignUpForm({ onSignUp }: IProps) {
	const INPUT_CLASSNAME =
		'w-[calc((1vh_+_1vw)*24)] sm:w-[calc((1vh_+_1vw)*21)] md:w-[calc((1vh_+_1vw)*17)] xl:w-[350px] h-[2.5rem] text-xl rounded-xl  text-black'

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignUp>()

	const onSumbit: SubmitHandler<ISignUp> = data => onSignUp(data)

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
