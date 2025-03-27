import { instance } from '../../../../shared/api/api.instance'
import { IRole } from '../../model/interfaces/auth.interfaces'

export const userService = {
	axios: instance,

	index: async function (): Promise<IRole> {
		return await this.axios.get(`/users/me`).then(res => res.data)
	},
}
