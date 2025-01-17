import type { IRole } from '../../model/interfaces/auth.interfaces'
import { instance } from '../api.instance'

export const tokenService = {
	axios: instance,
	async refresh(): Promise<IRole> {
		return this.axios.get(`/token`).then(res => res.data)
	},
}
