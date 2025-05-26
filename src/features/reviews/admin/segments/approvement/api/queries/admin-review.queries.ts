import { useMutation } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/app/model/constants'
import { reviewService } from '../services/admin-review.service'

export const useApprove = () => {
	const {
		mutate: approve,
		isPending: approveIsLoading,
		isSuccess: approveIsSuccess,
		isError: approveIsError,
	} = useMutation({
		mutationKey: [QUERY_KEYS.review],
		mutationFn: async (id: string) => reviewService.approve(id),
	})

	return {
		approve,
		approveIsLoading,
		approveIsSuccess,
		approveIsError,
	}
}

export const useUnapprove = () => {
	const {
		mutate: unapprove,
		isPending: unapproveIsLoading,
		isSuccess: unapproveIsSuccess,
		isError: unapprovewIsError,
	} = useMutation({
		mutationKey: [QUERY_KEYS.review],
		mutationFn: async (id: string) => reviewService.unapprove(id),
	})

	return {
		unapprove,
		unapproveIsLoading,
		unapproveIsSuccess,
		unapprovewIsError,
	}
}
