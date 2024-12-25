import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../model/constants'
import { subjectService } from '../services/subject.service'
import type { ISubject } from '../../model/interfaces/subject.interfaces'
import { useInfiniteQuery } from '@tanstack/react-query'

export const usePostSubject = () => {
	const queryClient = useQueryClient()

	const {
		mutate: postSubject,
		isPending: postSubjectIsLoading,
		isSuccess: postSubjectIsSuccess,
		isError: postSubjectIsError,
	} = useMutation({
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.subjects }),
		mutationKey: [QUERY_KEYS.subjects],
		mutationFn: async (data: Omit<ISubject, 'id' | 'createdAt'>) =>
			await subjectService.createOne(data),
	})

	return {
		postSubject,
		postSubjectIsLoading,
		postSubjectIsSuccess,
		postSubjectIsError,
	}
}

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
		queryKey: [QUERY_KEYS.subjects],
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

export const useDeleteSubject = () => {
	const queryClient = useQueryClient()

	const {
		mutate: deleteSubject,
		isPending: deleteSubjectIsLoading,
		isSuccess: deleteSubjectIsSuccess,
		isError: deleteSubjectIsError,
	} = useMutation({
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.subjects }),
		mutationKey: [QUERY_KEYS.subjects],
		mutationFn: async (id: string) => await subjectService.deleteOne(id),
	})

	return {
		deleteSubject,
		deleteSubjectIsLoading,
		deleteSubjectIsSuccess,
		deleteSubjectIsError,
	}
}
