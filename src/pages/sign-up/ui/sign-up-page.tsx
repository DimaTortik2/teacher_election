import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { AxiosError } from 'axios'
import { SignUpForm } from '../../../widgets/auth'
import { ISignUp, useSignUp } from '../../../features/auth'
import { ROUTES } from '../../../shared/model/constants'
import { UseDisplayNotification } from '../../../shared/lib/notifications'
import { IErrorData } from '../../../shared/model/interfaces/interfaces'

export function SignUpPage() {
	const navigate = useNavigate()

	const { signUp, signUpIsLoading, signUpIsSuccess, signUpIsError, error } =
		useSignUp()

	const { displayNotification } = UseDisplayNotification()

	useEffect(() => {
		if (signUpIsLoading) {
			displayNotification({ text: 'Загрузка...', type: 'loading', time: 5000 })
		}
		if (signUpIsSuccess) {
			displayNotification({ text: 'Успешно', type: 'success', time: 5000 })
			navigate(ROUTES.signin)
		}
		if (signUpIsError) {
			const axiosError = error as AxiosError
			console.log(error)
			const errorData = axiosError.response?.data as IErrorData
			const errorMessage = errorData.message
			displayNotification({ text: errorMessage, type: 'error' })
		}
	}, [
		signUpIsLoading,
		signUpIsSuccess,
		signUpIsError,
		navigate,
		displayNotification,
		error,
	])

	const onSubmit = (data: ISignUp) => {
		signUp(data)
	}

	return (
		<div className='text-white backdrop-blur-3xl bg-theme-authform w-full min-[500px]:w-[400px] h-full min-[500px]:h-5/6 min-[500px]:rounded-2xl '>
			<SignUpForm onSubmit={onSubmit} />
		</div>
	)
}
