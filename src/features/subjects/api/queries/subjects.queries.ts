import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { subjectService } from '../services/subject.service'
import { QUERY_KEYS } from '@/app/model/constants'
import { ISubject } from '../../model/interfaces/subject.interfaces'
import { formatInfinityData } from '@/shared/model/hooks/format-infinity-data/format-infinity-data'

export const useGetSubjects = () => {
	const {
		data: rawData,
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
	const data = formatInfinityData<ISubject>(rawData)

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

export const useGetPaginatedSubjects = ({
	page,
	limit,
	title,
}: {
	page: number
	limit: number
	title?: string
}) => {
	const {
		data,
		isPending: getPaginatedSubjectsIsLoading,
		isSuccess: getPaginatedSubjectsIsSuccess,
		isError: getPaginatedSubjectsIsError,
		refetch: refetchPaginatedSubjects,
	} = useQuery({
		queryKey: [QUERY_KEYS.adminSubject, page, limit],
		queryFn: async () =>
			await subjectService.findManyPaginated({ page, limit, title }),
	})

	return {
		data,
		getPaginatedSubjectsIsLoading,
		getPaginatedSubjectsIsSuccess,
		getPaginatedSubjectsIsError,
		refetchPaginatedSubjects,
	}
}
