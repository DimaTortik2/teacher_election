import { useEffect } from 'react'
import { useNavigate } from 'react-router'
// import { AxiosError } from 'axios'
import { SignUpForm } from '../../../widgets/auth'
import { ISignUp, useSignUp } from '../../../features/auth'
import { ROUTES } from '../../../shared/model/constants'
// import { IErrorData } from '../shared/model/interfaces'
// import { NotificationContext } from '../shared/notifications/notification-provider'

export function SignUpPage() {
	const navigate = useNavigate()

		const { signUp, signUpIsLoading, signUpIsSuccess } = useSignUp()
	// const { showNotification } = useContext(NotificationContext)

	useEffect(() => {
		if (signUpIsLoading) {
			// showNotification({ message: 'загрузка...', type: 'loading' })
		}
		if (signUpIsSuccess) {
			navigate(ROUTES.signin)
			// showNotification({ message: 'успешно', type: 'success' })
		}
		// if (registerIsError) {
		// const axiosError = error as AxiosError
		// const errorData = axiosError.response?.data as IErrorData
		// const errorMessage = errorData.mesISigninsage
		// showNotification({ message: errorMessage, type: 'error' })
		// }
	}, [signUpIsLoading, signUpIsSuccess, navigate])

	const onSubmit = (data: ISignUp) => {
		signUp(data)
	}

	return (
		<div className='text-white backdrop-blur-3xl bg-[rgba(52,116,132,0.4)] w-full min-[400px]:w-[400px] h-3/4 rounded-2xl border-solid border-4 border-cyan-500'>
			<SignUpForm onSubmit={onSubmit} />
		</div>
	)
}
