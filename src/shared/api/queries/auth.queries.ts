import { useMutation, useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../model/constants'
import { authService } from '../services/auth.service'
import type { ISignIn, ISignUp } from '../../model/interfaces/auth.interfaces'

export const usePostSignUp = () => {
	const {
		mutate: signUp,
		isPending: signUpIsLoading,
		isSuccess: signUpIsSuccess,
		isError: signUpIsError,
	} = useMutation({
		mutationKey: [QUERY_KEYS.auth],
		mutationFn: async (data: ISignUp) => await authService.signUp(data),
	})

	return {
		signUp,
		signUpIsLoading,
		signUpIsSuccess,
		signUpIsError,
	}
}

export const usePostSignIn = () => {
	const {
		mutate: signIn,
		isPending: signInIsLoading,
		isSuccess: signInIsSuccess,
		isError: signInIsError,
	} = useMutation({
		mutationKey: [QUERY_KEYS.auth],
		mutationFn: async (data: ISignIn) => await authService.signIn(data),
	})

	return {
		signIn,
		signInIsLoading,
		signInIsSuccess,
		signInIsError,
	}
}

export const useSignOut = () => {
	const {
		mutate : signOut,
		isPending: signOutIsLoading,
		isSuccess: signOutIsSuccess,
		isError: signOutIsError,
	} = useMutation({
		mutationKey: [QUERY_KEYS.auth],
		mutationFn: async () => await authService.signOut(),
	})

	return {
		signOut,
		signOutIsLoading,
		signOutIsSuccess,
		signOutIsError,
	}
}
