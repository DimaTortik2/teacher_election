import { SignInForm } from '../../../features/sign-in-form'
import { AuthTitle } from '../../../shared/auth-title'

export function SignInPage() {
	return (
		<section
			className='w-screen sm:w-[calc((1vh_+_1vw)*25)] xl:w-[500px]
		 h-screen sm:h-[90vh]
		 bg-zinc-600 flex flex-col items-center justify-center sm:rounded-xl relative  sm:border-4 sm:border-zinc-500'
		>
			<div className='absolute top-0 left-0'>
				<AuthTitle>Войти</AuthTitle>
			</div>
			<div>
				<SignInForm />
			</div>
		</section>
	)
}
