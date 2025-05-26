import { useMutation } from '@tanstack/react-query'
import { ISignIn, ISignUp } from '../../model/interfaces/auth.interfaces'
import { authService } from '../services/auth.service'
import { IErrorData } from '@/shared/model/interfaces/interfaces'
import { AxiosError } from 'axios'
import { useDisplayNotification } from '@/shared/ui/notifications'
import { useNavigate } from 'react-router'
import { QUERY_KEYS, ROUTES } from '@/app/model/constants'

export const useSignUp = () => {
	const { displayNotification } = useDisplayNotification()
	const navigate = useNavigate()

	const {
		mutate: signUp,
		isPending: signUpIsLoading,
		isSuccess: signUpIsSuccess,
		isError: signUpIsError,
		error,
	} = useMutation({
		mutationKey: [QUERY_KEYS.auth],
		mutationFn: async (data: ISignUp) => await authService.signUp(data),
		onSuccess: () => {
			navigate(ROUTES.teachers)
			displayNotification({ text: 'Успешно', type: 'success', time: 5000 })
		},

		onError: error => {
			const axiosError = error as AxiosError
			const errorData = axiosError.response?.data as IErrorData
			const errorMessage = errorData.message
			displayNotification({ text: errorMessage, type: 'error' })
		},
	})

	return {
		signUp,
		signUpIsLoading,
		signUpIsSuccess,
		signUpIsError,
		error,
	}
}

export const useSignIn = () => {
	const { displayNotification } = useDisplayNotification()
	const navigate = useNavigate()

	const {
		mutate: signIn,
		isPending: signInIsLoading,
		isSuccess: signInIsSuccess,
		isError: signInIsError,
		error,
	} = useMutation({
		mutationKey: [QUERY_KEYS.auth],
		mutationFn: async (data: ISignIn) => await authService.signIn(data),

		onSuccess: () => {
			navigate(ROUTES.teachers)
			displayNotification({ text: 'Успешно', type: 'success', time: 5000 })
		},

		onError: error => {
			const axiosError = error as AxiosError
			const errorData = axiosError.response?.data as IErrorData
			const errorMessage = errorData.message
			displayNotification({ text: errorMessage, type: 'error' })
		},
	})

	return {
		signIn,
		signInIsLoading,
		signInIsSuccess,
		signInIsError,
		error,
	}
}

export const useSignOut = () => {
	const {
		mutate: signOut,
		isPending: signOutIsLoading,
		isSuccess: signOutIsSuccess,
		isError: signOutIsError,
		error,
	} = useMutation({
		mutationKey: [QUERY_KEYS.auth],
		mutationFn: async () => await authService.signOut(),
	})

	return {
		signOut,
		signOutIsLoading,
		signOutIsSuccess,
		signOutIsError,
		error,
	}
}
