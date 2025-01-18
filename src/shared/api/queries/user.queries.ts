import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../model/constants'
import { userService } from '../services/user.service'

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
