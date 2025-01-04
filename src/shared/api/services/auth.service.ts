import { QUERY_KEYS } from '../../model/constants'
import type {
	IAuthResponse,
	IRole,
	ISignIn,
	ISignUp,
} from '../../model/interfaces/auth.interfaces'
import { instance } from '../api.instance'

export const authService = {
	axios: instance,

	signUp: async function (data: ISignUp): Promise<IAuthResponse> {
		return await this.axios
			.post(`/${QUERY_KEYS.auth}/signup`, data)
			.then(res => res.data)
	},

	signIn: async function (data: ISignIn): Promise<IAuthResponse> {
		return await this.axios
			.post(`/${QUERY_KEYS.auth}/signin`, data)
			.then(res => res.data)
	},
}
