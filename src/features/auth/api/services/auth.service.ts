import { instance } from '../../../../shared/api/api.instance'
import { QUERY_KEYS } from '../../../../app/model/constants'
import {
	IAuthResponse,
	ISignIn,
	ISignUp,
} from '../../model/interfaces/auth.interfaces'

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

	signOut: async function () {
		return await this.axios
			.delete(`/${QUERY_KEYS.auth}/signout`)
			.then(res => res.data)
	},
}
