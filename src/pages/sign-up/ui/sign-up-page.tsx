import { SignUpForm } from '../../../features/sign-up-form'
import { AuthTitle } from '../../../shared'

export function SignUpPage() {
	return (
		<section
			className='w-screen sm:w-[calc((1vh_+_1vw)*25)] xl:w-[500px]
		 h-screen sm:h-[90vh]
		 bg-zinc-600 flex flex-col items-center justify-center sm:rounded-xl relative  sm:border-4 sm:border-zinc-500'
		>
			<div className='absolute top-0 left-0'>
				<AuthTitle>Регистрация</AuthTitle>
			</div>
			<div>
				<SignUpForm />
			</div>
		</section>
	)
}
