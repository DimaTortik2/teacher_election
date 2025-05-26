import {
	useInfiniteQuery,
	useMutation,
	useQueryClient,
} from '@tanstack/react-query'
import { reviewService } from '../services/reviews.service'
import { QUERY_KEYS } from '@/app/model/constants'
import {
	IPostTeacherReview,
	IReviewResponse,
} from '../../model/interfaces/reviews.interface'
import { formatInfinityData } from '@/shared/model/hooks/format-infinity-data/format-infinity-data'

export const useGetReviews = (id?: string) => {
	const {
		data: rawData,
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
			await reviewService.findMany({ cursor: pageParam.toString(), id }),
		initialPageParam: 0,
		getNextPageParam: lastPage => lastPage.nextCursor,
		enabled: !!id,
	})
	const data = formatInfinityData<IReviewResponse>(rawData)

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

export const usePostReview = (id?: string) => {
	const queryClient = useQueryClient()
	const { refetchReviews } = useGetReviews(id)
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
		onSuccess: () => {
			console.log('refetch')
			refetchReviews()
		},
	})

	return {
		postReview,
		postReviewIsLoading,
		postReviewIsSuccess,
		postReviewIsError,
	}
}
