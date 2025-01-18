import type {
	IRole,
} from '../../model/interfaces/auth.interfaces'
import { instance } from '../api.instance'

export const userService = {
	axios: instance,

	index: async function (): Promise<IRole> {
		return await this.axios.get(`/user/info`).then(res => res.data)
	},
}
