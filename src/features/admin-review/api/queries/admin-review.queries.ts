import { useInfiniteQuery, useMutation } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../../../shared/model/constants'
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

export const useGetReviews = (id:string) => {
	const {
		data,
		isPending: getReviewsIsLoading,
		isSuccess: getReviewsIsSuccess,
		isError: getReviewsIsError,
		hasNextPage,
		isFetchingNextPage,
		refetch: refetchReviews,
		fetchNextPage,
	} = useInfiniteQuery({
		queryKey: [QUERY_KEYS.review, id],
		queryFn: async ({ pageParam }) =>
			await reviewService.findMany(pageParam.toString()),
		initialPageParam: 0,
		getNextPageParam: lastPage => lastPage.nextCursor,
		enabled: !!id,
	})

	return {
		data,
		getReviewsIsLoading,
		getReviewsIsSuccess,
		getReviewsIsError,
		hasNextPage,
		isFetchingNextPage,
		refetchReviews,
		fetchNextPage,
	}
}
