import { ISignIn, usePostSignIn } from '../../../features/auth'
import { AuthTitle } from '../../../shared/ui/auth-titles/auth-title'
import { Notification } from '../../../shared/ui/notification/notification'
import { SignInForm } from '../../../widgets/auth'

export function SignInPage() {
	const { signIn, signInIsLoading, signInIsSuccess, signInIsError } =
		usePostSignIn()

	const handleSignIn = (data: ISignIn) => {
		signIn(data)
	}

	return (
		<div className='w-screen h-screen flex items-center justify-center'>
			<section
				className='w-screen sm:w-[calc((1vh_+_1vw)*25)] xl:w-[500px]
			 h-screen sm:h-[90vh]
			 bg-zinc-600 flex flex-col items-center justify-center sm:rounded-xl relative  sm:border-4 sm:border-zinc-500 '
			>
				<AuthTitle className='absolute top-0 left-0'>Вход</AuthTitle>
				<SignInForm onSignIn={handleSignIn} />
			</section>

			<Notification
				className='absolute left-0 bottom-0'
				isSuccess={signInIsSuccess}
				isLoading={signInIsLoading}
				isError={signInIsError}
			/>
		</div>
	)
}
