import { useMutation } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../model/constants'
import { authService } from '../services/auth.service'
import { ISignIn, ISignUp } from '../../model/interfaces/auth.interfaces'

export const usePostSignUp = () => {
	const {
		mutate: signUp,
		isPending: signUpIsLoading,
		isSuccess: signUpIsSuccess,
	} = useMutation({
		mutationKey: [QUERY_KEYS.auth],
		mutationFn: async (data: ISignUp) => await authService.signUp(data),
	})

	return {
		signUp,
		signUpIsLoading,
		signUpIsSuccess,
	}
}

export const usePostSignIn = () => {
	const {
		mutate: signIn,
		isPending: signInIsLoading,
		isSuccess: signInIsSuccess,
	} = useMutation({
		mutationKey: [QUERY_KEYS.auth],
		mutationFn: async (data: ISignIn) => await authService.signIn(data),
	})

	return {
		signIn,
		signInIsLoading,
		signInIsSuccess,
	}
}
