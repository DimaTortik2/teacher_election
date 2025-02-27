import { instance } from '../../../../shared/api/api.instance'
import { IRole } from '../../model/interfaces/auth.interfaces'

export const tokenService = {
	axios: instance,
	async refresh(): Promise<IRole> {
		return this.axios.get(`/token`).then(res => res.data)
	},
}
