import { useMutation } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../../../shared/model/constants'
import { ISignIn, ISignUp } from '../../model/interfaces/auth.interfaces'
import { authService } from '../services/auth.service'

export const useSignUp = () => {
	const {
		mutate: signUp,
		isPending: signUpIsLoading,
		isSuccess: signUpIsSuccess,
		isError: signUpIsError,
		error,
	} = useMutation({
		mutationKey: [QUERY_KEYS.auth],
		mutationFn: async (data: ISignUp) => await authService.signUp(data),
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
	const {
		mutate: signIn,
		isPending: signInIsLoading,
		isSuccess: signInIsSuccess,
		isError: signInIsError,
		error,
	} = useMutation({
		mutationKey: [QUERY_KEYS.auth],
		mutationFn: async (data: ISignIn) => await authService.signIn(data),
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
