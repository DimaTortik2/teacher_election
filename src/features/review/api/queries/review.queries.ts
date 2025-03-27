import {
	useInfiniteQuery,
	useMutation,
	useQueryClient,
} from '@tanstack/react-query'
import { reviewService } from '../services/review.service'
import { QUERY_KEYS } from '../../../../shared/model/constants'
import { IPostTeacherReview } from '../../model/interfaces/teacher-review.interface'

export const usePostReview = () => {
	const queryClient = useQueryClient()

	const {
		mutate: postReview,
		isPending: postReviewIsLoading,
		isSuccess: postReviewIsSuccess,
		isError: postReviewIsError,
	} = useMutation({
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.subject }),
		mutationKey: [QUERY_KEYS.postReview],
		mutationFn: async (
			data: Pick<IPostTeacherReview, 'message' | 'teacherId'>
		) => await reviewService.createOne(data),
	})

	return {
		postReview,
		postReviewIsLoading,
		postReviewIsSuccess,
		postReviewIsError,
	}
}

export const useGetReviews = (id: string) => {
	const {
		data,
		isPending: getReviewIsLoading,
		isSuccess: getReviewIsSuccess,
		isError: getReviewIsError,
		hasNextPage,
		isFetchingNextPage,
		refetch: refetchReviews,
		fetchNextPage,
	} = useInfiniteQuery({
		queryKey: [QUERY_KEYS.review, id],
		queryFn: async ({ pageParam }) =>
			await reviewService.findMany({ cursor: pageParam.toString(), id }),
		initialPageParam: 0,
		getNextPageParam: lastPage => lastPage.nextCursor,
	})

	return {
		data,
		getReviewIsLoading,
		getReviewIsSuccess,
		getReviewIsError,
		hasNextPage,
		isFetchingNextPage,
		refetchReviews,
		fetchNextPage,
	}
}
