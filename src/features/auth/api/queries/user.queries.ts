import { useQuery } from '@tanstack/react-query'
import { userService } from '../services/user.service'
import { QUERY_KEYS } from '../../../../app/model/constants'

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
