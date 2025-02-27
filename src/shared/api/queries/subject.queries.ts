import { subjectService } from '../../../features/subjects'
import { QUERY_KEYS } from '../../model/constants'
import { useInfiniteQuery } from '@tanstack/react-query'


export const useGetSubjects = () => {
	const {
		data,
		isPending: getSubjectsIsLoading,
		isSuccess: getSubjectsIsSuccess,
		isError: getSubjectsIsError,
		hasNextPage,
		isFetchingNextPage,
		refetch: refetchSubjects,
		fetchNextPage,
	} = useInfiniteQuery({
		queryKey: [QUERY_KEYS.subject],
		queryFn: async ({ pageParam }) =>
			await subjectService.findMany(pageParam.toString()),
		initialPageParam: 0,
		getNextPageParam: lastPage => lastPage.nextCursor,
	})

	return {
		data,
		getSubjectsIsLoading,
		getSubjectsIsSuccess,
		getSubjectsIsError,
		hasNextPage,
		isFetchingNextPage,
		refetchSubjects,
		fetchNextPage,
	}
}