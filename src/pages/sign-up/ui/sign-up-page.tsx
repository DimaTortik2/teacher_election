import { ISignUp, usePostSignUp, AuthTitle } from '../../../shared'

import { Notification } from '../../../shared/ui/notification/notification'
import { SignUpForm } from '../../../widgets/auth'

export function SignUpPage() {
	const { signUp, signUpIsLoading, signUpIsSuccess, signUpIsError } =
		usePostSignUp()

	const handleSignUp = (data: ISignUp) => {
		signUp(data)
	}

	return (
		<div className='w-screen h-screen flex items-center justify-center'>
			<section
				className='w-screen sm:w-[calc((1vh_+_1vw)*25)] xl:w-[500px]
		 h-screen sm:h-[90vh]
		 bg-zinc-600 flex flex-col items-center justify-center sm:rounded-xl relative  sm:border-4 sm:border-zinc-500 '
			>
				<AuthTitle className='absolute top-0 left-0'>Регистрация</AuthTitle>
				<div>
					<SignUpForm onSignUp={handleSignUp} />
				</div>
			</section>

			<Notification
				className='absolute left-0 bottom-0'
				isSuccess={signUpIsSuccess}
				isLoading={signUpIsLoading}
				isError={signUpIsError}
			/>
		</div>
	)
}
