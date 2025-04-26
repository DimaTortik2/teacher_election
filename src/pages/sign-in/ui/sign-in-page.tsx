import { useNavigate } from 'react-router'
import { ISignIn, useSignIn } from '../../../features/auth'
import { SignInForm } from '../../../widgets/auth'
import { useEffect } from 'react'
import { ROUTES } from '../../../shared/model/constants'
import { UseDisplayNotification } from '../../../shared/lib/notifications'
import { AxiosError } from 'axios'
import { IErrorData } from '../../../shared/model/interfaces/interfaces'

export function SignInPage() {
	const navigate = useNavigate()
	const { signIn, signInIsLoading, signInIsSuccess, signInIsError, error } =
		useSignIn()

	const { displayNotification } = UseDisplayNotification()

	useEffect(() => {
		if (signInIsLoading) {
			displayNotification({ text: 'Загрузка...', type: 'loading'})
		}
		if (signInIsSuccess) {
			displayNotification({ text: 'Успешно', type: 'success', time: 5000 })
		}
		if (signInIsError) {
			const axiosError = error as AxiosError
			// console.log(error)
			const errorData = axiosError.response?.data as IErrorData
			const errorMessage = errorData.message
			displayNotification({ text: errorMessage, type: 'error' })
		}
	}, [
		signInIsLoading,
		signInIsSuccess,
		signInIsError,
		displayNotification,
		error,
	])

	useEffect(() => {
		if (signInIsSuccess) {
			navigate(ROUTES.teachers)
		}
	}, [navigate, signInIsSuccess])

	const onSubmit = (data: ISignIn) => {
		signIn(data)
	}

	return (
		<div className='text-white backdrop-blur-3xl bg-theme-authform w-full min-[500px]:w-[400px] h-full min-[500px]:h-5/6 max-h-[700px] min-[500px] :rounded-2xl'>
			<SignInForm onSubmit={onSubmit} />
		</div>
	)
}
