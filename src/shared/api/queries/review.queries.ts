import {
	useInfiniteQuery,
	useMutation,
	useQueryClient,
} from '@tanstack/react-query'
import { QUERY_KEYS } from '../../model/constants'
import { reviewService } from '../services/review.service'
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
		mutationKey: [QUERY_KEYS.review],
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

export const useGetReviews = () => {
	const {
		data,
		isPending: getReviewIsLoading,
		isSuccess: getReviewIsSuccess,
		isError: getReviewIsError,
		hasNextPage,
		isFetchingNextPage,
		refetch: refetchSubjects,
		fetchNextPage,
	} = useInfiniteQuery({
		queryKey: [QUERY_KEYS.review],
		queryFn: async ({ pageParam }) =>
			await reviewService.findMany(pageParam.toString()),
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
		refetchSubjects,
		fetchNextPage,
	}
}
