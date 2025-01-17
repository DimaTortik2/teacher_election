import type { IRole } from '../../model/interfaces/auth.interfaces'
import { instance } from '../api.instance'

export const tokenService = {
	axios: instance,

	refresh: async function (): Promise<IRole> {
		return await this.axios.get(`/auth`).then(res => res.data)
	},
}
