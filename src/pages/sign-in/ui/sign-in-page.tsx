import { useNavigate } from 'react-router'
import { ISignIn, useSignIn } from '../../../features/auth'
import { SignInForm } from '../../../widgets/auth'
import { useEffect } from 'react'
import { ROUTES } from '../../../shared/model/constants'

export function SignInPage() {
	const navigate = useNavigate()
	const { signIn, signInIsLoading, signInIsSuccess } = useSignIn()


	// const { showNotification } = useContext(NotificationContext)

	useEffect(() => {
		if (signInIsLoading) {
			// showNotification({ message: 'загрузка...', type: 'loading' })
		}
		if (signInIsSuccess) {
			navigate(ROUTES.teachers)
			// showNotification({ message: 'успешно', type: 'success' })
		}
	}, [signInIsLoading, signInIsSuccess, navigate])

	const onSubmit = (data: ISignIn) => {
		signIn(data)
	}

	return (
		<div className='text-white backdrop-blur-3xl bg-[rgba(52,116,132,0.4)] w-full min-[400px]:w-[400px] h-3/4 rounded-2xl border-solid border-4 border-cyan-500'>
			<SignInForm onSubmit={onSubmit} />
		</div>
	)
}
