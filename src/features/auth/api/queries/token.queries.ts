import { useQuery } from '@tanstack/react-query'
import { tokenService } from '../services/token.service'
import { QUERY_KEYS } from '../../../../shared/model/constants'

export const useRefreshTokens = () => {

	const {
		isPending: refreshTokensIsLoading,
		isSuccess: refreshTokensIsSuccess,
		isError: refreshTokensIsError,
	} = useQuery({
		queryKey: [QUERY_KEYS.token],
		queryFn: async () => await tokenService.refresh(),
	})

	return {
		refreshTokensIsLoading,
		refreshTokensIsSuccess,
		refreshTokensIsError,
	}
}
