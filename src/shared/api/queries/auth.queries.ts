import { useMutation, useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../model/constants'
import { authService } from '../services/auth.service'
import type { ISignIn, ISignUp } from '../../model/interfaces/auth.interfaces'
import { userService } from '../services/user.service'

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

export const useGetRole = () => {
	const {
		data,
		isError: isRoleError,
		isLoading: isRoleLoading,
		isSuccess: isRoleSuccess,
	} = useQuery({
		queryKey: [QUERY_KEYS.role],
		queryFn: async () => await userService.index(),
	})
	return {
		data,
		isRoleError,
		isRoleLoading,
		isRoleSuccess,
	}
}